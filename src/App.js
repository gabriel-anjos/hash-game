import React,{useState} from 'react';
import './App.css';
import HeaderGame from './components/HeaderGame';
import HashtagGame from './components/HashtagGame';
import InputCheckbox from './objects/InputCheckbox';
import LayerDark from './objects/LayerDark';
import HeaderInternal from './components/HeaderInternal';
import ProfileUser from './components/ProfileUser';
import TagGame from './objects/TagGame';




function App() {
    const [activeAbout , setActiveAbout] = useState()
    const handleClickAdd=()=>{
      setActiveAbout("-active")
  }
    const handleClickRemove =()=>{
      setActiveAbout('')
    }
  return(
    //ou pode usar <>  para nao precisar escrever fragment nem importalo.
    
      <main id="main" className='app'>
      <HeaderGame onClick={handleClickAdd}/>
      <HashtagGame/>
      <InputCheckbox id="show"value="show" type="checkbox"content="Mostrar eventos"/>
      <TagGame content="Adicionou 0"/>
      <LayerDark className={activeAbout}>
        <HeaderInternal onClick={handleClickRemove}/>
        <ProfileUser/>
      </LayerDark>
      </main>
    
    //precisa </> fecha-lo

  );
}

export default App;
