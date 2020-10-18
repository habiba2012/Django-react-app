import React, { useState } from 'react';
import { BrowserRouter, useHistory, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import BackgroundImg from '../img/lines3-purple.svg'
import { Link } from "react-router-dom";
import hamburgerIcon from "../img/burgerMenu.svg";
import CloseSVG from "../icons/CloseSVG";
import Team from "./Team";
import Sustainability from './Sustainability'

import Community from "./Community";
import Contact from "./Contact";
import SidebarAboutData from './SidebarAboutData'
import '../Nav//HamburgerMenu.css'
import './About.css'

const About = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const [open, setOpen] = useState(true);

    return (
        <>
            <BrowserRouter>
                <ContainerAbout>

                    <Header>

                        <button className="page__icon" style={{
                            background: "none", outline: "none",
                            border: "none",
                            cursor: "pointer "
                        }} onClick={closeMobileMenu} >
                            <CloseSVG />
                        </button>

                        {/*  <PurpleLines>
                        <img src={BackgroundImg} alt="lines3-purple" width="250px" marginLeft="-150px" />
                    </PurpleLines> */}
                        <div>
                            <Link to="/about" className='menu-bars' onClick={handleClick} ><img src={hamburgerIcon} className="hambugerIcon" alt="" /></Link>
                            <div className={click ? 'nav-menu active' : 'nav-menu'}>
                                <ul className='nav-menu-items'>
                                    <li className='navbar-toggle'>
                                        <Link to='#' className='menu-bars' onClick={closeMobileMenu}>
                                            <CloseSVG />
                                        </Link>
                                        {/* <span className="about-close-icon"><img src={hamburgerIcon} style={{ width: "30px", marginRight: "10px", marginTop: "8px" }} alt="" /></span> */}
                                    </li>
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    {SidebarAboutData.map((item, index) => {
                                        return (
                                            <li key={index} className={item.cName}>
                                                <Link to={item.path} onClick={() => setOpen(!open)}>
                                                    <span style={{ textTransform: "uppercase", marginLeft: "16px", fontWeight: "bold" }}>{item.title}</span>
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>


                        {/* <img className="hamburger-icon" alt="" src={hamburgerIcon} /> */}
                    </Header>
                    <AboutPage >

                        <h1 style={{ textAlign: "center!important", marginTop: '60px', marginLeft: '560px ' }}>About</h1>
                        <br />
                        <p style={{ marginTop: "100px" }}>Conscious Sweater is your easy way to buy <span style={{ fontWeight: 'bold' }}>sustainable fashion</span>. We don’t want you to shop more! When you need to shop, however, we help you to do it consciously. </p>
                        <br />
                        <p style={{ fontStyle: "italic" }}> ‘We created a
                        map helping you to find places that offer consciously made clothes.’</p>
                        <br />
                        <p>By creating such a map of <span style={{ fontWeight: 'bold' }}>sustainable fashion & vintage shops</span> we want to help change your and your friends’ shopping habits. Changing your habits? Ugh, that sounds annoying, we know!
                              That’s why we made Conscious Sweater map so easy and fun to use</p>
                        <br />
                        <p>The core idea is simple: a map that helps you easily find places that offer <span style={{ fontWeight: 'bold' }}>ethically made clothes,
                            vintage pieces, creations from local designers</span> who follow the principles of sustainability and rental services. <span style={{ fontWeight: 'bold' }}>As many as possible,
                             in one map.</span> To get them all, worldwide, we ask you to contribute by suggesting sustainable shops that you think belong to Conscious Sweater map.
                              Just press + button on the main screen & start adding!</p>
                        <br />
                        <p style={{ color: "lavender", width: "230px", fontSize: "18px", textAlign: "center", fontStyle: "italic" }}>WHO ARE WE KNITTING THE CONSCIOUS SWEATER FOR?</p>
                        <p>We developed this map for our friends who kept asking where to shop for ethically made clothes and for
                             everyone else who is interested in wearing sustainable fashion. You might be a <span style={{ fontWeight: "bold" }}>
                                sustainable fashionista </span> looking for new stores or a sustainable fashion enthusiast <span style={{ fontWeight: "bold" }}>exploring a new city
                                 or a sustainable fashion newcomer </span> in need of direction.</p>
                        <br />
                        <p style={{ fontStyle: "italic" }}>‘We at Conscious Sweater want a world where sustainable fashion is the new norm.’</p>
                        <br />
                        <p>We want to make sustainable and fair fashion more accessible to you as well as to enable global change in fashion consumption</p>
                        <br />
                        <br />
                    </AboutPage  >


                    <Team />


                    <Sustainability />

                    <Community />

                    <Contact />
                </ContainerAbout>

            </BrowserRouter>
        </>
    );
};

const ContainerAbout = styled.div`
display:flex;
flex-direction:column;
background-color: var(--blue);
margin:0;
padding:0;
@media only screen and (max-width: 768px){
        width: 100%;
    }
`
const Header = styled.div`
position: fixed;
width: 100%;
height: 40px;
z-index:1200;
background-color: var(--blue);
display: flex;
justify-content: space-between;
align-items: center;
padding: 5px;
@media only screen and (max-width: 768px){
    height: 40px;
    position: fixed;
  }

  .about-hambugerIcon {
   
    @media only screen and (max-width: 768px){
     position:relative;
    width: 25px;
    height: 25px;
    margin-right: 50px!important;
    /* margin-left: -150px!important; */

      
}
.page__icon {
    display: inline-block;
   vertical-align: top;
   visibility: visible;
   opacity: none!important;
   top:0;
   @media only screen and (max-width: 768px){
       position: absolute;
       margin-left: 70px!important;

}
}
.about-text{
    margin-top: 50px;
}
 .map-text{
    margin-top: 150px!important;

 }  
.nav-text{
    padding: 5px;

} }
`
const AboutPage = styled.div`
    display: flex;
    justify-content: center!important;
    align-items: center!important;
    flex-direction: column;
   
    @media only screen and (max-width: 768px){
        width: 100%;
    }
    
    h1 {
    font-weight: bold;
    text-transform: uppercase;
    /* position:relative; */
    text-align: center!important;
    font-size: 30px;
    color: var(--lavender);
    
    /* transform: translate(-50% , -50%); */
    @media only screen and (max-width: 768px){
    position:relative;
    text-align: center;
    font-size: 25px;
    justify-content: center;
    margin-top: -5px;
    margin-left: -40px!important;
    margin-bottom: -70px;

}
}

p {
    font-family:  'Adobe Clean', sans-serif;
    font-size: 18px;
    padding-left: 20px;
    padding-right: 20px;
    letter-spacing: 0.01em;
/* margin-top: 100px; */
    color: var(--lavender);
    width: 750px;
    text-align: justify;

    @media only screen and (max-width: 768px){
    font-size: 12.5px;
    margin-left:0px;
    width: 230px;
    letter-spacing: none;
   }
}



`
const PurpleLines = styled.div`
img{
       background-size: 20px;
       position: relative;
       float:left;
        margin-right:0px;
        transform: rotate(20deg);
        margin-left: -100px;
        margin-top:10px;
        opacity: 0.7;

      /*   background-position-x: 50px;
        background-position-y: 90px; */

    @media only screen and (max-width: 768px){
       
    }
}`



export default About
