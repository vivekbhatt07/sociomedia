import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";

import { PostProvider, LikeProvider, FavoriteProvider } from "./context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <PostProvider>
        <FavoriteProvider>
          <LikeProvider>
            <App />
          </LikeProvider>
        </FavoriteProvider>
      </PostProvider>
    </Router>
  </React.StrictMode>
);
