import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./fonts.css";



import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/Home";
import FAQ from "./pages/FAQ";
import Template from "./pages/Template";
import Subject from "./pages/Subject"

export default function App() {
  return (

    
      
        <Router>
          
            
            <Route path="/" component={Template} />
            <Route path="/resources/FAQ" component={FAQ} />
            <Route path="/Home" component={Home} />
            <Route path="/Subject" component={Subject} />
            
          
        </Router>
      
    


  );
}
