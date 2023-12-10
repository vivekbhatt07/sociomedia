import toast from "react-hot-toast";
import { Delete } from "@mui/icons-material";

export const toastHandler = (toastType, toastText) => {
  switch (toastType) {
    case "success":
      toast.success(toastText, {
        style: { fontSize: "12px", fontWeight: "500" },
      });
      break;
    case "error":
      toast.error(toastText, {
        style: { fontSize: "12px", fontWeight: "500" },
      });
      break;
      // case "delete":
      //   toast.error(toastText, {
      //     icon: <Delete sx={{ color: "#f43f5e" }} />,
      //     style: { fontSize: "12px", fontWeight: "500" },
      //   });
      break;
  }
};
