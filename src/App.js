import React,{Fragment}from 'react';
import './App.css';
import Header from './components/Header';
import Hashtag from './components/Hashtag';
import Checkbox from './objects/Checkbox';
function App() {
  return(
    //ou pode usar <>  para nao precisar escrever fragment nem importalo.
    
      <main className='app'>
      <Header/>
      <Hashtag/>
      <Checkbox id="show"value="show" type="checkbox"content="mostar eventos"/>
      
      </main>
    
    //precisa </> fecha-lo

  );
}

export default App;
