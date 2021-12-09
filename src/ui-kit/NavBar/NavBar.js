import React, {useState} from 'react';
import {menuItems} from "./MenuItems";
import './NavBar.css'
import {Button} from "../index";

function NavBar() {
    const [isDrawerExpanded, setIsDrawerExpanded] = useState(false);

    function handleHamburgerClick() {
        setIsDrawerExpanded(!isDrawerExpanded)
    }

    return (
        <nav className={'NavBarItems'}>
            <h1 className={'nav-bar-logo'}>
                TK
            </h1>
            <div className={"menu-icon"} onClick={() => handleHamburgerClick}>
                <i className={'fa-android'}/>
            </div>
            <ul className={isDrawerExpanded ? 'nav-menu active' : "nav-menu"}>
                {menuItems.map(item => <li>
                    <a className={item.clsName} href={item.URL}>
                        {item.title}
                    </a>
                </li>)}
            </ul>
            <Button>Download CV</Button>


        </nav>
    );
}

NavBar.propTypes = {};

export {NavBar}