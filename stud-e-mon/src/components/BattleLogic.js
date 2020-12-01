import React, { Component } from "react";
import { question_decks } from "./datasets/question_decks";
import BattleGame from "../components/BattleGame";


import { Row, Col, Alert, Card } from "react-bootstrap";

class BattleLogic extends Component {
  state = {
    topic: this.props.topic,
    currentQuestiontIndex: 0, //current questions index
    gameEnd: false,
    questionDeck: null,
    wrng1: null,
    wrng2: null,
    wrng3: null,
    rightAnswer: null, 

  };

  loadData() {
    const topics = question_decks.allTopics;


    for(var i = 0; i < Object.keys(topics).length; i++) {
        if (topics[i].TopicName == this.state.topic) { 
            
            this.setState(() => {
            return { questionDeck: topics[i].questionsObj }; 
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
        question: this.state.questionDeck[currentIndex].question,
        wrng1: this.state.questionDeck[currentIndex].wrng1,
        wrng2: this.state.questionDeck[currentIndex].wrng2,
        wrng3: this.state.questionDeck[currentIndex].wrng3,
        rightAnswer: this.state.questionDeck[currentIndex].answer,
      };
    });
  }

  render() {
    const {
      question,
      options,
      currentIndex,
      rightAnswer,
      gameEnd,
      wrng1,
      wrng2,
      wrng3,
    } = this.state; //get the current state


    if(!gameEnd){
      return (
      <div>
        <BattleGame
        Question = {question}
        answer1  = {wrng1}
        answer2  = {wrng2}
        answer3  = {wrng3}
        answer2  = {rightAnswer}
        
        />
      </div>
      )
    }



  }

}


export default BattleLogic;
