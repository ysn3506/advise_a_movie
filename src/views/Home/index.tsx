import React, { PropsWithoutRef, PropsWithRef, ReactPropTypes } from 'react';
import { useAppSelector } from '../../app/storage/store';
import { Preferences, PreferencesState } from '../../app/types/types';

function Home(props:any) {
    const { movies } = props;

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