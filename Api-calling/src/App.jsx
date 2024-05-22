import { useEffect } from "react";
import { getPost } from "./assets/api/Api.js";
import { useState } from "react";
import PostCard from "./assets/components/PostCard.jsx";
import "./App.css";

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    getPost()
      .then((res) => {
        setData(res);
        console.log(data);
      })
      .catch((err) => {
        console.log("Error " + err);
      });
  }, []);
  return (
    <div className="app-container">
      {data ? (
        data.map((data) => (
          <PostCard
            userId={data.userId}
            id={data.id}
            title={data.title}
            body={data.body}
          />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
