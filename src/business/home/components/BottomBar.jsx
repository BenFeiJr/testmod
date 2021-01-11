import React from 'react';
import { useRecoilValue } from 'recoil';
import { useStore } from '../../../core/store';
import { orderInfoStore } from '../hooks/useOrderInfo';

export default function BottomBar() {
    const [orderInfo] = useStore(orderInfoStore);
    const totalPrice = (orderInfo.spus || []).reduce((pre, curr) => {
        return pre + (curr.price * curr.count);
    }, 0);

    window.newLog.info('fuck_render bottombar');

    return (
        <div className="bottombar">
            <p>总价：￥{totalPrice}</p>
        </div>
    );
}