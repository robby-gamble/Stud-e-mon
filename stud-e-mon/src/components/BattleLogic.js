import React, { Component } from "react";
import { question_decks } from "./datasets/question_decks";
import BattleGame from "../components/BattleGame";


import { Row, Col, Alert, Card } from "react-bootstrap";

class BattleLogic extends Component {
  constructor(props){
    super(props);
    const topicname = this.props.battletopic;
    var testTopic = "";
    var questions = [];


  for(var i = 0; i < question_decks.length; i++) {
    testTopic = question_decks[i].TopicName;
      if (testTopic === topicname) { 
          
         

          questions = question_decks[i].questionsObj;
          break;
      }
          
      }
  

  this.state = {
    currentIndex: 0, //current questions index
    gameEnd: false,
    questionDeck: questions,
    wrng1: questions[0].wrng1,
    wrng2: questions[0].wrng2,
    wrng3: questions[0].wrng3,
    rightAnswer: questions[0].answer, 
    question: questions[0].question,


    };
  }


  componentDidMount() {
    console.log('I was triggered during componentDidMount')
    //loadGame();
  }


  componentDidUpdate(prevState){
    const { currentIndex } = this.state; //get the current index
   

      if(currentIndex !== prevState.currentIndex){
        this.setState(() => {
          return {
            wrng1: this.state.questionDeck[currentIndex].wrng1,
            wrng2: this.state.questionDeck[currentIndex].wrng2,
            wrng3: this.state.questionDeck[currentIndex].wrng3,
            rightAnswer: this.state.questionDeck[currentIndex].answer,
            question : this.state.questionDeck[currentIndex].question,
          };
    }
  );
}
  }

  render() {
    const {
      question,
      currentIndex,
      rightAnswer,
      gameEnd,
      wrng1,
      wrng2,
      wrng3,
    } = this.state; //get the current state
  
    if(gameEnd === false){
      return (
      <div>
        <BattleGame
        Question = {question}
        answer1  = {wrng1}
        answer2  = {wrng2}
        answer3  = {wrng3}
        answer4  = {rightAnswer}
        
        />
      </div>
      )
    }
  



  }

}


export default BattleLogic;
