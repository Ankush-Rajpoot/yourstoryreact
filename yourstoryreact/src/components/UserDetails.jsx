import { useEffect, useState } from "react";

export default function UserDetails() {
  const [details, setDetails] = useState(null);
  const [files, setFiles] = useState(null);
  const [fileUrl, setFileUrl] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/userDetails", {
      credentials: "include",
    }).then((response) => {
      response.json().then((elem) => {
        setDetails(elem);
        console.log(elem);
      });
    });
  }, []);

  if (!details) {
    return <div>Loading...</div>;
  }

  const handleFileSubmit = async (e) => {
    e.preventDefault();

    console.log(files);
    const fileData = new FormData();
    fileData.append("file", files[0]);
    fileData.append("upload_preset", "images_preset");

    console.log(fileData);

    try {
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dxnzunrni/image/upload",
        {
          method: "POST",
          body: fileData,
        }
      );

      if (!response.ok) {
        throw new Error("Failed to upload file");
      }

      const data = await response.json();

      console.log(data);
      setFileUrl(data.url);
    } catch (error) {
      console.error("Error uploading file:", error);
    }

    try {
      const response = await fetch("http://localhost:4000/write", {
        method: "POST",
        body: fileUrl,
        credentials: "include",
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Profile</h1>
      <form onSubmit={handleFileSubmit}>
        <div className="form-group">
          <input type="file" onChange={(ev) => setFiles(ev.target.files)} />
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
      </form>
      <div>
        <p>
          <strong>Username:</strong> {details.username}
        </p>
        <p>
          <strong>Email:</strong> {details.email}
        </p>
        <div>
          <strong>Cover Image:</strong>
          <br />
          <img
            src={`http://localhost:4000/${details.cover.replace(/\\/g, "/")}`}
            alt="Cover"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
}
