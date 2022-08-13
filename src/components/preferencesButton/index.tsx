import React, { useEffect, useState } from 'react';
import { addGenre, addPopularity, removeGenre, removePopularity } from '../../app/storage/redux/preferences/actions';
import { store, useAppSelector } from '../../app/storage/store';
import './style.scss'

function PreferencesButton({ item , type}: any) {
    const [isClicked, setIsClicked] = useState(false);
    const selector = useAppSelector;
    const {userInfo}=selector((state)=>state.user)
     
    useEffect(() => {
        const { preferences } = userInfo;
        const { genres, popularity } = preferences;
        if (type === "genre" && genres) {
            findAlreadySelectedItems(genres)
        } else if (type === "preferences" && popularity ) {
            findAlreadySelectedItems(popularity)
        }

    },[])


    const findAlreadySelectedItems = (array: any[]) => {
        
        if (array.find(el=>el.id===item.id)) {
            setIsClicked(true)
        }
    }

    const selectItem = () => {
        if (isClicked) {
            if (type === "genre") {
                store.dispatch(removeGenre(item))
            } else if (type === "preferences") {
                store.dispatch(removePopularity(item))
            }


        } else {
            if (type === "genre") {
                store.dispatch(addGenre(item))
            } else if (type === "preferences") {
                store.dispatch(addPopularity(item))
            }
        }
        
        setIsClicked(!isClicked)
    }


    

    return (
        <button onClick={()=>selectItem()} className={`ui button secondary-button ${isClicked && "clicked"}`}>
            {item.name}
        </button > 
    );
}

export default PreferencesButton;