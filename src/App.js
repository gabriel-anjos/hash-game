import React, { useState } from "react";
import "./App.css";
import HeaderGame from "./components/HeaderGame";
import HashtagGame from "./components/HashtagGame";
import InputCheckbox from "./objects/InputCheckbox";
import LayerDark from "./objects/LayerDark";
import HeaderInternal from "./components/HeaderInternal";
import ProfileUser from "./components/ProfileUser";
import HistoryGame from "./components/HistoryGame";
import WrapperHashtagHistory from "./objects/WrapperHashtagHistory";

function App() {
  const [activeAbout, setActiveAbout] = useState("");
  const [history, setHistory] = useState(["Start"]);
  const [active,setActive]=useState(false);
  const handleClickAdd = () => {
    setActiveAbout("-active");
  };
  const handleClickRemove = () => {
    setActiveAbout("");
  };

  const addHistory = (player) => {
    setHistory((old) => [...old, `Adicionou ${player.toUpperCase()}`]);
  };

  const ShowHideHistory=()=>{
      // setActive(old=> old ? false : true)
      setActive(old=> !!!old )

  }

  return (
    //ou pode usar <>  para nao precisar escrever fragment nem importalo.

    <main id="main" className="app">
      <HeaderGame onClick={handleClickAdd} />
      <WrapperHashtagHistory active={active}>
        <HashtagGame callback={addHistory} />
        <InputCheckbox
          id="show"
          value="show"
          type="checkbox"
          content="Mostrar eventos"
          onClick={ShowHideHistory}
        />
      <HistoryGame history={history} />
      </WrapperHashtagHistory>

      <LayerDark className={activeAbout}>
        <HeaderInternal onClick={handleClickRemove} />
        <ProfileUser />
      </LayerDark>
    </main>

    //precisa </> fecha-lo
  );
}

export default App;
