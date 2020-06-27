import React, { Component } from 'react'
import Product from './Product'
import Title from '../Title/Title'
import {ProductConsumer, ProductProvider} from '../../context'
import {Link} from 'react-router-dom'
import {auth} from '../../config/fbConfig'
import {FiLogIn} from 'react-icons/fi'
import {GoSignIn} from 'react-icons/go'

export default class ProductList extends Component {
    render() {
        return (
            <React.Fragment>
                {auth().currentUser ? (
                    <div className="py-5">
                    <div className="container">
                        <Title name="our" title="products"/>

<div className="row">
<ProductConsumer>
    {value=>{
return value.products.map( product =>{
    return <Product key={product.id} product={product}/>
})
    }}
</ProductConsumer>
</div>
                    </div>
                </div>
                ):(

<section>
                    <div className="form-group">
                      <div className="jumbotron-fluid py-5">
                        <div className="container text-center py-5">
                          <h1 className="display-4 welcome">Welcome to SuperLife Procure</h1>
                          <br />
                          <p className="lead">
                            Sign In and buy our products
                          </p>
                          <br />
                          <div className="mt-4">
                            <a
                              className="btn btn-primary px-5 mr-3 create"
                              href="/signup"
                            >
                                <span>
                                    <GoSignIn/>{" "}
                                </span>
                              Sign Up
                            </a>
                            <br/><br/>
                            <a
                              className="btn btn-primary px-5 mr-3 create"
                              href="/login"
                            >
                                <span>
                                    <FiLogIn/>{" "}
                                </span>
                              Login
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <br />
                  </section>

                
                )
    }
                </React.Fragment>
                //  <Product/>
        )
    }
}
