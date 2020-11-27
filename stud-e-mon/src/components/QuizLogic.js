import React, { Component } from "react";
import { m1_Data } from "./ModuleDataSets/m1_Data";
import { m2_Data } from "./ModuleDataSets/m2_Data";
import { m3_Data } from "./ModuleDataSets/m3_Data";
import { Player } from "video-react";
import { user } from "./person/user";
import { Row, Col, Alert, Card } from "react-bootstrap";

class QuizLogic extends Component {
  state = {
    userAnswer: null, //current users answer
    currentIndex: this.props.start, //current questions index
    options: [], //the four options
    quizEnd: false,
    disabled: false,
    isVideo: false,
    data: m1_Data,
    rightAnswer: null, // default to m1 data
    correct: null,
    explanation: null,
    moduleId: 0,
  };

  loadData() {
    this.setState(() => {
      switch (this.props.moduleData) {
        case "m1_Data":
          return { data: m1_Data, moduleId: 1 };
        case "m2_Data":
          return { data: m2_Data, moduleId: 2 };
        case "m3_Data":
          return { data: m3_Data, moduleId: 3 };
      }
    });
  }
  componentDidMount() {
    this.loadData();
    this.loadQuiz();
  }

  //Component that holds the current quiz remake this for final quiz
  loadQuiz = () => {
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

  updateProgressAndNext = () => {
    fetch(
      `${process.env.REACT_APP_API_URL}/user/saveprogress/${this.state.moduleId}/${this.props.section}`,
      {
        method: "PUT",
        mode: "cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: localStorage.getItem("email"),
        }),
      }
    ).then((res) => {
      window.location.href = `/resources/Module-${
        this.state.moduleId
      }/${this.props.nextSection.split(" ").join("-")}`;
    });
  };

  zeroQuestionHander = () => {
    const { currentIndex } = this.state;
    this.setState({
      currentIndex: this.state.currentIndex + 2,
      isVideo: !this.state.isVideo,
    });
    this.updateProgressAndNext();
  };

  //Handles Click event for the next button
  nextQuestionHander = () => {
    const { currentIndex } = this.state;
    //special case for introduction
    if (currentIndex === 0) {
      this.setState({
        currentIndex: this.state.currentIndex + 1,
      });
    }
    this.setState({
      currentIndex: this.state.currentIndex + 1,
      isVideo: !this.state.isVideo,
    });
  };

  previousQuestionHander = () => {
    //  const {userAnswer, answer, score} = this.state
    this.setState({
      currentIndex: this.state.currentIndex - 1,
      isVideo: !this.state.isVideo,
      userAnswer: null,
    });
  };

  firstPreviousQuestionHander = () => {
    //  const {userAnswer, answer, score} = this.state
    this.setState({
      currentIndex: this.state.currentIndex - 2,
      isVideo: !this.state.isVideo,
      userAnswer: null,
    });
  };

  //Handles Click event for the next button
  nextSectionHander = () => {
    const { currentIndex } = this.state;
    //special case for introduction
    if (currentIndex === 0) {
      this.setState({
        currentIndex: this.state.currentIndex + 1,
      });
    }
    this.setState({
      currentIndex: this.state.currentIndex + 1,
      isVideo: !this.state.isVideo,
    });

    this.updateProgressAndNext();
  };

  //Update the component
  componentDidUpdate(prevProps, prevState) {
    const { currentIndex } = this.state;
    if (this.state.currentIndex !== prevState.currentIndex) {
      this.setState(() => {
        return {
          disabled: true,
          question: this.state.data[currentIndex].question,
          options: this.state.data[currentIndex].options,
          rightAnswer: this.state.data[currentIndex].answer,
          explanation: this.state.data[currentIndex].explanation,
        };
      });
    }
  }

  //Check the answer
  checkAnswer = (a) => {
    this.setState({
      userAnswer: a,
      disabled: false,
    });
  };

  //Responds to the click of the finish button
  finishHandler = () => {
    if (this.state.currentIndex === this.state.data.length - 1) {
      this.setState({
        quizEnd: true,
      });
      fetch(
        `${process.env.REACT_APP_API_URL}/user/saveprogress/${this.state.moduleId}/${this.props.section}`,
        {
          method: "PUT",
          mode: "cors",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: localStorage.getItem("email"),
          }),
        }
      ).then((res) => {});
    }
  };

  render() {
    const {
      question,
      options,
      currentIndex,
      userAnswer,
      quizEnd,
      rightAnswer,
      correct,
      explanation,
    } = this.state; //get the current state

    if (quizEnd) {
      return (
        <div>
          <h1
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: 25,
              paddingBottom: 25,
            }}
          >
            Module Complete
          </h1>
          <p
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            {" "}
            <ul>
              <li>Anyone can fall into homelessness.</li>
              <li>
                1.7 million households live on cash income of less than $2/day
                per person.
              </li>
              <li>55% of people have subprime credit.</li>
              <li>75% of people are living paycheck to paycheck. </li>
              <li>
                Only 25% of people who are eligible for federal housing
                assistance actually receive it.
              </li>
              <li>No two families have the same history or circumstances.</li>
            </ul>
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: 25,
            }}
          >
            <a href="/resources/training">
              <button type="button" class="btn btn-outline-primary">
                Back to the Trainings page
              </button>
            </a>
          </div>
          {/* <ul>
            {this.state.data.map((item, index) => (
              <li className="options" key={index}>
                {item.answer}
              </li>
            ))}
          </ul> */}
        </div>
      );
    }

    /*Introduction page for the module*/

    if (currentIndex === 0) {
      return (
        <div>
          <div class="card bg-light mb-3" style={{ maxWidth: "100%" }}>
            <div class="card-body">
              <p class="card-text">{question}</p>
            </div>
          </div>
          <Row
            style={{
              display: "flex",
              justifyContent: "flex-end",
              paddingRight: 15,
            }}
          >
            <button
              style={styles.nextButton}
              type="button"
              class="btn btn-outline-primary"
              onClick={this.zeroQuestionHander}
            >
              Next
            </button>
          </Row>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <a href="/resources/training">
              <button type="button" class="btn btn-outline-primary">
                Back to the Trainings page
              </button>
            </a>
          </div>
        </div>
      );
    }

    /* Video page for the module */
    if (this.state.isVideo === true) {
      return (
        <div>
          <div style={{ marginTop: 15, paddingRight: "8%", paddingLeft: "8%" }}>
            <Player playsInline poster="/assets/poster.png" src={question} />
          </div>
          <div
            style={{
              display: "flex",
              paddingTop: 15,
              paddingRight: "8%",
              paddingLeft: "8%",
              justifyContent: "space-between",
            }}
          >
            {currentIndex === 2 && (
              // Next button only displays if the above is true
              <button
                type="button"
                class="btn btn-outline-primary"
                onClick={this.firstPreviousQuestionHander}
              >
                Previous
              </button>
            )}
            {currentIndex > 2 && (
              // Next button only displays if the above is true
              <button
                type="button"
                class="btn btn-outline-primary"
                onClick={this.previousQuestionHander}
              >
                Previous
              </button>
            )}

            <button
              style={styles.nextButton}
              type="button"
              class="btn btn-outline-primary"
              onClick={this.nextQuestionHander}
            >
              Next
            </button>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: 25,
            }}
          >
            <a href="/resources/training">
              <button type="button" class="btn btn-outline-primary">
                Back to the Trainings page
              </button>
            </a>
          </div>
        </div>
      );
    } else {
      /*options page for the module */
      return (
        <div>
          <h2 style={{ paddingTop: 25 }}>{question}</h2>
          {!this.state.disabled && (
            <Col>
              <Row>
                <Alert
                  style={{
                    marginTop: 16,
                    marginBottom: 0,
                    backgroundColor: "#fec357",
                    paddingLeft: 60,
                    display: "flex",
                    justifyContent: "center",
                    fontFamily: "Raleway",
                  }}
                >
                  <Col>
                    <Row
                      style={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Alert.Heading>{explanation}</Alert.Heading>
                    </Row>
                  </Col>
                </Alert>
              </Row>
            </Col>
          )}
          {options.map((
            option //for each option, new paragraph
          ) => (
            <li
              className={`options ${
                userAnswer === option
                  ? option === rightAnswer
                    ? "correct"
                    : "incorrect"
                  : null
              }`}
              onClick={() => this.checkAnswer(option)}
            >
              <input
                type="radio"
                className="radioCustomButton"
                name="radioGroup"
              />
              <label className="radioCustomLabel">{option}</label>
            </li>
          ))}
          <div
            style={{
              display: "flex",
              paddingTop: 15,
              paddingRight: "1%",
              paddingLeft: "1%",
              justifyContent: "space-between",
            }}
          >
            {currentIndex > 0 && (
              // Next button only displays if the above is true
              <button
                style={styles.prevButton}
                type="button"
                class="btn btn-outline-primary"
                onClick={this.previousQuestionHander}
              >
                Previous
              </button>
            )}

            {currentIndex < this.state.data.length - 1 && (
              // Next button only displays if the above is true
              <button
                style={styles.nextButton}
                type="button"
                class="btn btn-outline-primary"
                disabled={this.state.disabled}
                onClick={this.nextSectionHander}
              >
                Next
              </button>
            )}

            {currentIndex === this.state.data.length - 1 && (
              <button
                type="button"
                class="btn btn-outline-primary"
                disabled={this.state.disabled}
                onClick={this.finishHandler}
              >
                Finish
              </button>
            )}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: 25,
            }}
          >
            <a href="/resources/training">
              <button type="button" class="btn btn-outline-primary">
                Back to the Trainings page
              </button>
            </a>
          </div>
        </div>
      );
    }
  }
}

let styles = {
  prevButton: {},
  div: {
    display: "flex",
    justifyContent: "center !important",
  },
};

export default QuizLogic;
