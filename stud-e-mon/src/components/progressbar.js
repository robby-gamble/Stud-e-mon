import React from "react";
import { Row, Col, Jumbotron, Button } from "react-bootstrap";


export default class ProgressBar extends React.Component {
    constructor(props){
      super(props);
      var newHealth = String(this.props.newHealth) +"%"
          
 
      this.state = {
        health: newHealth,
      }
    }
 
    
    render() {
      return (
        <div class="progress">
        <div class="progress-bar progress-bar-danger" role="progressbar"
         style={{
          width: this.state.health }}
          aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      );
    }
  }
  