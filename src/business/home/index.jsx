import React from 'react';
import UserInfo from './components/UserInfo';
import OrderInfo from './components/OrderInfo';
import BottomBar from './components/BottomBar';

export default function Home() {
    window.newLog.info('fuck_render home');

    return (
        <div className="page">
            <UserInfo />
            <OrderInfo />
            <BottomBar />
        </div>
    );
}