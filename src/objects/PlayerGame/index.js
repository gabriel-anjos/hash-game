import React from "react";
import './styles.css';
import PlayerX from '../../img/X.png';
import PlayerO from '../../img/Circle.png'

const handleClick=()=>{
    console.log("vamo que vamo!!!")
}

const PlayerGame=({player=false})=>{
   const players=[];
   players['x']=PlayerX
   players['o']=PlayerO
   
    // let player= '';
    // if(props.player==='x'){
    //     player=PlayerX;
    // }else if(props.player==='o'){
    //     player=PlayerO;
    // }
    return(
    <button onClick={handleClick}className="player-game">
        {player && <img src={players[player]} alt={`jogador ${player}`}></img> }
        
    </button>
        
    );
        
    
}
export default PlayerGame;