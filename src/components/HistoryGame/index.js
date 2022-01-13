import React from "react";
import TagGame from "../../objects/TagGame";
import './styles.css';

const changeHistory=()=>{
    console.log("#@3##")
}
const HistoryGame =({history})=>(
    
        <ol className={"history-game"}>
            {history.map((content,key)=>( 
            <li key={key} className="action" onClick={changeHistory}>
                <TagGame content={content}/>
            </li>
            ))}
           
        </ol>
    );

export default HistoryGame;