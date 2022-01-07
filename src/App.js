import React,{Fragment}from 'react';
import './App.css';
import Hashtag from './components/Hashtag';
import Header from './components/Header';
function App() {
  return(
    //ou pode usar <>  para nao precisar escrever fragment nem importalo.
    
      <main className='app'>
      <Header/>
      <Hashtag/>

      </main>
    
    //precisa </> fecha-lo

  );
}

export default App;
