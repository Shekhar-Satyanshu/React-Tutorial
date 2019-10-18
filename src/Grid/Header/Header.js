import React, {Component} from 'react';

import {Button, Col, Container, Row ,Form, FormGroup, Label, Input,  Nav, NavItem, NavLink} from 'reactstrap';


 class Sidebar extends Component {
   
    constructor(props) {
        super(props);
   
       
    }

  
    render () {
        return (
       
           
                    <Row className="navbar sticky-top header">
                        <Col md="10">
                        <Nav className="float-right header-wrapper">
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
                        </Col>
                        <Col md="2">
                            <div className="float-right Login-btn">
                                
                                <Button color="danger">Logout</Button>
                            </div>
                        </Col>
                    </Row>
                 
       
            
        )
    }
}



export default Sidebar