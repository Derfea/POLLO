import React from 'react'
import { Navbar } from 'react-bootstrap';
import l from '../img/Kids Wish.png'
import './Navbar.css'
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
import SignedInLinks from '../links/SignedInLinks'
import SignedOutLinks from '../links/SignedOutLinks'
const Header = (props) => {
const { auth,profile } = props;
const Links = auth.uid ? <SignedInLinks/> : <SignedOutLinks/>;
console.log(auth);
console.log(profile);

return ( 
<div>
<div>
<nav bg="black">
<Navbar collapseOnSelect expand="lg" bg="secondary" variant="light" sticky="top">
<Link to="/">
    <img src={l} alt="store" className="navbar-brand" height="112" width="109"/>
</Link>
 <ul className="navbar-nav align-items-center">
     <li className="nav-item ml-5">
         <Link to="/" className="nav-link">Products</Link>
     </li>
 </ul>
 <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
 <Navbar.Collapse id="responsive-navbar-nav">
    {Links}
 </Navbar.Collapse>
</Navbar>
</nav> 
</div>
</div>
)
}
const mapStateToProps = (state) => {
console.log(state);
return{
auth: state.firebase.auth,
profile: state.firebase.profile
}
}
export default connect(mapStateToProps)(Header);