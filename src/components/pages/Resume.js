import React from "react";
import "./Resume.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const Resume = () => (
  <React.Fragment>
    <CssBaseline />
    <Container maxWidth="sm">
      <Typography
        component="div"
        style={{ backgroundColor: "#cfe8fc", height: "100vh" }}
      />
    </Container>
  </React.Fragment>
);

export default Resume;
