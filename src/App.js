import React from 'react';
import './App.css';
import Header from './components/Header';
import Hashtag from './components/Hashtag';
import Checkbox from './objects/Checkbox';
import About from './objects/About';
import HeaderInternal from './components/HeaderInternal';
import ProfileUser from './components/ProfileUser';
function App() {
  return(
    //ou pode usar <>  para nao precisar escrever fragment nem importalo.
    
      <main className='app'>
      <Header/>
      <Hashtag/>
      <Checkbox id="show"value="show" type="checkbox"content="Mostrar eventos"/>
      <About className="-active">
        <HeaderInternal/>
        <ProfileUser/>
      </About>
      </main>
    
    //precisa </> fecha-lo

  );
}

export default App;
