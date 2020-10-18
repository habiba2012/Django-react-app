import React, { useState } from 'react';
import { Link } from "react-router-dom";

import CloseSVG from "../icons/CloseSVG";
import Logo from './Logo'
import HambergurButton from "./HambergurButton"
import './PageHeader.css'

function PageHeader() {

    const [click, setClick] = useState(false);
    const closeMobileMenu = () => setClick(false);

    return (
        <div className="page__header">
            <CloseSVG className='page__icon' onClick={closeMobileMenu} />
            < Logo className="logo" />
            <HambergurButton className="hamburger-icon" />

        </div >
    )
}

export default PageHeader
