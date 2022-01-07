import React from "react";
import './styles.css';
import PlayerX from '../../img/X.png';
const Player=()=>{
    return(<button className="player"><img src={PlayerX}></img></button>)
}
export default Player;