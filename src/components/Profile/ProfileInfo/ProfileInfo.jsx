import s from './ProfileInfo.module.css';
import React from "react";
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assests/images/user-page.jpg";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {
    if (!profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large || userPhoto} className={s.mainPhoto}/>
                {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
                < ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                <div>
                    <h3> {profile.fullName} </h3>
                    {profile.aboutMe}
                </div>
                <div>
                    {profile.contacts.instagram}
                </div>

            </div>

        </div>
    )
}

export default ProfileInfo;