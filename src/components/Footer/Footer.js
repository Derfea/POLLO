import React from 'react'
import FooterLinks from './FooterLinks'
import './footer.css'

const Footer = () => {
return (
<footer sticky="bottom" className="bottom">
{/* <br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/> */}
<div className="footer bg-secondary">

<div className="container">
<div className="row footer_row">
<FooterLinks/>
</div>
</div>
</div>
<div className="copyright text-center bg-dark">
<p className="text-white">© 2020 Kids Wish</p>
</div>
</footer>
)
}

export default Footer
