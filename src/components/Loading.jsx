import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
const Loading = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        marginTop: "2rem",
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default Loading;
