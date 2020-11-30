import React from "react";
import ModuleDropdown from "../components/ModuleDropdown";
import { Redirect } from "react-router-dom";
import HomeJumbotron from "../components/HomeJumbotron";

export default function Training() {
  return (
    <div>
    <ModuleDropdown name="Modules" />
    <HomeJumbotron
        title="Create Cards"
        content="go to battle page"
        link="/Battle"
        backgroundimg="grey"/>
      </div>
  ) 
}
