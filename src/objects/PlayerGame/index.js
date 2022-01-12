import React from "react";
import './styles.css';
import PlayerX from '../../img/X.png';
import PlayerO from '../../img/Circle.png'


const PlayerGame=({content=''})=>{
   
    const players=[]; 
    players['']='';
   players['x']=PlayerX
   players['o']=PlayerO
   
    // let player= '';
    // if(props.player==='x'){
    //     player=PlayerX;
    // }else if(props.player==='o'){
    //     player=PlayerO;
    // }
    return(
    <button className="player-game">
        {players[content] && <img src={players[content]} alt={`jogador ${content}`}></img> }
        
    </button>
        
    );
        
    
}
export default PlayerGame;