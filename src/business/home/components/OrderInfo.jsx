import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import useOrderInfo from '../hooks/useOrderInfo';


export default function OrderInfo() {
    const { orderInfo, addCount } = useOrderInfo();

    window.newLog.info('fuck_render orderinfo');

    return (
        <div className="orderinfo">
            <ul>
                {(orderInfo.spus || []).map((item, index) => {
                    return <Product key={index} data={item} addCount={addCount} />
                })}
            </ul>
        </div>
    );
}

function Product(props) {
    const { data, addCount } = props;
    const { title, count, img, id } = data;

    return (
        <div className="spu">
            <div className="left">
                <img src={img} />
            </div>
            <div className="right">
                <h2>{title}</h2>
                <p><strong>x{count}</strong></p>
                <p>
                    <button type="button" onClick={() => {
                        addCount(data);
                    }}>加一</button>
                    <button type="button">减一</button>
                </p>
            </div>
        </div>
    );
}