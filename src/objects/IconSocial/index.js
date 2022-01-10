import React from "react";
const IconSocial=({action,src,alt})=>{
    return(<a target="_blank" href={action}>
    <img className="IconSocial" src={src} alt={alt}></img>
    </a>);
    
    
}
export default IconSocial;