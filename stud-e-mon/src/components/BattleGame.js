import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import battleImage from '../assets/battlesequence.png';

export default class BattleGame extends React.Component {
  styles = {
    jumbobutton: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  };

  render() {
    return (
      <div>
      <div class="container">
          <img
              src={battleImage}
              alt="Battle Sequence"
              width="1110"
          />
          <div class ="player">Player Health Level</div>
          <div class= "monster">Monster Health Level</div>
          <div class="boxed">
            <h3 style={{ textAlign: "center", color: "black"}}>
              {this.props.Question}
            </h3>
          </div>
          <div>
          <button type="button" class="btn btn-primary btn-lg">
              <h3 style={{ textAlign: "center", color: "black"}}>
              {this.props.answer1}
              </h3>
          </button>
          <button type="button" class="btn btn-primary btn-lg">
              <h3 style={{ textAlign: "center", color: "black"}}>
              {this.props.answer2}
              </h3>
          </button>
          <button type="button" class="btn btn-primary btn-lg">
              <h3 style={{ textAlign: "center", color: "black"}}>
              {this.props.answer3}
              </h3>
          </button>
          <button type="button" class="btn btn-primary btn-lg">
              <h3 style={{ textAlign: "center", color: "black"}}>
              {this.props.answer4}
              </h3>
          </button>
              
          </div>
      </div>



  </div>
    );
  }
}
