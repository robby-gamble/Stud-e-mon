import React, {Component} from 'react';
import {logout} from './auth';

export default class GoogleBtn extends Component{
  constructor(props){
    super(props);
    this.state = {
      error: null
    };
  }

  async googleSignOut(){
    try{
      await logout();
    } catch (error) {
      this.setState({error: error.message});
    }
  }

  render(){
    return(
      <div>
        <button onClick = {this.lgout} type = "button">
        Sign Out here
        </button>
      </div>

    );
  }

}