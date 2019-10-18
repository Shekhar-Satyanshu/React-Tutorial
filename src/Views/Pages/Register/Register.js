import React, {Component} from 'react';

import {Container, Row, Col, Form , FormGroup, Label, Input, Button, Card } from 'reactstrap';


class Register extends Component {
   

    
    render() {
        return (
            <Container fluid={true}>
                <Row>
                    <Col md="12" className="Login">
                    <div className="login-form" style={{top: '26%'}}>
                            <h1 className="text-center mb-4" style={{color:'white'}}>Register Here</h1>
                                <Card className="login-card">
                                    <Form>
                                        <FormGroup row className="mt-4">
                                            <Label for="name" sm={2}>Name</Label>
                                            <Col sm={10}>
                                            <Input type="text" name="name" id="name" placeholder="Enter your Name" />
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row className="mt-4">
                                            <Label for="email" sm={2}>Email</Label>
                                            <Col sm={10}>
                                            <Input type="email" name="email" id="email" placeholder="Email" />
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row className="mt-4">
                                            <Label for="password" sm={2} style={{whiteSpace:'nowrap'}}>Password</Label>
                                            <Col sm={10}>
                                            <Input type="password" name="password" id="password" placeholder="password placeholder" />
                                            </Col>
                                        </FormGroup>
                                        <FormGroup  row className="mt-4">
                                            <Label for="date" sm={3} style={{whiteSpace:'nowrap'}}>Date of Birth</Label>
                                            <Col sm={9}>
                                            <Input
                                            type="date"
                                            name="date"
                                            id="exampleDate"
                                            placeholder="date placeholder"
                                            />
                                            </Col>
                                            
                                        </FormGroup>
                                        <span></span>
                                        <Button color="primary" >Register</Button>
                                    </Form> 
                                </Card>

                                
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
} 

export default Register;