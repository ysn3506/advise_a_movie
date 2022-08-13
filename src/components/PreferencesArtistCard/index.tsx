import React, { useState,useEffect } from 'react';
import { store, useAppSelector } from '../../app/storage/store';
import { addArtist, removeArtist } from '../../app/storage/redux/preferences/actions';
import ArtistCart from '../artistCart';
import './style.scss'

function PreferencesArtistCard({ item }: any) {
    const [isClicked, setIsClicked] = useState(false);
    const selector = useAppSelector;
    const { userInfo } = selector((state) => state.user)

    useEffect(() => {
        const { preferences } = userInfo;
        const { artists} = preferences;
      
        if (artists) {
            findAlreadySelectedItems(artists)
        }
    
  

    }, [])


    const findAlreadySelectedItems = (array: any[]) => {

        if (array.find(el => el.id === item.id)) {
            setIsClicked(true)
        }
    }


    const selectItem = () => {
        if (isClicked) {
      
           store.dispatch(removeArtist(item))
           


        } else {
     
                store.dispatch(addArtist(item))
           
        }

        setIsClicked(!isClicked)
    }

    return (
        <div onClick={()=>selectItem()} className='ui card preferences-artist-card-wrapper'>
            <div className={`artist-card-hover-effect ${isClicked && "selected"}`}>
                <span>{isClicked?"Unselect":"Select"}</span>
            </div>
            <ArtistCart artist={item} />
            
        </div>
    );
}

export default PreferencesArtistCard;