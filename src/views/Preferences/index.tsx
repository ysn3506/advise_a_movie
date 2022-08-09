import React, { useEffect } from 'react';
import { PreferencesProps } from '../../app/types/types';
import PreferencesCart from '../../components/preferencesCart';
import "./style.scss"




function Preferences({ genres }: PreferencesProps) {
    return (
        <div className='preferences'>
            <h2>Select preferences...</h2>
            <PreferencesCart header="What kind of films do you like?" items={genres}/>
        </div>
    );
}

export default Preferences;