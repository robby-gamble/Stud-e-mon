import React, { Component } from "react";
import { question_decks } from "./datasets/question_decks";

import battleImage from '../assets/battlesequence.png';

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
    choices: this.shuffle(questions[0].choices),
    rightAnswer: questions[0].answer, 
    question: questions[0].question,


    };
  }


   shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  componentDidMount(prevState, prevProps) {
    console.log('I was triggered during componentDidMount')

   
  }


  componentDidUpdate(prevState, prevProps){
    const { currentIndex } = this.state; //get the current index
  
    if (currentIndex === this.state.questionDeck.length-1 ){
      return;
    }

      if(this.state.currentIndex != prevProps.currentIndex){
        this.setState(() => {
          return {
            
            choices: this.shuffle(this.state.questionDeck[currentIndex].choices),
            rightAnswer: this.state.questionDeck[currentIndex].answer,
            question : this.state.questionDeck[currentIndex].question,
          };
      }
    );
  }
}
  hurtEnemy(){

  }

  handleClick(response){

    if (this.state.rightAnswer === response){
      this.setState(() => {
        return {
          currentIndex : this.state.currentIndex + 1,
        };
      })
      //hurtEnemy();

    }
    else {
      this.setState(() => {
        return {
          currentIndex : this.state.currentIndex + 1,
        };
      })
    } 

  }

  render() {
    const {
      question,
      currentIndex,
      gameEnd,
      choices,
    } = this.state; //get the current state
  
    if(gameEnd === false){
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
            {question}
            </h3>
          </div>
          <div>
          <button onClick={(event) => this.handleClick(choices[0])} type="button" class="btn btn-primary btn-lg">
              <h3 style={{ textAlign: "center", color: "black"}}>
              {choices[0]}
              </h3>
          </button>
          <button onClick={(event) => this.handleClick(choices[0])} type="button" class="btn btn-primary btn-lg">
              <h3 style={{ textAlign: "center", color: "black"}}>
              {choices[1]}
              </h3>
          </button>
          <button onClick={(event) => this.handleClick(choices[0])} type="button" class="btn btn-primary btn-lg">
              <h3 style={{ textAlign: "center", color: "black"}}>
              {choices[2]}
              </h3>
          </button>
          <button onClick={(event) => this.handleClick(choices[0])} type="button" class="btn btn-primary btn-lg">
              <h3 style={{ textAlign: "center", color: "black"}}>
              {choices[3]}
              </h3>
          </button>
              
          </div>
      </div>
    </div>
    
      )
    }
  



  }

}


export default BattleLogic;
