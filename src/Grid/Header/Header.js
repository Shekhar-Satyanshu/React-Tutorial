import React, {Component} from 'react';

import {Button, Col, Container, Row ,Form, FormGroup, Label, Input,  Nav, NavItem, NavLink} from 'reactstrap';

import { createBrowserHistory } from 'history'

 class Sidebar extends Component {
   
    constructor(props) {
        super(props);
   
       
    }

    onLogout = () => {
        createBrowserHistory.push('/login');
    }
  
    render () {
        return (
            <div className=" navbar sticky-top header">
        <Nav className="header-wrapper" style={{textAlign:'center'}}>
            <NavItem className="header-item">
                <NavLink href="#">HOME</NavLink>
            </NavItem>
            <NavItem className="header-item">
                <NavLink href="#">ABOUT US</NavLink>
            </NavItem>
            <NavItem className="header-item">
                <NavLink href="#">BUISNESS</NavLink>
            </NavItem>
           
         </Nav>
        <Nav>
            <NavItem className="header-items float-right">
                <Button color="danger" onClick={this.onLogout}>Logout</Button>
            </NavItem>
        </Nav>
            </div>
            
        )
    }
}



export default Sidebar