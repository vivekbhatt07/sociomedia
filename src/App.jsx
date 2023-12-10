import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Landing, Detail, Like, Favorite } from "./pages";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <Toaster />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/like" element={<Like />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/:postId" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
