import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

function Loading() {
  return (
    <Box sx={{ display: "flex" }}>
      <CircularProgress style={{ color: "#4F4DA7" }} />
    </Box>
  );
}

export default Loading;
