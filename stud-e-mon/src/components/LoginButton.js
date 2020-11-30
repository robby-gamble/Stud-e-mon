import React from 'react';
import firebase from 'firebase';
 
function LoginButton({setUser}) {
 
  function logIn() {
    var provider = new firebase.auth.GoogleAuthProvider(); 
    firebase.auth().signInWithPopup(provider).then(function(result) {
      console.log(result.user);
      setUser(result.user);
    }).catch(function(error) {
      console.log(error);
   });
  }

  return (
    <button onClick={() => logIn()}>
      Login
    </button>);
  }

export default LoginButton;