import React,{Fragment}from 'react';
import './App.css';
import Input from './objects/input';
import Header from './components/Header';
import Hashtag from './components/Hashtag';
function App() {
  return(
    //ou pode usar <>  para nao precisar escrever fragment nem importalo.
    
      <main className='app'>
      <Header/>
      <Hashtag/>
      <Input id="show"value="show" content="mostar eventos"/>
      
      </main>
    
    //precisa </> fecha-lo

  );
}

export default App;
