import React from 'react';
import './App.css';
import profile from'./img/profile.jpg';
import Header from './components/Header';
import Hashtag from './components/Hashtag';
import Checkbox from './objects/Checkbox';
import About from './objects/About';
import HeaderInternal from './components/HeaderInternal';
import AvatarProfile from './objects/AvatarProfile';
function App() {
  return(
    //ou pode usar <>  para nao precisar escrever fragment nem importalo.
    
      <main className='app'>
      <Header/>
      <Hashtag/>
      <Checkbox id="show"value="show" type="checkbox"content="Mostrar eventos"/>
      <About>
        <HeaderInternal/>
        <AvatarProfile src={profile} alt="Avatar profile image"/>
      </About>
      </main>
    
    //precisa </> fecha-lo

  );
}

export default App;
