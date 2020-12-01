import React from "react";
import { Row, Col, Jumbotron, Button, Alert } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import GoogleBtn from '../components/GoogleBtn';
import HomeJumbotron from "../components/HomeJumbotron";

//
//testtest

export default function Home() {
  return (
    
    <div style={{ fontFamily: "Raleway" }}>
      
      <Row style={styles.center}>
        <h4
          style={{
            textAlign: "center",
            paddingTop: 0,
            paddingBottom: 0,
            marginTop: 2,
            marginBottom: 2,
            color: "#ffffff",
          }}
        >
          Welcome to Stud-e-mon!
        </h4>
  
      </Row>
      
      <Row style={styles.center2}>
      </Row>
      <HomeJumbotron
        title="Single player"
        content="Start"
        link="/Subject"
        backgroundimg="grey"

      />
      <HomeJumbotron
        title="Create Cards"
        content="Start"
        link="/Subject"
        backgroundimg="grey"

      />
      <GoogleBtn />

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
    backgroundColor: "black",
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
