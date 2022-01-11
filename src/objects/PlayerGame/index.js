import React from "react";
import './styles.css';
import PlayerX from '../../img/X.png';
import PlayerO from '../../img/Circle.png'
const PlayerGame=({player})=>{
   const players=[];
   players['x']=PlayerX
   players['o']=PlayerO
   
    // let player= '';
    // if(props.player==='x'){
    //     player=PlayerX;
    // }else if(props.player==='o'){
    //     player=PlayerO;
    // }
    return(<button className="player-game"><img src={players[player]} alt={`jogador ${player}`}></img></button>)
}
export default PlayerGame;