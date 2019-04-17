import React, { Component } from 'react';
import { Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Button} from "shards-react";

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

    render(){
        return (
            <Navbar type="dark" theme="dark" sticky fixed expand="md">
                <NavbarBrand href="#">BestSports</NavbarBrand>
                <NavbarToggler onClick={this.toggleNavbar} />

            
                    <Nav navbar className="ml-auto">
                        <NavItem>
                            <Button theme="dark" href="#">
                                Home
                            </Button>
                            
                        </NavItem>
                        <NavItem>
                            <Button theme="dark" href="#">
                                Basketball
                            </Button>
                        </NavItem>
                        <NavItem>
                            <Button theme="dark" href="#">
                                Football
                            </Button>
                        </NavItem>
                    </Nav>

            </Navbar>
        );
    }
}

export default NavbarComponent;