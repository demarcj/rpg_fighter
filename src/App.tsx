import * as React from "react";
import  { useState } from "react";
import  { Player } from "./components/players/player";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

export default function App() { 
  const [health, set_health] = useState(20);
  const [mp, set_mp] = useState(10);
  return (
    <>
      <Player name={"John"}/>
    </>
  )
};


