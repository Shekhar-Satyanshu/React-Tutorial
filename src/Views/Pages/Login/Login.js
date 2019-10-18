import React, { Component } from 'react';


import {Row, Container, Col, Form , FormGroup, Label, Input, Button, Card} from 'reactstrap';

class Login extends Component {


    render() {
        return (
            <Container fluid={true}>
                <Row className="Login">
                    <Col md="12">
                       
                        <div className="login-form">
                            <h1 className="text-center mb-4" style={{color:'white'}}>Welcome To The Login Page!</h1>
                                <Card className="login-card">
                                    <Form>
                                        <FormGroup row className="mt-4">
                                            <Label for="email" sm={2}>Email</Label>
                                            <Col sm={10}>
                                            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row className="mt-4">
                                            <Label for="password" sm={2} style={{whiteSpace:'nowrap'}}>Password</Label>
                                            <Col sm={10}>
                                            <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                                            </Col>
                                        </FormGroup>
                                        <span></span>
                                        <Button color="primary" onClick={this.onLogin}>Login</Button>
                                    </Form> 
                                </Card>
                            </div>
                </Col>
            </Row>
        </Container>
        )
    }
}

export default Login;
