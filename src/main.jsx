import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";

import {
  PostProvider,
  LikeProvider,
  FavoriteProvider,
  ModeProvider,
} from "./context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <ModeProvider>
        <FavoriteProvider>
          <LikeProvider>
            <PostProvider>
              <App />
            </PostProvider>
          </LikeProvider>
        </FavoriteProvider>
      </ModeProvider>
    </Router>
  </React.StrictMode>
);
