import React, { Component } from 'react';
import { Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, Button } from "shards-react";
import { NavLink } from "react-router-dom";
import Slide from '@material-ui/core/Slide';
import Search from "./Search";
import "./navbar.css";

class NavbarComponent extends Component {
    constructor(props) {
        super(props);

        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.toggleNavbar = this.toggleNavbar.bind(this);

        this.state = {
            dropdownOpen: false,
            collapseOpen: false,
            gif: null,
            checked: true,
            height: null
        };
    }

    toggleDropdown() {
        this.setState({
            ...this.state,
            ...{
                dropdownOpen: !this.state.dropdownOpen
            }
        });
    }

    toggleNavbar() {
        this.setState({
            ...this.state,
            ...{
                collapseOpen: !this.state.collapseOpen
            }
        });
    }

    componentDidMount() {
        this.handlegifs();
    }

    handlegifs() {
        if (window.location.href.search('football') !== -1) {
            this.setState({
                gif: "http://www.animatedimages.org/data/media/165/animated-football-and-soccer-image-0098.gif",
                height: "60"
            });
        } else if (window.location.href.search('basketball') !== -1) {
            this.setState({
                gif: "https://www.fg-a.com/sports/basketball-slam-dunk-2018.gif",
                height: "80"
            });
        }
    }

render() {
    return (
        <Navbar type="dark" theme="dark" sticky fixed expand="md">
            <NavbarBrand href="/">BestSports</NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} />

            <Slide direction="right" in={this.state.checked} >
                <img src={this.state.gif} height={this.state.height}></img>
            </Slide>

            <Nav navbar className="ml-auto">
                <Search></Search>
            </Nav>


            <Nav navbar className="ml-auto">
                <NavItem>
                    <NavLink to="/">
                        <Button theme="dark" href="#">
                            Home
                                </Button>
                    </NavLink>

                </NavItem>
                <NavItem>
                    <NavLink to="/basketball">
                        <Button theme="dark" href="#">
                            Basketball
                                </Button>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/football">
                        <Button theme="dark" href="#">
                            Football
                                </Button>
                    </NavLink>
                </NavItem>
            </Nav>

        </Navbar>
    );
}
}

export default NavbarComponent;