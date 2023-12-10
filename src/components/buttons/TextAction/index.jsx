import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const TextAction = styled(Button)(() => ({
  color: "#fff",
  backgroundColor: "#60a5fa",
  fontWeight: "400",
  textTransform: "capitalize",
  padding: "0.4em 1.4em",
  borderRadius: "200px",
  "&:hover": {
    backgroundColor: "rgb(24, 144, 255)",
  },
}));

export default TextAction;
