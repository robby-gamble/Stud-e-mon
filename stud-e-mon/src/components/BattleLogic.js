import React, { Component } from "react";
import { question_decks } from "./datasets/question_decks";

import { Player } from "video-react";
import { user } from "./person/user";
import { Row, Col, Alert, Card } from "react-bootstrap";

class BattleLogic extends Component {
  state = {
    topic:this.props.topic,
    currentQuestiontIndex: 0, //current questions index
    options: [], //the four options
    gameEnd: false,
    questionDeck: null,
    rightAnswer: null, // default to m1 data
    correct: null,
  };

  loadData() {
      if(question_decks.topic.contains)

    for(var i = 0; i < question_decks.length; i++) {
        if (question_decks[i].TopicName == this.state.topic) { 
            
            this.setState(() => {
            return { questionDeck: question_decks[i].questionsObj }; 
        } );
            break;
        }
    }

    
  }

  componentDidMount() {
    this.loadData();
    this.loadGame();
  }

  loadGame = () => {
    const { currentIndex } = this.state; //get the current index
    var checker = false;
    if (currentIndex % 2 === 0 && currentIndex > 0) {
      checker = true;
    }

    this.setState(() => {
      return {
        question: this.state.data[currentIndex].question,
        options: this.state.data[currentIndex].options,
        rightAnswer: this.state.data[currentIndex].answer,
        explanation: this.state.data[currentIndex].explanation,
        isVideo: checker,
      };
    });
  };

}


export default BattleLogic;
