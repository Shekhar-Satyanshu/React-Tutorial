import React, {Component} from 'react';

import {Button, Col, Container, Row ,Form, FormGroup, Label, Input,  Nav, NavItem, NavLink, Card, CardBody} from 'reactstrap';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";


import Header from '../../../Grid/Header/Header';
import Sidebar from '../../../Grid/Sidebar/Sidebar';
import Footer from '../../../Grid/Footer/Footer';



class Profile extends Component {

       

    render () {
        return (
            <Container fluid={true} style={{paddingLeft:'0', paddingRight:'0'}}>
                <Row>
                    <Col md="2">
                        <Sidebar />
                    </Col>
                    
                    <Col md="10" >
                       <Row>
                            <Col md="12" style={{paddingLeft:"0px"}}>
                                <Header />
                            </Col>
                        </Row>
                        <Row style={{marginTop:'20px'}}>
                            <Col md="2">
                                <Card style={{background:'orange', color:'white' }}>
                                    <CardBody>
                                        <h3>Sales</h3>
                                        <p><span>2000$</span></p>
                                    </CardBody>
                                </Card>  
                            </Col>
                            <Col md="2">
                                <Card style={{background:'orange', color:'white' }}>
                                    <CardBody>
                                        <h3>Sales</h3>
                                        <p><span>2000$</span></p>
                                    </CardBody>
                                </Card>  
                            </Col>
                            <Col md="2">
                                <Card style={{background:'orange', color:'white' }}>
                                    <CardBody>
                                        <h3>Sales</h3>
                                        <p><span>2000$</span></p>
                                    </CardBody>
                                </Card>  
                            </Col>
                            <Col md="2">
                                <Card style={{background:'orange', color:'white' }}>
                                    <CardBody>
                                        <h3>Sales</h3>
                                        <p><span>2000$</span></p>
                                    </CardBody>
                                </Card>  
                            </Col>
                        </Row> 
                        <Row style={{marginTop:'20px'}}>
                            <Col md="8" >
                                <Card>
                                    <CardBody>
                                        <div id="SalesChart" style={{height:"400px"}} ></div>
                                    </CardBody>
                                </Card>
                                
                            </Col>
                            <Col md="3">
                                <Card>
                                    <CardBody>

                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                
        </Container>
        )
    }
}

export default Profile



