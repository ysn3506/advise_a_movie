import { useEffect, useState } from "react";
import { Search, Dropdown } from "semantic-ui-react";
import "./style.scss"
import cameraIcon from "../../app/assets/icons/camera-icon.png"
import personIcon from "../../app/assets/icons/person.png";
import { useAppSelector } from "../../app/storage/hooks";
import { useHref } from "react-router-dom";

function Header() {
    const [selectedNavMenu, setSelectedNavMenu] = useState( 1 );
    const navigate = useHref;

    useEffect((): any => {
        if (selectedNavMenu === 2) {
            window.location.href="/preferences"
        }
        // switch (selectedNavMenu) {
        //     case { select:1}:
        //         break;
        //     case { select: 2 }:
        //         navigate("/preferences")
            
        
        //     default:
        //         break;
        // }
        
       
    }, [selectedNavMenu])
    

    const selectionHandler=(path:string)=> navigate(`${path}`)

    

    const { userInfo: { name } } = useAppSelector(state => state.user)
    const options = [
        { key: 1, text: 'Account', value: 1 },
        { key: 2, text: 'Movie Settings', value: 2 },
        { key: 3, text: 'Log Out', value: 3 },
    ]
    return (
        <div className="header-wrapper">
            <div className="header-logo">
                <img src={cameraIcon} />
                <h1 className="brand">Pick A Movie</h1>

            </div>
            <div className="header-search">
                <Search
                    // loading={loading}
                    placeholder='Search...'
                    // onResultSelect={(e, data) =>
                    //     dispatch({ type: 'UPDATE_SELECTION', selection: data.result.title })
                    // }
                    // onSearchChange={}
                    // results={results}
                    // value={value}
                />

            </div>
            <div className="header-menu">
                <img  className="person-icon" src={personIcon} />
                <Dropdown floating text={name} direction="left" options={options} onChange={(e,{value}:any)=>setSelectedNavMenu(value)} />
                   
        
            </div> 
            
        </div>
    );
}

export default Header;