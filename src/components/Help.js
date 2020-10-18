import React, { useState } from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import CloseSVG from "./icons/CloseSVG";
import SusBrandPin from "./img/sustainable-pin.svg"
import VintagePin from "./img/vintage-pin.svg"
import LocalPin from "./img/local-pin.svg"
import RentingPin from "./img/vintage-pin.svg"
import SusBrown from "./img/_S-brown_use.svg"



const Help = () => {
  const [open, setOpen] = useState(true);

  const [click, setClick] = useState(false);

  const closeMobileMenu = () => setClick(false);


  return (
    <>
      <BackDrop>
        <Close >
          <Link to='#' onClick={closeMobileMenu}>
            <CloseSVG />
          </Link>
        </Close>
        <Title>Which Pin is for you?</Title>
        <PageWithPin>
          <PinUl>
            <PinLi>
              <ImgDiv><img src={SusBrandPin} alt="" style={{ width: "50px", height: "50px" }} /></ImgDiv>
              <LiSpan>Focused on sustainable brands</LiSpan>
            </PinLi>
            <PinLi>
              <ImgDiv><img src={SusBrown} alt="" style={{ width: "30px", height: "50px", marginLeft: "12px" }} /> </ImgDiv>
              <LiSpan>Selection of sustainable brands</LiSpan>
            </PinLi>
            <PinLi>
              <ImgDiv><img src={VintagePin} alt="" style={{ width: "50px", height: "50px" }} /></ImgDiv>
              <LiSpan>Focused on vintage fashion</LiSpan>
            </PinLi>
            <PinLi>
              <ImgDiv><img src={LocalPin} alt="" style={{ width: "50px", height: "50px" }} /></ImgDiv>
              <LiSpan>Focused on local fashion</LiSpan>
            </PinLi>
            <PinLi>
              <ImgDiv><img src={RentingPin} alt="" style={{ width: "50px", height: "50px" }} /></ImgDiv>
              <LiSpan>Focused on renting</LiSpan>
            </PinLi>
          </PinUl>
        </PageWithPin>
      </BackDrop>

      {/* <Button onClick={() => setOpen(!open)}>?</Button> */}
    </>
  );
};



const BackDrop = styled.div`
@font-face {
font-family:"aktiv-grotesk-thin";
src:url("https://use.typekit.net/af/e7779d/00000000000000003b9ae0fe/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i2&v=3") format("woff2"),url("https://use.typekit.net/af/e7779d/00000000000000003b9ae0fe/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i2&v=3") format("woff"),url("https://use.typekit.net/af/e7779d/00000000000000003b9ae0fe/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i2&v=3") format("opentype");
font-display:auto;font-style:italic;font-weight:200;
}

  position: absolute;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background: #dadbfee6;
  z-index: 12;
  display: flex;
  flex-direction: column;
  pointer-events: none;
  @media only screen and (max-width: 768px){
    width:100%;
  }
`;
const Close = styled.div`
  margin: 5px;
  height: min-content;
  width: min-content;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  color: #152afc;
  margin-left: auto;
  @media only screen and (max-width: 768px){
    top:0px;
    margin:0px;

  }
`;
const Title = styled.h1`
margin-top: 5px;
margin-left: 510px;
font-size: 25px;
text-transform: uppercase;
color: var(--blue);
font-weight: bold;
@media only screen and (max-width: 768px){
        justify-content: center;
        margin-top: 20px;
        margin-left: 100px;
}
`
const PageWithPin = styled.div`

display: flex;
flex-flow: row;
padding: 10px;
justify-content: start;
margin: 20px 50px 40px 500px;
box-sizing: border-box;
width: 250px;
height: 450px;
border: 1px solid var(--blue);
text-decoration: none;
background-origin: padding-box;
background-color: var(--blue);
color: var(--white);
border-radius: 30px;
display: inline-block;
@media only screen and (max-width: 768px){
    font-size: 12.5px;
    margin: 50px 50px 0px 80px;

    letter-spacing: none;
}
`;

const PinUl = styled.ul`
  padding: 0
`
const PinLi = styled.li`
 list-style-type: none;
    width: 15em;
`
const LiSpan = styled.span`
width:60%;
height: 55px;
margin: 14px 22px 5px -15px;
float:right;
padding: 2px;
position:relative;
overflow:hidden;
`
const ImgDiv = styled.div`
width:50%;
height:40px; 
padding:5px;
margin: 10px 0px 5px 5px;
float:left;
position:relative;
`
const ImgPin = styled.image`
  position:absolute;
  top:50%;
  overflow:hidden;
`

export default Help;
