import { IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";

const IconAction = styled(IconButton)(() => ({
  color: "#fff",
  backgroundColor: "#a8a29e",
  fontWeight: "400",
  textTransform: "capitalize",
  height: "40px",
  width: "40px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "&:hover": {
    backgroundColor: "#7c3aed",
  },
}));

export default IconAction;
