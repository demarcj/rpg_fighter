import React from "react";
import  { Health, Magic } from "../ui";
import  { Attack } from "../menus";


interface T{
  name:string
}

export const Player: React.FC <T> = props => (
  <>
    <Health
      current_health={20}
      max_health={20}
    />
    <Magic
      current_magic={20}
      max_magic={20}
    />
    <div className="player_name">{props.name}</div>
    <Attack attack={"sword attack"}/>
  </>
);