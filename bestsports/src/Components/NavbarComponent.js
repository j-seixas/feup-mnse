import React, { Component } from 'react';
import { Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, Button } from "shards-react";
import { NavLink } from "react-router-dom";
import  Search  from "./Search";

class NavbarComponent extends Component {
    constructor(props) {
        super(props);

        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.toggleNavbar = this.toggleNavbar.bind(this);

        this.state = {
            dropdownOpen: false,
            collapseOpen: false
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

    render() {
        return (
            <Navbar type="dark" theme="dark" sticky fixed expand="md">
                <NavbarBrand href="#">BestSports</NavbarBrand>
                <NavbarToggler onClick={this.toggleNavbar} />

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