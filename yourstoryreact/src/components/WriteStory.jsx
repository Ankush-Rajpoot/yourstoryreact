import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { TextField, Button, Typography } from "@mui/material";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // import styles
import { Link } from "react-router-dom";
const modules = {
  toolbar: [
    [{ font: [] }],
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ list: "ordered" }, { list: "bullet" }],
    ["bold", "italic", "underline", "strike"],
    [{ color: [] }, { background: [] }],
    [{ script: "sub" }, { script: "super" }],
    ["blockquote", "code-block"],
    [{ align: [] }],
    ["link", "image"],
    ["clean"],
  ],
};

const formats = [
  "font",
  "header",
  "list",
  "bullet",
  "bold",
  "italic",
  "underline",
  "strike",
  "color",
  "background",
  "script",
  "blockquote",
  "code-block",
  "align",
  "link",
  "image",
];

function WriteStory() {
  const { categoryId, categoryName } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);
  const [fileUrl, setFileUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Here you can perform any action with the story data, such as saving it to a database
    console.log("Category ID:", categoryId);
    console.log("Category Name:", categoryName);
    console.log("Title:", title);
    console.log("Description:", description);
    console.log("Content:", content);
    console.log("file", file[0]);

    const data = new FormData();
    data.set("categoryId", categoryId);
    data.set("categoryName", categoryName);
    data.set("title", title);
    data.set("description", description);
    data.set("content", content);
    data.set("file", file[0]);

    // const storyData = {
    //   categoryId,
    //   categoryName,
    //   title,
    //   description,
    //   content,
    // };

    try {
      // Send a POST request with the story data as JSON
      const response = await fetch("http://localhost:4000/write", {
        method: "POST",
        // headers: {
        //   "Content-Type": "application/json",
        // },
        body: data,
        credentials: "include",
      });

      if (response.ok) {
        alert("Your story has been submitted");
      }

      // // Optionally, clear the form fields after submission
      // setTitle("");
      // setDescription("");
      // setContent("");
    } catch (e) {
      console.log("Error in writing ", e);
    }

    // Optionally, you can clear the form fields after submission
    // setTitle("");
    // setDescription("");
    // setContent("");
  };

  // const handleFileSubmit = async (e) => {
  //   e.preventDefault();

  //   console.log(files);
  //   const fileData = new FormData();
  //   fileData.append("file", files[0]);
  //   fileData.append("upload_preset", "images_preset");

  //   console.log(fileData);

  //   try {
  //     const response = await fetch(
  //       "https://api.cloudinary.com/v1_1/dxnzunrni/image/upload",
  //       {
  //         method: "POST",
  //         body: fileData,
  //       }
  //     );

  //     if (!response.ok) {
  //       throw new Error("Failed to upload file");
  //     }

  //     const data = await response.json();

  //     console.log(data);
  //     setFileUrl(data.url);

  //     const h3 = document.querySelector(".file");
  //     h3.innerText = data.url;
  //   } catch (error) {
  //     console.error("Error uploading file:", error);
  //   }

  //   // const response = await fetch("http://localhost:4000/uploadImage", {
  //   //   method: "POST",
  //   //   body: fileData,
  //   // });
  //   // const result = await response.json();
  //   // console.log(result);
  // };

  useEffect(() => {
    const typewriterText = "rite Your Story";
    let index = 0;
    let isAdding = true;
    const speed = 150; // Speed of typing and deleting
    const delay = 2000; // Delay before deleting starts

    const typeWriter = () => {
      if (isAdding) {
        if (index < typewriterText.length) {
          document.querySelector(".header-title span").innerText =
            typewriterText.slice(0, index + 1);
          index++;
          setTimeout(typeWriter, speed);
        } else {
          isAdding = false;
          setTimeout(typeWriter, delay);
        }
      } else {
        if (index > 0) {
          document.querySelector(".header-title span").innerText =
            typewriterText.slice(0, index);
          index--;
          setTimeout(typeWriter, speed);
        } else {
          isAdding = true;
          setTimeout(typeWriter, speed);
        }
      }
    };

    typeWriter();
  }, []);

  return (
    <div className="write-story-container">
      <Link to="/">
        <Button className="submit-button" color="primary">
          Home
        </Button>
      </Link>

      {/* <div className="form-group">
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="submit-button"
        >
          <Link to="/">Home</Link>
        </Button>
      </div> */}
      <Typography variant="h4" className="header-title">
        W<span></span>
        <span className="blink-caret">|</span>
      </Typography>
      <form onSubmit={handleSubmit}>
        <div className="form-block">
          <Typography variant="h6" className="category-text">
            Category: <span className="category-value">{categoryName}</span>
          </Typography>
          <div className="form-group">
            <TextField
              label="Title"
              variant="outlined"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              fullWidth
              required
              className="title-field"
            />
          </div>
          <div className="form-group">
            <TextField
              label="Short Description"
              variant="outlined"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              fullWidth
              required
              className="description-field"
            />
          </div>
        </div>
        <div className="form-group">
          <input type="file" onChange={(ev) => setFile(ev.target.files)} />
        </div>

        <div className="content-block">
          <div className="form-group content-group">
            <ReactQuill
              theme="snow"
              value={content}
              onChange={setContent}
              className="content-field"
              modules={modules}
              formats={formats}
              placeholder="Write your story here..."
            />
          </div>
          <div className="form-group">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className="submit-button"
            >
              Submit
            </Button>
          </div>
        </div>
      </form>

      {/* <form onSubmit={handleFileSubmit}>
        <div className="form-group">
         
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="submit-button"
            // onClick={handleFileSubmit}
          >
            Submit File
          </Button>
        </div>
      </form> */}
    </div>
  );
}

export default WriteStory;
