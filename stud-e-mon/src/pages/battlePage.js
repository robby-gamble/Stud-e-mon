import React from "react";
import { Row, Col } from "react-bootstrap";
import BattleLogic from "../components/BattleLogic";
import PropTypes from "prop-types";

import { Redirect } from "react-router-dom";
import "../components/style.css";


export default function Module(props) {

  return  (
    <div style={{ fontFamily: "Raleway" }}>
      <BattleLogic
        battletopic={props.topic}  
      ></BattleLogic>
    </div>
  ) 
}

Module.propTypes = {
  filename: PropTypes.string.isRequired,
  start: PropTypes.number.isRequired,
};
