import React, { Component } from 'react';
// import {Redirect} from 'react-router-dom';


import { Row, Container, Col, Form, FormGroup, Label, Input, Button, Card, Toast } from 'reactstrap';
import { keyboard } from '@amcharts/amcharts4/core';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            loading: 'false'
        }
        this.handleTextChange1 = this.handleTextChange1.bind(this);
        this.handleTextChange2 = this.handleTextChange2.bind(this);
    }




    handleTextChange1(event) {
        this.setState({ email: event.target.value });
        console.log(this.state.email);
    }

    handleTextChange2 = (event) => {
        this.setState({ password: event.target.value });
        console.log(this.state.password)
    }

    onLogin = () => {
        if (this.state.email == '') {

            alert("Please enter email id");
            return null;

        }
        const reg = /^\S+@\S+\.\S+$/;
        if (reg.test(this.state.email) === false) {
           alert('Please enter a valid E-mail Id !'); 
           return null;
            
        };
        if (this.state.password == '') {
            alert("Please enter password");
            return null;
        }
        alert("login success");
        this.props.history.push('/dashboard/');
    }


        render() {
            return (
                <Container fluid={true}>
                    <Row className="Login">
                        <Col md="12">
                            <div className="login-form">
                                <h1 className="text-center mb-4" style={{ color: 'white' }}>Welcome To The Login Page!</h1>
                                <Card className="login-card">
                                    <Form>
                                        <FormGroup row className="mt-4">
                                            <Label for="email" sm={2}>Email</Label>
                                            <Col sm={10}>
                                                <Input type="email" name="email" placeholder="user@email.com" value={this.state.email} onChange={this.handleTextChange1} />
                                            </Col>
                                        </FormGroup>

                                        <FormGroup row className="mt-4">
                                            <Label for="password" sm={2} style={{ whiteSpace: 'nowrap' }}>Password</Label>
                                            <Col sm={10}>
                                                <Input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.handleTextChange2} />
                                            </Col>
                                        </FormGroup>
                                        <span></span>
                                        <Button color="primary" onClick={this.onLogin.bind(this)}>Login</Button>
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
