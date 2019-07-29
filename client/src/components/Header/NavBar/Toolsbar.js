import React from 'react';
import DrawerToggleButton from './DrawerToggleButton';
import { Link } from 'react-router-dom';
import logo from '../logo1.svg';
import './navbar.css';

const toolbar = props => (
    <header id='header1' className="toolbar">
        <nav className="toolbar__navigation">
            <div className="flexi">
                <div className="toolbar__logo"><Link to="/"><img className="logo" src={logo} alt='logo' /></Link></div>
                <div className="toolbar__toggle-button">
                    <DrawerToggleButton click={props.drawerClickHandler} />
                </div>
            </div>

            <div className="spacer" />
            <div className="toolbar_navigation-items">
                <ul>
                    <li><Link to="/">Products</Link></li>
                    <li><Link to="/">Users</Link></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;