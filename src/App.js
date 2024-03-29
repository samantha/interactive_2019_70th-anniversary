// Main
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import logo from './logo.svg';
import './App.css';

/// COMPONENTS ///
import Navigation from "./components/navbar";
import Home from "./components/home";
import EditEvent from "./components/edit-event";
import CreateEvent from "./components/create-event";
// import CreateStaff from "./components/create-staff";
import Soroptimist from "./components/articles/soroptimist";
import Timeline from "./components/timeline";


function App() {
  return (
    <Router>
      <div className = "container">
      <Navigation />
        <br/>
        <Route path="/" exact component = {Home} />
        <Route path="/edit/:id" exact component = {EditEvent} />
        <Route path="/create" component = {CreateEvent} />
        {/* <Route path="/add-staff" component = {CreateStaff} /> */}
        <Route path="/timeline" component = {Timeline} />
        <Route path="/soroptimist" component = {Soroptimist} />
      </div>
    </Router>

  );
}

export default App;
