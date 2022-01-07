import React from "react";
import Card from "../../objects/Card";
import Player from "../../objects/Player";

const Hashtag=()=>{
    return(
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
    );
}
export default Hashtag;