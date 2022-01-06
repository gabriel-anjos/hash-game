import React,{Fragment}from 'react';
import Header from './components/Header';
function App() {
  return(
    //ou pode usar <>  para nao precisar escrever fragment nem importalo.
    <Fragment>
      <Header/>
    </Fragment>
    //precisa </> fecha-lo

  );
}

export default App;
