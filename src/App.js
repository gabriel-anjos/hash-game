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
  const [history, setHistory] = useState([]);
  const handleClickAdd = () => {
    setActiveAbout("-active");
  };
  const handleClickRemove = () => {
    setActiveAbout("");
  };

  const addHistory = (player) => {
    setHistory((old) => [...old, `Adicionou ${player.toUpperCase()}`]);
  };

  return (
    //ou pode usar <>  para nao precisar escrever fragment nem importalo.

    <main id="main" className="app">
      <HeaderGame onClick={handleClickAdd} />
      <WrapperHashtagHistory>
        <HashtagGame callback={addHistory} />
        <InputCheckbox
          id="show"
          value="show"
          type="checkbox"
          content="Mostrar eventos"
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
