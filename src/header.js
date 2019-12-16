import React from 'react';
import './header.css';
import './index.css';
import NavBar from './nav-bar.js';
import {Header1, Header2, Logo, IconSearch, Header3, Header4, Header5, Header6} from './images/indexHeader.js';


//const NavBar = document.write('./nav-bar.js');

function Header() {
        return (
            <>
            <header> 
            <div className="header">
                <div>
                    <div className="header-item">
                        <a href="menu.html"><img src={Header1} alt="Header1" className="square-1" /></a>
                    </div>
                    <div className="header-item">
                        <a href="index.html"><img src={Header2} alt="Header2" className="square-2" /></a>
                    </div>
                </div>
                <div className="header-two">
                    <input type="text" placeholder="Cerca" className="header-two-input" />
                    <button type="submit" className="button-s"><img src={IconSearch} alt="IconSearch" className="img-src" /></button>
                </div>
                <div>
                    <div className="header-item">
                        <a href=""><img src={Header3} alt="Header3" className="square-3" /></a>
                    </div>
                    <div className="header-item">
                        <a href=""><img src={Header4} alt="Header4" className="square-4" /></a>
                    </div>
                    <div className="header-item">
                        <a href=""><img src={Header5} alt="Header5" className="square-5" /></a>
                    </div>
                    <div className="header-item">
                        <a href=""><img src={Header6} alt="Header6" className="square-6" /></a>
                    </div>
                </div>
            </div>
        </header>

        <div>{NavBar}</div>
        
        </>
        );
    
};

export default Header;
//export const NavBar;
export {NavBar};
