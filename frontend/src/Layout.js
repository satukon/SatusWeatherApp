import React from "react";
import { Container } from "@mui/material";
import Navbar from "./components/Navbar";

// The application layout.

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Container
        style={{
          marginTop: "50px",
          marginBottom: "50px",
          paddingTop: "50px",
          paddingBottom: "75px",
          paddingLeft: "50px",
          paddingRight: "50px",
          backgroundColor: "white",
          borderRadius: "10px",
        }}
      >
        {children}
      </Container>
    </div>
  );
};

export default Layout;
