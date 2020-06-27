import React, {Component} from "react";
import { Nav, NavDropdown, NavLink } from "react-bootstrap";
import {db} from '../../config/fbConfig'
import {TiShoppingCart} from 'react-icons/ti'
import {Link} from 'react-router-dom'
import { connect } from "react-redux";
import {auth} from '../../config/fbConfig'
import {GoSignOut} from 'react-icons/go'

const SignedInLinks  = (props) =>{
    // const { auth,profile } = props;
    // console.log(auth);
    // console.log(profile);
    // 
    // 
    // const email = auth.email
    // const name = auth.displayName
    // const photo = auth.photoURL
  return (
    <Nav className="ml-auto">
      <br/>
          <Link className="btn btn-primary px-5 mr-3" to="/cart">
                    <li><span className="mx-auto"> <TiShoppingCart/>{" "}</span>
                       My Cart
                  </li>
          </Link>
           <NavDropdown title="Account"id="basic-nav-dropdown" className="btn btn-primary px-5 mr-3">
                    <NavDropdown.Item className="btn btn-primary px-5 mr-3" href="/" onClick={() => auth().signOut()}>Sign Out</NavDropdown.Item>
                    <NavDropdown.Item className="btn btn-primary px-5 mr-3" href="/account">Account</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/" >
                      <button className="btn btn-danger" onClick={() => auth().signOut()}>
                      <span><GoSignOut/>{" "}</span>
                        Delete Account
                      </button>
                    </NavDropdown.Item>
          </NavDropdown>
        
<br/>
        <Link className="btn btn-primary px-5 mr-3" onClick={() => auth().signOut()} to="/">
        <li><span><GoSignOut/>{" "}</span>
                        Logout
                  </li>
          </Link>
    
    </Nav>
  );
};
const mapStateToProps = (state) => {
  return{
  // auth: state.firebase.auth,
  // profile: state.firebase.profile
  }
  }
export default connect(mapStateToProps)(SignedInLinks)