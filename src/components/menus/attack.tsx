import React from "react";
import styles from "./style.module.css"
import  { Health, Magic } from "../ui/index";


interface T{
  attack:string
}

export const Attack: React.FC <T> = props => (
  <>
    <ul className={styles.menu}>
      <li className={styles.character_menu}>Attack
        <ul className={styles.character_submenu}>
          <li className={styles.character_submenu_item}>Sword Attack</li>
          <li className={styles.character_submenu_item}>Boomerang</li>
          <li className={styles.character_submenu_item}>Punch</li>
          <li className={styles.character_submenu_item}>Arrow Shot</li>
        </ul>
      </li>
      <li className={styles.character_menu}>Defend</li>
      <li className={styles.character_menu}>Magic</li>
      <li className={styles.character_menu}>Item</li>
    </ul>
  </>
);