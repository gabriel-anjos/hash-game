import React,{useState} from "react";
import './styles.css';
import PlayerX from '../../img/X.png';
import PlayerO from '../../img/Circle.png'

const handleClick=()=>{
    console.log("vamo que vamo!!!")
}

const PlayerGame=({player=false})=>{
   
    const [statePlayer,setStatePlayer]=useState(player)
    const players=[];
   players['x']=PlayerX
   players['o']=PlayerO
   
    
    const handleClick=()=>{
        setStatePlayer("x")
    }

    // let player= '';
    // if(props.player==='x'){
    //     player=PlayerX;
    // }else if(props.player==='o'){
    //     player=PlayerO;
    // }
    return(
    <button onClick={handleClick}className="player-game">
        {statePlayer && <img src={players[statePlayer]} alt={`jogador ${statePlayer.toUpperCase()}`}></img> }
        
    </button>
        
    );
        
    
}
export default PlayerGame;