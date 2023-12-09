import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Landing, Detail } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/:postId" element={<Detail />} />
    </Routes>
  );
}

export default App;
