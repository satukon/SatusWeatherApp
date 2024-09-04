import React from "react";
import { Alert, Typography } from "@mui/material";

// A resuable component to display error messages.

const ErrorMessage = ({ message }) => {
  return (
    <Alert severity="error" sx={{ mb: 2 }}>
      <Typography variant="body2" color="error">
        {message}
      </Typography>
    </Alert>
  );
};

export default ErrorMessage;
