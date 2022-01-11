import React, { useState } from "react";
import "./App.css";
import HeaderGame from "./components/HeaderGame";
import HashtagGame from "./components/HashtagGame";
import InputCheckbox from "./objects/InputCheckbox";
import LayerDark from "./objects/LayerDark";
import HeaderInternal from "./components/HeaderInternal";
import ProfileUser from "./components/ProfileUser";
import HistoryGame from "./components/HistoryGame";

function App() {
  const [activeAbout, setActiveAbout] = useState("");
  const [activeHistoryGame, setHistoryGame] = useState("");
  const handleClickAdd = () => {
    setActiveAbout("-active");
  };
  const handleClickRemove = () => {
    setActiveAbout("");
  };

  const handleClick = () => {
    setHistoryGame((old) => old=== "-active" ? "" :  "-active" );
  };

  return (
    //ou pode usar <>  para nao precisar escrever fragment nem importalo.

    <main id="main" className="app">
      <HeaderGame onClick={handleClickAdd} />
      <HashtagGame />
      <InputCheckbox
        onClick={handleClick}
        id="show"
        value="show"
        type="checkbox"
        content="Mostrar eventos"
      />
      <HistoryGame className={activeHistoryGame} />
      <LayerDark className={activeAbout}>
        <HeaderInternal onClick={handleClickRemove} />
        <ProfileUser />
      </LayerDark>
    </main>

    //precisa </> fecha-lo
  );
}

export default App;
