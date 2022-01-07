import React,{Fragment}from 'react';
import Hashtag from './components/Hashtag';
import Header from './components/Header';
function App() {
  return(
    //ou pode usar <>  para nao precisar escrever fragment nem importalo.
    <Fragment>
      <Header/>
      <Hashtag/>
    </Fragment>
    //precisa </> fecha-lo

  );
}

export default App;
