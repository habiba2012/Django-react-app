import React, { useState } from 'react';
import styled from "styled-components";
// import { useFormik } from "formik";
import HamburgerMenu from './HamburgerMenu'
import { Link } from 'react-router-dom';
import './HamburgerMenu.css';
// import visibilityToggler from '../hooks/visibilityToggler'
import Search from '../img/search.svg';
// import LocationSearchInput from '../search/LocationSearchInput'
import './Header.css'
const SearchWrapper = styled.div`
    height: 30px;
    transform: scaleX(-1);
    margin: 0 15px;
    cursor: pointer;
    opacity: 100%;
    transition: .3s;

    
   .menu-img {
    height: 25px;
    transform: scaleX(-1);
    margin: 5px 0px 30px 128px;
    opacity: 100%;
    transition: .3s;
}

/* .search-toggle {
    margin-right: 0px;
} */
 `;
const ContainerHeader = styled.div`
    width: 100%;
    height: 60px;
    background-color: #DADBFE;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const SearchInput = styled.div`
/* input:focus, textarea:focus, select:focus{
        outline: none;
    } */
`;

const InputWrapper = styled.div`
    width: 0;
    overflow: hidden;
    transition: .8s;
`;

const StyledForm = styled.form`
  display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      color: white;
`

const LogoWrapper = styled.div`
position: absolute;
display: flex;
justify-content: center;
align-items: center;
width:100%;
    
    .logo-img {
  height: 43px;
  /* cursor: pointer; */
  /* transition: .3s; */
}

`

const ResultsContainer = styled.div`

position: absolute;
top: 45px;
background-color: #DADBFE;
visibility: hidden;
width: 250px;
padding-bottom: 10px;
margin-left:-10px;
    .visible {
  transition: 1s;
  visibility: visible!important;
}
`
const Button = styled.button`
background: transparent;
border: none!important;
font-size: 0; `



const Header = ({ open }) => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <ContainerHeader>
      <SearchWrapper className={click ? 'input-toggle active' : 'search-toggle'} >
        {/* <LocationSearchInput /> */}
        <input className="input-toggle" type="text" placeholder="where" />
        <Button className={click ? 'menu-img hide-img' : 'menu-img'} ><img alt=""
          src={Search} /></Button>

      </SearchWrapper>

      <LogoWrapper >
        <img src="https://sedivyspace.fra1.digitaloceanspaces.com/sedivyspace/static/img/map-img/logo.png" alt=""
          className="logo-img hide-img" />


      </LogoWrapper >

      <HamburgerMenu />
    </ContainerHeader>

  );
};

export default Header;

