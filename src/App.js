import React,{Fragment}from 'react';
import Card from './objects/Card';
import Header from './components/Header';
function App() {
  return(
    //ou pode usar <>  para nao precisar escrever fragment nem importalo.
    <Fragment>
      <Header/>
      <Card/>
    </Fragment>
    //precisa </> fecha-lo

  );
}

export default App;
