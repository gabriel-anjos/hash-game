import React from "react";
import './styles.css';
import profile from'../../img/profile.jpg';
import GitHub from '../../img/git-icon.png';
import Linkedin from '../../img/linkedin-icon.png';
import Facebook from '../../img/facebook-icon.png';
import Twitter from '../../img/twitter-icon.png';
import Instagram from '../../img/instagram-icon.png';
import AvatarProfile from "../../objects/AvatarProfile";
import IconSocial from "../../objects/IconSocial";

const ProfileUser =()=>{
    return(
        <dl className="profile-user">
            <dd className="avatar">
                <AvatarProfile src={profile} alt="Avatar profile image"/>
            </dd>
            <dt className="title">Gabriel anjos</dt>
            <dd className="description">Em processo de aprendizado e aperfeiçoamentos em tecnologias de desenvolvimento de softwares</dd>
            <dd className="socials">
                <IconSocial src={GitHub} alt="logo da Github"/>
                <IconSocial src={Linkedin} alt="logo do linkedin"/>
                <IconSocial src={Facebook} alt="logo do facebook"/>
                <IconSocial src={Twitter} alt="logo do twitter"/>
                <IconSocial src={Instagram} alt="logo do instagram"/>
            </dd>
        </dl>
    );
}
export default ProfileUser;