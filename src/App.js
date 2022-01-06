import React,{Fragment}from 'react';
import Logo from './objects/logo';
import Sobre from './objects/Sobre';
import Menu from './objects/Menu';
function App() {
  return(
    //ou pode usar <>  para nao precisar escrever fragment nem importalo.
    <Fragment>
      <Logo />
      <Sobre/>
      <Menu />
    </Fragment>
    //precisa </> fecha-lo

  );
}

export default App;
