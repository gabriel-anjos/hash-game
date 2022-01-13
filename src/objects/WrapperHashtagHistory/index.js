import React, { useState } from "react";
import HashtagGame from "../../components/HashtagGame";
import HistoryGame from "../../components/HistoryGame";
import InputCheckbox from "../InputCheckbox";

const WrapperHashtagHistory = () => {
  const [history, setHistory] = useState(["Start"]);
  const [active,setActive]=useState(false);


  const changeHistory = (key) => {
    setHistory((old) => old.slice(0, key + 1));
  };
  const addHistory = (player) => {
    setHistory((old) => [...old, `Adicionou ${player.toUpperCase()}`]);
  };
  const ShowHideHistory=()=>{
    // setActive(old=> old ? false : true)
    setActive(old=> !!!old )

}

  return (
    <div className={`wrapper-hashtaghistory ${active && "-active"}`}>
      <HashtagGame callback={addHistory} />
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
