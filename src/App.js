import React, {Component} from 'react';
import logo from './components/img/Kids Wish.png';
import './App.css';
import { Route, BrowserRouter as Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar/Navbar'
import landingPage from './components/Product/ProductList'
import Footer from './components/Footer/Footer'

class App extends Component{
  render (){
    return (
    <React.Fragment>
      <Navbar/>
        <Switch>
         <Route path="/" exact component={landingPage}/>
        </Switch>
      <Footer/>
   </React.Fragment>
    );
  }
}

export default App;
