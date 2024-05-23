import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function PostPage() {
  const { postId } = useParams();
  const [post, setPost] = useState("");
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((res) => res.json())
      .then((res) => setPost(res))
      .catch((err) => console.log(err));
  }, []);
  if (post === null) return <p>loading...</p>;
  return (
    <div className="post-page">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

export default PostPage;
