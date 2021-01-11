import React, { useEffect } from 'react';
import { createStore, useStore } from '../../../core/store';

export const userInfoStore = createStore('userInfoStore', {});

export default function useUserInfo() {
    const [userInfo, setUserInfo] = useStore(userInfoStore);

    useEffect(() => {
        const fetchUserInfo = async () => {
            const res = await requestUserInfo();
            window.newLog.warn('fuck_fetch userinfo');
            setUserInfo(res.data);
        };
        fetchUserInfo();
    }, [])

    return { userInfo };
}

function requestUserInfo() {
    return new Promise((resove) => {
        setTimeout(() => {
            resove({
                success: true,
                data: {
                    id: 123456,
                    name: '郭某某'
                }
            });
        }, 2000);
    });
}