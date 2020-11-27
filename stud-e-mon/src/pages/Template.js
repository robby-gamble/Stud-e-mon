import React from "react";
import { Row, Col, Jumbotron, Button, Alert } from "react-bootstrap";
import { Redirect } from "react-router-dom";

import NavBar from "../components/NavBar";

export default function Home() {
  return (
    
    <div style={{ fontFamily: "Raleway" }}>
      <NavBar />
      
    </div>
  ) 
}

let styles = {
  h1: {
    textAlign: "center",
    paddingTop: 0,
    paddingBottom: 0,
  },

  center: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#8d4982",
  },
  center2: {
    display: "flex",
    justifyContent: "center",
    marginTop: 16,
    marginBottom: 16,
  },
  h2: {
    textAlign: "center",
  },
};
