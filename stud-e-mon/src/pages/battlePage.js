import React from "react";
import { Row, Col } from "react-bootstrap";
import BattleLogic from "../components/BattleLogic";

import PropTypes from "prop-types";

import { Redirect } from "react-router-dom";
import "../components/style.css";


export default function battlePage(props) {

  return  (

      <BattleLogic
        battletopic={props.battletopic}  
      />
   
  ) 
}

battlePage.propTypes = {
  battletopic: PropTypes.string.isRequired,

};
