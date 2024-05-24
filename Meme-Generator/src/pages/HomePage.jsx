import React from "react";
import { getMemes } from "../api/Meme.js";
import MemeCard from "../components/MemeCard";
import { useEffect } from "react";
import { useState } from "react";

function HomePage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getMemes().then((d) => {
      setData(d.data.memes);
    });
  }, []);

  return (
    <div className="row">
      {data &&
        data.map((meme) => <MemeCard img={meme.url} title={meme.name} />)}
    </div>
  );
}

export default HomePage;
