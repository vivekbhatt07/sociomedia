import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Landing, Detail, Like, Favorite } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/like" element={<Like />} />
      <Route path="/favorite" element={<Favorite />} />
      <Route path="/:postId" element={<Detail />} />
    </Routes>
  );
}

export default App;
