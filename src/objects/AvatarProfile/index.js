import React from "react";
import './styles.css';
const AvatarProfile=({src,alt})=>{
    return(<img className="avatar-profile"src={src} alt={alt}></img>)
}
export default AvatarProfile;