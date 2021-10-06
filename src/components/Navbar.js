import React from 'react'
import "../components/Navbar.css"
import { IconContext } from 'react-icons/lib';
import { RiNotificationBadgeLine, RiSearchLine} from 'react-icons/ri';
import { VscAccount} from 'react-icons/vsc';

const Navbar = () => {
    return (
        <IconContext.Provider
        value={{ padding: '20px' }}
        >
        <div className="nav">
            <div className="navbar">
                <div className="navbar_left">
                    <div className="logo">
                         <h1>TKNZ</h1>  
                    </div>
                    
                    <div className="left_ul">
                        <ul>
                            <li>packs</li>
                            <li>Marketplace</li>
                            <li>Community</li>
                        </ul>
                    </div>
                </div>
                <div className="navbar_right">
                    <div className="right_ul">
                        <ul>
                            <li><RiSearchLine size='1.4rem' /><span>search </span></li>
                            <li><VscAccount size='1.4rem'/><span>account</span></li>
                            <li><RiNotificationBadgeLine size='1.4rem'/><span> notification</span></li>
                        </ul>
                    </div>
                    <div className="hamberger">
                        <div className="ham"></div>
                    </div>
                </div>
            </div>
        </div>
        </IconContext.Provider>
    )
}

export default Navbar
