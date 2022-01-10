import React from 'react';
import './App.css';
import Header from './components/Header';
import Hashtag from './components/Hashtag';
import Checkbox from './objects/Checkbox';
import About from './objects/About';
import AboutLink from './objects/AboutLink';
import IconClose from './objects/iconClose';
import LogoCollab from './objects/LogoCollab';
function App() {
  return(
    //ou pode usar <>  para nao precisar escrever fragment nem importalo.
    
      <main className='app'>
      <Header/>
      <Hashtag/>
      <Checkbox id="show"value="show" type="checkbox"content="Mostrar eventos"/>
      <About>
        <LogoCollab light/>
        <AboutLink className="-light"/>
        <IconClose/>
      </About>
      </main>
    
    //precisa </> fecha-lo

  );
}

export default App;
