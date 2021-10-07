import React, {useRef}from 'react'
import "../components/Navbar.css"
import { IconContext } from 'react-icons/lib';
import { RiNotificationBadgeLine, RiSearchLine, RiMenu3Fill} from 'react-icons/ri';
import { VscAccount} from 'react-icons/vsc';

const Navbar = () => {
    const navRef = React.useRef(null);
    const onAddClick = (e) => {
        navRef.current.classList.add("show");
      };
      const onRemoveClick = (e) => {
        navRef.current.classList.remove("show");
      };
    return (
        <IconContext.Provider
        value={{ padding: '20px' }}
        >
            
        <div className="mobile_nav" id="mob_nav">
            <div className="left_nav">
            <div className="logo">
                         <h1>TKNZ</h1>  
                    </div>
            </div>
       
            <div className="right_nav">
               <div className="info-item">
                   <RiMenu3Fill onClick={onAddClick} color="white" size="2rem" />
               </div>
             
            </div>
       </div>

       <div id="mySidenav"ref={navRef} >
        <div className="sidenav_header">
            <a className="closebtn"  onClick={onRemoveClick}>&times;</a>
        </div>
 
        <div className="container-fluid mt-2">
            <div className="row">

              <div className="col-12 mobile_nav_items">
                <div className="sidenav_dropdown d-flex align-items-center">
                   <span className="m-0">packs </span>
                 </div>
                
                 <div className="sidenav_dropdown d-flex align-items-center">
                  <span className="m-0">Marketplace </span>
                 </div>

                 <div className="sidenav_dropdown d-flex align-items-center">        
                    <span className="m-0">Community </span>          
                 </div>
                 <div className="sidenav_dropdown d-flex align-items-center">
                         <RiSearchLine color="white" size='1.4rem' /><span>search </span>
                                     
                 </div>
                 <div className="sidenav_dropdown d-flex align-items-center">
                   <VscAccount color="white" size='1.4rem'/><span>account</span>    
                 </div>
                 <div className="sidenav_dropdown d-flex align-items-center">
                     <RiNotificationBadgeLine color="white" size='1.4rem'/><span> notification</span>            
                 </div>
                 
                 
              </div>
            </div>
        </div>
      </div>
              
        <div className="navigation">
            <div className="navbar1">
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
