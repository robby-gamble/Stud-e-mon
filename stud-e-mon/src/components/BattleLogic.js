import React, { Component } from "react";
import { question_decks } from "./datasets/question_decks";
import ProgressBar from "../components/progressbar";
import battleImage from '../assets/battlesequence.png';

import $ from 'jquery'; 

import { Row, Col, Alert, Card, Modal, Button } from "react-bootstrap";

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

    
  var attDMgP = (100/(question_decks.length))*2;

  var temp1 = ((question_decks.length));
  
  var temp = ((temp1*.25));
  if (temp < 1){
    temp = 1;
  }
  var attDMgM = 100/temp;


  

  this.state = {
    currentIndex: 0, //current questions index
    gameEnd: false,
    questionDeck: questions,
    choices: this.shuffle(questions[0].choices),
    rightAnswer: questions[0].answer, 
    question: questions[0].question,
    playerHealth: 100,
    monsterHealth: 100,
    playerAttDmg: attDMgP,
    monsterAttDmg: attDMgM,
    showModal: true


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
    console.log('I was triggered during componentDidMount');


   
  }


  componentDidUpdate(prevState, prevProps){
    const { currentIndex } = this.state; //get the current index

    
  
    if (currentIndex === this.state.questionDeck.length-1 ){
      return;
    }

      if(this.state.currentIndex !== prevProps.currentIndex){
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

  gameOver(){
    this.setState(() => {
      return{
        gameEnd : true
      };
    });

  }


  handleClick(response){

    const { playerHealth } = this.state;
    const { monsterAttDmg } = this.state;
    const { monsterHealth } = this.state;
    const { playerAttDmg } = this.state;
    var answer = this.state.rightAnswer;
    //hurt player right hurt enemy
    if (answer === response){
      var newMonsterH = monsterHealth - playerAttDmg;
      var newPlayerH = playerHealth - 10;

      if (newMonsterH <= 0){

        newMonsterH = 0;
      }
      
      this.setState(() => {
        return {
          currentIndex : this.state.currentIndex + 1,
          playerHealth : newPlayerH,
          monsterHealth : newMonsterH,
        };
      })


    }
    else {
    var newPlayerH = playerHealth - monsterAttDmg;
    if( newPlayerH <= 0){
        this.gameOver();
    }
    this.setState(() => {
      return {
        currentIndex : this.state.currentIndex + 1,
        playerHealth : newPlayerH,
      };
    })
       
    } 

  }

  handleclose(){
    this.setState(() => {
      return{
        showModal : false
      };
    });

  }


  render() {
    const {
      question,
      gameEnd,
      choices,
      playerHealth,
      monsterHealth,
      showModal
    } = this.state; //get the current state
    
    if(gameEnd===true){
      
      return(
      <div>
      <div class="container">
        
      <Modal show={showModal}>
        <Modal.Header closeButton>
          <Modal.Title>Game Over</Modal.Title>
        </Modal.Header>
        <Modal.Body>The game is over!</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" href="/Subject">
            Select Topic
          </Button>
        </Modal.Footer>
      </Modal>

      </div>
          <img
              src={battleImage}
              alt="Battle Sequence"
              width="1110"
          />
          <div class ="player">Player Health Level <ProgressBar newHealth={playerHealth} /></div>
          <br></br>
          <div class= "monster">Monster Health Level <ProgressBar newHealth ={monsterHealth}/> </div>
          <br></br>
          
          <div class="boxed">
          
            <h3 style={{ textAlign: "center", color: "black"}}>
            Question: {question}
            </h3>
            
            <br></br>
          </div>
          <div>
          <button  type="button" disabled class="btn btn-primary btn-lg btn-block" >
              <h3 style={{ textAlign: "center", color: "black"}}>
              {choices[0]}
              </h3>
          </button>
          
          <button  type="button" disabled class="btn btn-primary btn-lg btn-block">
              <h3 style={{ textAlign: "center", color: "black"}}>
              {choices[1]}
              </h3>
          </button>
          
          <button  type="button" disabled class="btn btn-primary btn-lg btn-block">
              <h3 style={{ textAlign: "center", color: "black"}}>
              {choices[2]}
              </h3>
          </button>
          

          <button  type="button" disabled class="btn btn-primary btn-lg btn-block">
              <h3 style={{ textAlign: "center", color: "black"}}>
              {choices[3]}
              </h3>
          </button>
              
          </div>
      </div>
      
      )
    } else {
      return (
    <div>
      <div class="container">
          <img
              src={battleImage}
              alt="Battle Sequence"
              width="1110"
          />
          <div class ="player">Player Health Level <ProgressBar newHealth={playerHealth} /></div>
          <div class= "monster">Monster Health Level <ProgressBar newHealth ={monsterHealth}/> </div>
          <br></br>
          
          <div class="boxed">
          
            <h3 style={{ textAlign: "center", color: "black"}}>
            Question: {question}
            </h3>
            
            <br></br>
          </div>
          <div>
          <button onClick={(event) => this.handleClick(choices[0])} type="button"  class="btn btn-primary btn-lg btn-block" >
              <h3 style={{ textAlign: "center", color: "black"}}>
              {choices[0]}
              </h3>
          </button>
          
          <button onClick={(event) => this.handleClick(choices[1])} type="button"  class="btn btn-primary btn-lg btn-block">
              <h3 style={{ textAlign: "center", color: "black"}}>
              {choices[1]}
              </h3>
          </button>
          
          <button onClick={(event) => this.handleClick(choices[2])} type="button"  class="btn btn-primary btn-lg btn-block">
              <h3 style={{ textAlign: "center", color: "black"}}>
              {choices[2]}
              </h3>
          </button>
          

          <button onClick={(event) => this.handleClick(choices[3])} type="button"  class="btn btn-primary btn-lg btn-block">
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
