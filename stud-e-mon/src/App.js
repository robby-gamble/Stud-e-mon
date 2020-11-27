import React, { useState, Component } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect,  } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./fonts.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FAQ from "./pages/FAQ";
import Home from "./pages/Home";
import Template from "./pages/Template";
import Subject from "./pages/Subject";
import SignIn from "./pages/Login";
import SignUp from "./pages/Signup";
import { auth } from "./components/Firebase/firebase"


function PrivateRoute({component: Component, authenticated, ...rest}){
  return (
    <Route
        {...rest}
        render = {(props) => authenticated === true
        ? <Component {...props}/>
        : <Redirect to = {{pathname: './login', state: {from: props.location} }}/> }
      />
  )
}

function PublicRoute({ component: Component, authenticated, ...rest}){
  return (
    <Route
        {...rest}
        render={(props) => authenticated === false
        ? <Component {...props} />
        : <Redirect to="/Home" />}
      />
  )
}


class App extends Component {
  constructor(){
    super();
    this.state = {
      authenticated: false,
      loading: true,
    };
  }

  componentDidMount() {
    auth().onAuthStateChanged((user) =>{
      if(user) {
        this.setState({
          authenticated:true,
          loading:false,
        });
      } else{
        this.setState({
          authenticated:false,
          loading:false,
        });
      }
    });
  }
  render() {
    return this.state.loading === true ? <h2>Loading...</h2> : (
      <Router>
        <Switch>
          <Route exact path="/" component = {Template}></Route>
          <PrivateRoute path = "/Home" authenticated={this.state.authenticated} component = {Home}></PrivateRoute>
          <PrivateRoute path = "/Subject" authenticated={this.state.authenticated} component = {Subject}></PrivateRoute>
          <PublicRoute path="/signup" authenticated={this.state.authenticated} component = {SignUp}></PublicRoute>
          <PublicRoute path="/login" authenticated={this.state.authenticated} component = {SignIn}></PublicRoute>
        </Switch>
      </Router>
    );
  }
  
}

export default App;

