import React, { useEffect } from 'react';
import { PreferencesProps } from '../../app/types/types';
import PreferencesCart from '../../components/preferencesCart';
import "./style.scss"




function Preferences({ genres, popularArtists }: PreferencesProps) {
    const movieStyles= [{id:1,name:"Latest Trends"},{id:2, name:"Best of All Times"}]
    return (
        <div className='preferences'>
            <h1>Select preferences...</h1>
            <PreferencesCart header="What kind of films do you like?" items={genres} type="genre" />
            <PreferencesCart header="Which one do you prefer ?" items={movieStyles} type="genre" />
            <PreferencesCart header="Who are your favourite actors/actresses ?" items={popularArtists} type="artist" />
            
        </div>
    );
}

export default Preferences;