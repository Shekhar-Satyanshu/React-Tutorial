import React, {Component} from 'react';

import {Button, Col, Container, Row ,Form, FormGroup, Label, Input,} from 'reactstrap';
import {Link, BrowserRouter as Router,Route} from 'react-router-dom';

 class Sidebar extends Component {
   
    constructor(props) {
        super(props);
   
       
    }

  
    render () {
        return (
                    <div className="main-sidebar sticky-left">
                            <div className="main-navbar">
                                <div className="logo"> 	
                                    <h1>Logo</h1>
                                </div>
                            </div>
                            <div className="nav-wrapper">
                                <ul>
                                <Link to="/dashboard"> <li><i class="fa fa-home"  style={{marginRight:'15px'}}></i>DASHBOARD</li></Link>
                                <Link to='/profile'><li><i class="fa fa-user" style={{marginRight:'15px'}}></i>USER PROFILE</li></Link>
                                    <li><i class= "fa fa-globe" style={{marginRight:'15px'}}></i>MAPS</li>
                                </ul>
                            </div>
                        </div>
            
            
        )
    }
}



export default Sidebar