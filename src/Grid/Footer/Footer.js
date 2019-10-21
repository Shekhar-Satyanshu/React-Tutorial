import React, { Component } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import {Row, Col} from 'reactstrap'

class Footer extends Component {
    render() {
        return (
                
                 
            <MDBFooter color="black" className="font-small pt-4 mt-4">
            <div className="footer-copyright text-center py-3">
                <MDBContainer >
                &copy; {new Date().getFullYear()} Copyright: <a href="#"> Logo.com </a>
                </MDBContainer>
            </div>
    </MDBFooter>
               
                
                
          );
    }
}

export default Footer