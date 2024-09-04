import React from "react";
import { Box, Typography } from "@mui/material";

// A reusable component for H1 level headers.

const H1 = ({ text }) => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "WhiteSmoke",
        paddingTop: "4px",
        marginBottom: "35px",
        borderRadius: "10px",
        textAlign: "center",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography variant="h6" component="h2" gutterBottom>
        {text}
      </Typography>
    </Box>
  );
};

export default H1;
