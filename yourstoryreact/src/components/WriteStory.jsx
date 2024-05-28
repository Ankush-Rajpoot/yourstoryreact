import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { TextField, Button, Typography } from '@mui/material';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // import styles

const modules = {
  toolbar: [
    [{ 'font': [] }],
    [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ 'color': [] }, { 'background': [] }],
    [{ 'script': 'sub' }, { 'script': 'super' }],
    ['blockquote', 'code-block'],
    [{ 'align': [] }],
    ['link', 'image'],
    ['clean']
  ],
};

const formats = [
  'font',
  'header',
  'list', 'bullet',
  'bold', 'italic', 'underline', 'strike',
  'color', 'background',
  'script',
  'blockquote', 'code-block',
  'align',
  'link', 'image'
];

function WriteStory() {
  const { categoryId, categoryName } = useParams();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you can perform any action with the story data, such as saving it to a database
    console.log('Category ID:', categoryId);
    console.log('Category Name:', categoryName);
    console.log('Title:', title);
    console.log('Description:', description);
    console.log('Content:', content);

    // Optionally, you can clear the form fields after submission
    setTitle('');
    setDescription('');
    setContent('');
  };

  useEffect(() => {
    const typewriterText = 'rite Your Story';
    let index = 0;
    let isAdding = true;
    const speed = 150; // Speed of typing and deleting
    const delay = 2000; // Delay before deleting starts

    const typeWriter = () => {
      if (isAdding) {
        if (index < typewriterText.length) {
          document.querySelector('.header-title span').innerText = typewriterText.slice(0, index + 1);
          index++;
          setTimeout(typeWriter, speed);
        } else {
          isAdding = false;
          setTimeout(typeWriter, delay);
        }
      } else {
        if (index > 0) {
          document.querySelector('.header-title span').innerText = typewriterText.slice(0, index);
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
      <Typography variant="h4" className="header-title">
        W<span></span><span className="blink-caret">|</span>
      </Typography>
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
            onClick={handleSubmit}
            className="submit-button"
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}

export default WriteStory;

