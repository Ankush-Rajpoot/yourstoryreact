import React, { useState } from 'react';
import { useParams } from 'react-router-dom';


function WriteStory() {
  const { categoryName } = useParams();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Title:', title);
    console.log('Description:', description);
    console.log('Content:', content);
    console.log('Category:', categoryName);
  };

  return (
    <div className="write-story-container">
      <h2>Write Your Story</h2>
      <form onSubmit={handleSubmit} className="story-form">
        <fieldset className="details-fieldset">
          <legend>Story Details</legend>
          <div className="form-group">
            <label htmlFor="category">Category:</label>
            <input type="text" id="category" value={categoryName} disabled className="category-field" />
          </div>
          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="title-field"
              placeholder="Enter the title"
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Short Description:</label>
            <input
              type="text"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="description-field"
              placeholder="Enter a short description"
            />
          </div>
        </fieldset>
        <div className="form-group story-content-group">
          <label htmlFor="content">Story:</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            className="content-field"
            placeholder="Write your story here..."
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
}

export default WriteStory;
