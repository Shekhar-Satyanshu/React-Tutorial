import React, {Component} from 'react';

import {Button, Col, Container, Row ,Form, FormGroup, Label, Input, Card, CardImg, CardText, CardBody, CardLink, CardTitle, CardSubtitle} from 'reactstrap';

// import * as am4core from "@amcharts/amcharts4/core";
// import * as am4charts from "@amcharts/amcharts4/charts";

import Header from '../../../Grid/Header/Header';
import Sidebar from '../../../Grid/Sidebar/Sidebar';
import Footer from '../../../Grid/Footer/Footer';



class Dashboard extends Component {
  

    render () {
        return (
            <Container fluid={true} style={{paddingLeft:'0', paddingRight:'0'}}>
            
                <Row>
                    <Col md="2">
                        <Sidebar />
                    </Col>
                    <Col md="10">
                        <Header />
                    </Col>
                    <Container>
                            <Row>
                            <Col md="9">
                                <div>
                                    <Card >
                                        <CardBody>
                                            <CardTitle>Users Behavior</CardTitle>
                                            <CardSubtitle>Card subtitle</CardSubtitle>
                                        </CardBody>
                                        {/* <img width="100%" src="/assets/318x180.svg" alt="Card image cap" /> */}
                                        <CardBody>
                                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                        </CardBody>
                                    </Card>
                                </div>
                            </Col>
                            <Col md="3">
                            <div>
                                    <Card >
                                        <CardBody>
                                            <CardTitle>Users Behavior</CardTitle>
                                            <CardSubtitle>Card subtitle</CardSubtitle>
                                        </CardBody>
                                        {/* <img width="100%" src="/assets/318x180.svg" alt="Card image cap" /> */}
                                        <CardBody>
                                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                        </CardBody>
                                    </Card>
                                </div>
                            </Col>
                            </Row>
                    
                    </Container>
                         
                     
                </Row>
          
        </Container>
        )
    }
}

export default Dashboard
