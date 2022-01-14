
import React, { useState } from "react";
import HashtagGame from "../../components/HashtagGame";
import HistoryGame from "../../components/HistoryGame";
import InputCheckbox from "../InputCheckbox";

const WrapperHashtagHistory = () => {
  const [history, setHistory] = useState(["Start"]);
  const [active,setActive]=useState(false);
  const [nextPlayer, setNextPlayer] = useState("x");
  const [lastRound,setLastRound]=useState(0)
  


  const [historyGame, setHistoryGame] = useState([
    {
      round:0,
      state: [
        { id: 1, content: "" },
        { id: 2, content: "" },
        { id: 3, content: "" },
        { id: 4, content: "" },
        { id: 5, content: "" },
        { id: 6, content: "" },
        { id: 7, content: "" },
        { id: 8, content: "" },
        { id: 9, content: "" },
      ],
    },
    
   
  ]);

 

  const changeHistory = (key) => {
      setLastRound(key);
    setHistory((old) => old.slice(0, key + 1));
    setHistoryGame((old) => old.slice(0,key+1));
  };
  const addHistory = (player) => {
    setHistory((old) => [...old, `Adicionou ${player.toUpperCase()}`]);
  };
  const ShowHideHistory=()=>{
    // setActive(old=> old ? false : true)
    setActive(old=> !!!old )
}
    const handleClick = (id) => {
    // setPlayers((old) =>
    //   old.map((player) =>
    //     player.id === id ? { id, content: nextPlayer } : player
    //   )
    // );
    setHistoryGame(old=> [...old,{
      round: lastRound + 1,
      state: old[lastRound].state.map(player=>player.id === id ?{id,content:nextPlayer}: player)
    }]);
    setLastRound(old=>old +1);
    addHistory(nextPlayer);
    setNextPlayer((old) => (old === "x" ? "o" : "x"));
  };

  return (
    <div className={`wrapper-hashtaghistory ${active && "-active"}`}>
      <HashtagGame lastRound ={lastRound}  historyGame={historyGame} onClick={handleClick} />
      <InputCheckbox
        id="show"
        value="show"
        type="checkbox"
        content="Mostrar eventos"
        onClick={ShowHideHistory}
      />

      <HistoryGame history={history} onClick={changeHistory} />
    </div>
  );
};
export default WrapperHashtagHistory;
