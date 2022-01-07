import React,{Fragment}from 'react';
import Card from './objects/Card';
import Header from './components/Header';
import Player from './objects/Player';
function App() {
  return(
    //ou pode usar <>  para nao precisar escrever fragment nem importalo.
    <Fragment>
      <Header/>
      <Card>
      <Player player="x"/>
      <Player player="o"/>
      <Player player="x"/>
      
      <Player player="o"/>
      <Player player="x"/>
      <Player player="x"/>

      <Player player="x"/>
      <Player player="o"/>
      <Player player="o"/>
      </Card>
    </Fragment>
    //precisa </> fecha-lo

  );
}

export default App;
