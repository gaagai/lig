import React, { Component } from 'react';
// import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Toolbar from '../../components/Header/NavBar/Toolsbar';
import SideDrawer from '../../components/Header/NavBar/SideDrawer';
import Backdrop from '../../components/Header/NavBar/Backdrop';
import './layout.css';


class Layout extends Component {

    state = {
        sideDrawerOpen: false
    };

    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return { sideDrawerOpen: !prevState.sideDrawerOpen };
        });
    };

    backdropClickHandler = () => {
        this.setState({ sideDrawerOpen: false });
    };

    render() {

        let backdrop;

        if (this.state.sideDrawerOpen) {
            backdrop = <Backdrop click={this.backdropClickHandler} />
        }

        return (
            <div className="app">
                {/* <Header /> */}
                <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
                <SideDrawer show={this.state.sideDrawerOpen} />
                {backdrop}
                {this.props.children}
                <Footer />
            </div>
        )
    }

}
export default Layout;