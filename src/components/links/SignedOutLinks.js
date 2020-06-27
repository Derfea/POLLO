import React, {Component} from "react";
import { Nav } from "react-bootstrap";
import {GoSignIn} from 'react-icons/go'
import {FiLogIn} from 'react-icons/fi'
import {Link} from 'react-router-dom'

export default class SignedOutLinks extends Component{
    render (){

          return (
              <Nav className="ml-auto">
        <br/>
        <Link className="btn btn-primary px-5 mr-3" to="/login">
                      <li><span>
                                      <FiLogIn/>{" "}
                                  </span>
            
            Login
                    </li>
            </Link>
        <br/>
        <Link className="btn btn-primary px-5 mr-3" to="/signup">
                      <li><span>
                                      <GoSignIn/>{" "}
                                  </span>
            Signup
                    </li>
            </Link>
      </Nav>
    );
    }
};