import { Routes, Route } from "react-router-dom";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Landing, Detail, Like, Favorite } from "./pages";
import { Toaster } from "react-hot-toast";
import CssBaseline from "@mui/material/CssBaseline";
import { useMode } from "./context";

function App() {
  const { isDarkTheme } = useMode();

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const lightTheme = createTheme({
    palette: {
      mode: "light",
    },
  });
  return (
    <div>
      <Toaster />
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/like" element={<Like />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/:postId" element={<Detail />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
