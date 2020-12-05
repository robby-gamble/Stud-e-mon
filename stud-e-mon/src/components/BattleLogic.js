import React, { Component } from "react";
import { question_decks } from "./datasets/question_decks";
import ProgressBar from "../components/progressbar";
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

    
  var attDMgP = (100/question_decks.length)*2;
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
    monsterAttDmg: attDMgM


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
    const { monsterHealth } = this.state;
    const { playerAttDmg } = this.state;

    var newMonsterH = monsterHealth - playerAttDmg;

    this.setState(() => {
      return {
        monsterHealth : newMonsterH,
      };
    })


  }
  
  hurtPlayerRight(){
    const { playerHealth } = this.state;

    var newPlayerH = playerHealth - 10;

    this.setState(() => {
      return {
        playerHealth : newPlayerH,
      };
    })


  }

  hurtPlayerWrong(){
    const { playerHealth } = this.state;
    const { monsterAttDmg } = this.state;

    var newPlayerH = playerHealth - monsterAttDmg;

    this.setState(() => {
      return {
        monsterHealth : newPlayerH,
      };
    })

  }

  handleClick(response){

    const { playerHealth } = this.state;
    const { monsterAttDmg } = this.state;
    const { monsterHealth } = this.state;
    const { playerAttDmg } = this.state;
    //hurt player right hurt enemy
    if (this.state.rightAnswer === response){
      var newMonsterH = monsterHealth - playerAttDmg;
      var newPlayerH = playerHealth - 10;
      
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

    this.setState(() => {
      return {
        currentIndex : this.state.currentIndex + 1,
        monsterHealth : newPlayerH,
      };
    })
       
    } 

  }

  render() {
    const {
      question,
      gameEnd,
      choices,
      playerHealth,
      monsterHealth
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
          <div class ="player">Player Health Level <ProgressBar newHealth={playerHealth} /></div>
          
          <div class= "monster">Monster Health Level <ProgressBar newHealth ={monsterHealth}/> </div>
          

          
          <div class="boxed">
            <h3 style={{ textAlign: "center", color: "black"}}>
            {question}
            </h3>
          </div>
          <div>
          <button onClick={(event) => this.handleClick(choices[0])} type="button" class="btn btn-primary btn-lg" >
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
