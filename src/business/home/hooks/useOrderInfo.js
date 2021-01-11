import React, { useEffect } from 'react';
import { createStore, useStore } from '../../../core/store';
import { userInfoStore } from '../hooks/useUserInfo';

export const orderInfoStore = createStore('orderInfoStore', {});

export default function useOrderInfo() {
    const [orderInfo, setOrderInfo] = useStore(orderInfoStore);
    const [userInfo] = useStore(userInfoStore);

    const replaceItemAtIndex = (arr, index, newValue) => {
        return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
    };
    const addCount = (spu) => {
        const { spus = [] } = orderInfo;
        const index = spus.findIndex(item => item.id === spu.id);
        const newSpus = replaceItemAtIndex(spus, index, {
            ...spu,
            count: spu.count + 1
        });

        setOrderInfo({
            spus: newSpus
        })
    };

    useEffect(() => {
        const fetchOrderPage = async() => {
            const res = await requestOrderPage();
            window.newLog.warn('fuck_fetch orderinfo');
            setOrderInfo(res.data);
        }
        userInfo.id && fetchOrderPage();
    }, [userInfo.id]);

    return { orderInfo, addCount };
}


function requestOrderPage() {
    return new Promise((resove) => {
        setTimeout(() => {
            resove({
                success: true,
                data: {
                    spus: [
                        {id: 1, price: 20, title: '万孚幽门螺旋杆菌检测试剂无痛自检', img: 'https://jkcdn.pajk.com.cn/image/T1BxCv3vVT1RCvBVdK?img=/rs,w_380,h_380/tf,q_70', count: 1},
                        {id: 2, price: 30, title: '【9.9包邮】 可孚 创口贴卡通弹性防水100片透气止血贴防磨贴医用可爱弹性创可贴伤口贴', img: 'https://jkcdn.pajk.com.cn/image/T1zN_OBKD_1RCvBVdK?img=/rs,w_380,h_380/tf,q_70', count: 2},
                        {id: 3, price: 40, title: '【特价秒杀 特优枸杞】 平安津村 枸杞子 宁夏中宁枸杞 枸杞子礼盒 特优枸杞子 平安津村', img: 'https://jkcdn.pajk.com.cn/image/T1oiJIBgZT1RCvBVdK?img=/tf,q_70', count: 1},
                        {id: 4, price: 50, title: '【领券立减15元】 平安津村 鲜人参 2支装鲜人参 长白山脉鲜人参 鲜参出口日本品质 送礼佳品 平安津村', img: 'https://jkcdn.pajk.com.cn/image/T1duhIBvKT1RCvBVdK?img=/tf,q_70', count: 1}
                    ],
                }
            });
        }, 2000);
    });
}