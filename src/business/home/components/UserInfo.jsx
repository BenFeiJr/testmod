import React from 'react';
import useUserInfo from '../hooks/useUserInfo.js';

export default function UserInfo() {
    const { userInfo } = useUserInfo();

    window.newLog.info('fuck_render userinfo');

    return (
        <div className="userinfo">
            <div className="left">
                <img />
            </div>
            <div className="right">
                <p className="name">昵称：{userInfo.name}</p>
                <p className="id">健康号：{userInfo.id}</p>
            </div>
        </div>
    );
}