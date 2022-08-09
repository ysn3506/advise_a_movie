import React from 'react';
import { useAppSelector } from '../../app/storage/store';

function Home() {

    const selector = useAppSelector((state) => state.user)
    const { userInfo } = selector;
    const { name } = userInfo;
    return (
        <div>
            <h1>Deneme</h1>
            {name && <h2>Hoşgeldin {name}</h2> }
        </div>
    );
}

export default Home;