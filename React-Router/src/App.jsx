import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import HomeSetting from "./components/HomeSetting";
import PostPage from "./components/PostPage";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:postId" element={<PostPage />} />
        <Route path="/setting">
          <Route path="home" element={<HomeSetting />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
