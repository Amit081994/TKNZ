import React from 'react'
import "../components/Header.css"

import cod from "../assets/images/cod.png"
import csgo from "../assets/images/csgo.png"
import apex from "../assets/images/Apex-Legends.png"
import fortnite from "../assets/images/fortnite.png"
import fifa from "../assets/images/fifa.png"
import rol from "../assets/images/rol.png"
import vlrnt from "../assets/images/valorant.png"
import ff from "../assets/images/free-fire.png"
import dota from "../assets/images/Dota.png"
import sc from "../assets/images/starcraft.png"
const Header = () => {
    return (
        <div className="header_wrapper">
           <div className="header">
                <img src={ cod }  alt=""/>
                <img src={ csgo }  alt=""/>
                <img src={ apex }  alt=""/>
                <img src={ fortnite }  alt=""/>
                <img src={ fifa }  alt=""/>
                <img src={ rol }  alt=""/>
                <img src={ vlrnt }  alt=""/>
                <img src={ ff }  alt=""/>
                <img src={ dota }  alt=""/>
                <img src={ sc }  alt=""/>
           </div>
        </div>
    )
}

export default Header
