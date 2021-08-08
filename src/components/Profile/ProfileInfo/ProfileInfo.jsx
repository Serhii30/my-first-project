import s from './ProfileInfo.module.css';
import React from "react";
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            {/*<div>*/}
            {/*    <img src='https://media.tacdn.com/media/attractions-splice-spp-674x446/06/70/52/6a.jpg'/>*/}
            {/*</div>*/}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                < ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                <div>
                   <h3> {props.profile.fullName} </h3>
                    {props.profile.aboutMe}
                </div>
                <div>
                    {props.profile.contacts.instagram}
                </div>

            </div>

        </div>
    )
}

export default ProfileInfo;