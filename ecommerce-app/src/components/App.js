import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const reactExports = Object.keys(React)
function App() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        // alignItems: 'center',
        justifyContent: "center",
        paddingTop: 30,
      }}
    >
      <Typography>Hello</Typography>
      <ul>
      {reactExports.map((objec) => (<li>{objec}</li>))}
      </ul>
    </Box>
  );
}

export default App;
