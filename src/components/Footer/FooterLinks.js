import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {BsFillInfoSquareFill} from 'react-icons/bs'
import {FaElementor} from 'react-icons/fa'

const FooterLinks = () => {
return(
<div className='bottom'>
<Container>
<Row>
<Col>
<div className="footer__column col-xs-12 col-md-3"> 
<h4 className="heading footer__heading"> <FaElementor/> Categories </h4> 
<div className="footer__content"> 
<ul className="list-unstyled"> 
<li itemProp="itemListElement" itemScope="" itemType="http://schema.org/ListItem"> 
<a href="/about/" itemProp="item" itemScope="itemscope" itemType="http://schema.org/Thing"> 
<strong>About</strong>
</a> 
<meta itemProp="position" content="1"/> 
</li> 
</ul> 
</div> 
</div>
</Col>

<Col>
<div className="footer__column col-xs-12 col-md-3 "> 
<h4 className="heading footer__heading">
<BsFillInfoSquareFill/>
Information 
</h4> 
<div className="footer__content"> 
<ul className="list-unstyled">
<li itemProp="itemListElement" itemScope="" itemType="http://schema.org/ListItem">
<a href="/contact-us" itemProp="item" itemScope="itemscope" itemType="http://schema.org/Thing">
<strong>Contact</strong>
</a> 
<meta itemProp="position" content="2"/> 
</li> 
<li itemProp="itemListElement" itemScope="" itemType="http://schema.org/ListItem"> 
<a href="/faq" itemProp="item" itemScope="itemscope" itemType="http://schema.org/Thing"> 
<strong>FAQ </strong>
</a> 
<meta itemProp="position" content="4"/> 
</li>
<li itemProp="itemListElement" itemScope="" itemType="http://schema.org/ListItem"> 
<a href="/privacy" itemProp="item" itemScope="itemscope" itemType="http://schema.org/Thing"> 
<strong>Privacy</strong> 
</a> 
<meta itemProp="position" content="6"/> 
</li> 
</ul> 
</div> 
</div>
</Col>
</Row>
</Container>
{/* <section className="app-store text-center"> <figure className="image" itemProp="image" itemScope="" itemType="http://schema.org/ImageObject"> <img src="" alt="Deliveroo application" className="image__img app-store__icon" itemProp="contentUrl" /> </figure> <p>Download the App on iPhone or Android.</p> <a href="https://itunes.apple.com/gb/app/deliveroo-restau/" target="blank" rel="noopener"> <figure className="image" itemProp="image" itemScope="" itemType="http://schema.org/ImageObject" /> <img src="/assets/images/app-store/apple-store-en.svg" alt="Deliveroo iPhone application" className="image__img app-store__itunes" itemProp="contentUrl" > </img> </a> <a href="https://play.google.com/store/apps/details?id=com.deliveroo.orderapp&amp;hl=en_GB" target="blank" rel="noopener"> <figure className="image" itemProp="image" itemScope="" itemType="http://schema.org/ImageObject"> <img src="/assets/images/app-store/google-play-en.svg" alt="Deliveroo Android application" className="image__img app-store__google" itemProp="contentUrl" /> </figure> </a> </section> */}
</div>
)
}

export default FooterLinks
