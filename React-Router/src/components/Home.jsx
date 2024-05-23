import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
function Home() {
  const [post, setPost] = useState("");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((res) => setPost(res))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="post-contatiner">
      <div className="title">
        {post &&
          post.map((data) => (
            <NavLink to={`/post/${data.id}`}>
              <li>{data.title}</li>
            </NavLink>
          ))}
      </div>
    </div>
  );
}

export default Home;
