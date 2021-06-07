import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {FaUserCircle} from "react-icons/fa";
import Header from "./header";
import '../css/profile.css'
import Avatar from "./avatar";
import {followProfile, unfollowProfile} from "../redux/actions/profile";
import Modal from "./modal";
import {getPosts} from "../redux/actions/posts";

const Profile = () => {
    const profileData = useSelector(state => state.profile)
    const posts = useSelector(state => state.posts)
    console.log(posts);
    const [modal, setModal] = useState(false)
    const dispatch = useDispatch()

    const displayButton = () => {
        if (!profileData.hasOwnProperty('subscribed'))
            return (
                <div className='buttons'>
                    <button>Редактировать профиль</button>
                    <button onClick={() => setModal(true)}>Создать публикацию</button>
                </div>
            )

        if(profileData.subscribed)
            return <button onClick={() => dispatch(unfollowProfile(profileData.id))}>Подписки</button>

        return <button onClick={() => dispatch(followProfile(profileData.id))}>Подписаться</button>
    }


    useEffect(() => {
        dispatch(getPosts())
    }, [])

    return (
        <div>
            {modal && <Modal setModal={setModal}/>}
            <Header/>
            <div className='container'>
                <div className="head">
                    <div className="head__logo">
                        {profileData.avatar
                            ? <Avatar width='120px' height='120px' url={profileData.avatar}/>
                            : <FaUserCircle/>
                        }
                    </div>
                    <div className="head__userdata">
                        <div className="userdata__header">
                            <div className="header__username">
                                {profileData.username}
                            </div>
                            <div className="header__button">
                                {displayButton()}
                            </div>
                        </div>
                        <div className="userdata__counts">
                            <div className="counts__posts">
                                5 публикаций
                            </div>
                            <div className="counts__subscribers">
                                {profileData.followers} подписчиков
                            </div>
                            <div className="counts__subscribes">
                                {profileData.followings} подписок
                            </div>
                        </div>
                        <div className="userdata__name">
                            {profileData.name}
                        </div>
                    </div>
                </div>
                <div className="nav"></div>
                <div className="posts"></div>
            </div>
        </div>
    );
};

export default Profile;