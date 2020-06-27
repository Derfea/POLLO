import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {ProductConsumer} from '../../context'
import './product.css'
import {FaCartPlus} from 'react-icons/fa'

class Product extends Component {
    render() {
        

        const {id,title,img,price,inCart} = this.props.product;
        
        return (
            
            <div className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
<ProductConsumer>
{value=>(

                <div className="image-container p-5" onClick={()=>{
                    value.handleDetail(id)
                }}>
                    <a href="/details">
                    <img src={img} alt="product_img" className="card-img-top"/>
                    </a>
                    <button className="cart-btn" disabled={inCart?true:false} onClick={()=>{
                        value.addToCart(id)
                        value.openModal(id)
                    }}>
                        {inCart?(<p className="text-capitalize mb-0" disabled>in cart</p>):(<FaCartPlus/>)}
                    </button>
                </div>
)}
                    </ProductConsumer>

                <div className="card-footer d-flex justify-content-between">
                    <p className="align-self-cente mb-0r">
                        {title}
                    </p>
                    <h5 className="text-blue font-italic mb-0">
                        <span className="mr-1">$</span>
                        {price}
                    </h5>
                </div>
            </div>
            </div>
        )
        
    }
    
}

export default Product