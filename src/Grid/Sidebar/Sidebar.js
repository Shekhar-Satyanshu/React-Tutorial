import React, {Component} from 'react';

import {Button, Col, Container, Row ,Form, FormGroup, Label, Input,} from 'reactstrap';


 class Sidebar extends Component {
   
    constructor(props) {
        super(props);
   
       
    }

  
    render () {
        return (
            
            <div className="main-sidebar">
                <div className="main-navbar">
                    <div className="logo"> 	
                        <h1>Logo</h1>
                    </div>
                </div>
                <div className="nav-wrapper">
                    <ul>
                        <li><i class="fa fa-home" href="#" active style={{marginRight:'15px'}}></i>DASHBOARD</li>
                        <li><i class="fa fa-user" style={{marginRight:'15px'}}></i>USER PROFILE</li>
                        <li><i class= "fa fa-globe" style={{marginRight:'15px'}}></i>MAPS</li>
                    </ul>
                </div>
            </div>
            
        )
    }
}



export default Sidebar