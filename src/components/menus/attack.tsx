import React from "react";
import  { Health, Magic } from "../ui/index";


interface T{
  attack:string
}

export const Attack: React.FC <T> = props => (
  <>
    <ul>
      <li>Attack
        <ul>
          Sword Attack
        </ul>
      </li>
    </ul>
  </>
);