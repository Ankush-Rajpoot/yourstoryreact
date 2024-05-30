// import { format } from "date-fns";
import { Link } from "react-router-dom";
export default function Story({
  categoryId,
  categoryName,
  title,
  description,
  content,
  //   createdAt,,
  author,
  cover,
  _id,
}) {
  return (
    <div>
      <h2>CategoryName: {categoryName}</h2>
      <h2>Author: {author.username}</h2>

      <Link to={`/story/${_id}`}>
        <h3>Title: {title}</h3>
      </Link>

      <div>
        <Link to={`/story/${_id}`}>
          <img src={`http://localhost:4000/` + cover} />
        </Link>
      </div>
      <h2>Description: {description}</h2>
    </div>

    //   {/* <p>{content}</p> */}
  );
}
