import React from "react";
import './styles.css';
import profile from'../../img/profile.jpg';
import AvatarProfile from "../../objects/AvatarProfile";

const ProfileUser =()=>{
    return(
        <dl className="profile-user">
            <dd className="avatar">
                <AvatarProfile src={profile} alt="Avatar profile image"/>
            </dd>
            <dt className="title">Gabriel anjos</dt>
            <dd className="description">Em processo de aprendizado e aperfeiçoamentos em tecnologias de desenvolvimento de softwares</dd>
        </dl>
    );
}
export default ProfileUser;