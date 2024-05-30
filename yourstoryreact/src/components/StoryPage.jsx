import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
export default function StoryPage() {
  const [postInfo, setPostInfo] = useState(null);

  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:4000/story/${id}`).then((response) => {
      response.json().then((postInfo) => {
        setPostInfo(postInfo);
      });
    });
  });

  if (!postInfo) return "";

  return (
    <div>
      <div>
        <img src={`http://localhost:4000/${postInfo.cover}`} alt="" />
      </div>
      <h1>BY: {postInfo.author.username}</h1>
      <h1>{postInfo.title}</h1>
      <br />
      <div dangerouslySetInnerHTML={{ __html: postInfo.content }} />
    </div>
  );
}
