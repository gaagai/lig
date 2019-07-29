import React from 'react';
import './navbar.css';

const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }
    return (
        <nav id='navi' className={drawerClasses}>
            <ul>
                <li>
                    <a href="/">Products</a>
                </li>
                <li>
                    <a href="/">Users</a>
                </li>
            </ul>
        </nav>
    );
};

export default sideDrawer;
