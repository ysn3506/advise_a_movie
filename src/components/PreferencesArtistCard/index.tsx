import React,{useState} from 'react';
import { ButtonProps } from 'semantic-ui-react';
import ArtistCart from '../artistCart';
import './style.scss'

function PreferencesArtistCard({ item, clickFunction }: ButtonProps) {
    const [isClicked, setIsClicked] = useState(false);
    return (
        <div onClick={()=>setIsClicked(!isClicked)} className='ui card preferences-artist-card-wrapper'>
            <div className={`artist-card-hover-effect ${isClicked && "selected"}`}>
                <span>{isClicked?"Unselect":"Select"}</span>
            </div>
            <ArtistCart artist={item} />
            
        </div>
    );
}

export default PreferencesArtistCard;