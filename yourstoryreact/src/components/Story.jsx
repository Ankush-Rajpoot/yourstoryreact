import { Link } from "react-router-dom";

export default function Story({
  categoryId,
  categoryName,
  title,
  description,
  content,
  author,
  cover,
  _id,
}) {
  return (
    <div className="story-card">
      <div className="story-info">
        <h3 className="story-category">Category: {categoryName}</h3>
        <h3 className="story-author">Author: {author.username}</h3>
        <Link to={`/story/${_id}`} className="story-title">
          <h3>Title: {title}</h3>
        </Link>
        <p className="story-description">Description: {description}</p>
      </div>
      <div className="story-image-container">
        <Link to={`/story/${_id}`}>
          <img src={`http://localhost:4000/` + cover} alt={title} className="story-image"/>
        </Link>
      </div>
    </div>
  );
}
