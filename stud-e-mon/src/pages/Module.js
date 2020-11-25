import React from "react";
import { Row, Col } from "react-bootstrap";
import Lesson from "../components/Lesson";
import PropTypes from "prop-types";
import QuizLogic from "../components/QuizLogic";
import { Redirect } from "react-router-dom";
import "../components/style.css";
import { m1_Data } from "../components/ModuleDataSets/m1_Data";
import { m2_Data } from "../components/ModuleDataSets/m2_Data";
import { m3_Data } from "../components/ModuleDataSets/m3_Data";

export default function Module(props) {
  //do we wanna generate the module in here or with a helper?
  return localStorage.getItem("logged in") ? (
    <div style={{ fontFamily: "Raleway" }}>
      <QuizLogic
        moduleData={props.data}
        start={props.start}
        section={props.section}
        nextSection={props.nextSection}
      ></QuizLogic>
    </div>
  ) : (
    <Redirect to="/signin" />
  );
}

Module.propTypes = {
  filename: PropTypes.string.isRequired,
  start: PropTypes.number.isRequired,
};
