// import React, { Component } from "react";
// import './search.css'
// import {FaSearch} from 'react-icons/fa'
// import {auth} from '../../config/fbConfig'

// export default class Search extends Component {
//   state={
//     search:'',
//   }
//   updateSearch=(e) => {
//       this.setState({search: e.target.value.substr(0,20)})
//   }
//   render() {
//     const {auth} = this.props;
//     const {id,title,img,price,inCart} = this.props.product;
//     const catererMeals = meals && meals.filter((meal) => {
//       return (title.authId === auth.uid) && (title.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1);
//     });
      
//     return (
//       <div>
//         <div id="search-container" className="center">
//           <input type="text" className="text-black"><span><FaSearch/></span>Search<span>
//               <div jscontroller="MC8mtf" className="hpuQDe" aria-label="Search by voice" role="button" tabindex="0" jsaction="h5M12e;rcuQ6b:npT2md" data-ved="0ahUKEwj-lYfT-ZrqAhVLA2MBHR--ApUQvs8DCAg"><svg className="HPVvwb" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z" fill="#4285f4"></path><path d="m11 18.08h2v3.92h-2z" fill="#34a853"></path><path d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z" fill="#f4b400"></path><path d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z" fill="#ea4335"></path></svg></div></span></input>
//         </div>
//         </div>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   console.log(state);
//   return{
//   auth: state.firebase.auth,
//   // user: state.firebase.profile
//   }
//   }
  