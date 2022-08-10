import React, { useState } from 'react';
import { ButtonProps } from 'semantic-ui-react';
import './style.scss'

function PreferencesButton({ item, clickFunction }: ButtonProps) {
    const [isClicked, setIsClicked] = useState(false);

    return (
        <button onClick={()=>setIsClicked(!isClicked)} className={`ui button secondary-button ${isClicked && "clicked"}`}>
            {item.name}
        </button > 
    );
}

export default PreferencesButton;