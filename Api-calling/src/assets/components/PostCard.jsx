import React from "react";

function PostCard({ userId, id, title, body }) {
  return (
    <div className="post-container">
      <ul className="ul">
        <div className="title">
          {" "}
          <h2>Title: {title}</h2>
        </div>
        <div className="body">
          {" "}
          <p>Body: {body}</p>
        </div>
      </ul>
    </div>
  );
}

export default PostCard;
