import React, { useState } from 'react';
import { Link } from "react-router-dom";
import hamburgerIcon from "../img/burger-menu.png";
import './HamburgerMenu.css';
import CloseSVG from "../icons/CloseSVG";
import { SidebarData } from './SidebarData';

const HamburgerMenu = () => {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [open, setOpen] = useState(true);



  return (
    <>

      <nav className='navbar'>

        <Link to="/" className='menu-bars' onClick={handleClick} ><img src={hamburgerIcon} className="hambugerIcon" alt="" /></Link>
        <div className={click ? 'nav-menu active' : 'nav-menu'}>
          <div className='nav-menu-items'>
            <div className='navbar-toggle'>
              <Link to='#' className='menu-bars' onClick={closeMobileMenu}>
                <CloseSVG />
              </Link>
              {/* <span className="close-icon"><img src={hamburgerIcon} alt="" /></span> */}
            </div>
            <br />
            <br />
            <br />
            <br />
            {SidebarData.map((item, index) => {
              return (
                <ul>
                  <li key={index} className={item.cName}>
                    <Link to={item.path} onClick={() => setOpen(!open)}>
                      <span style={{ textTransform: "uppercase", marginLeft: "16px", fontWeight: "bold" }}>{item.title}</span>
                    </Link>
                  </li>
                </ul>
              );
            })}
          </div>
        </div>
      </nav>



    </>

  )
}
export default HamburgerMenu