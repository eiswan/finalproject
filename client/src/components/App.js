import React, { Component } from 'react'
import {Provider} from 'react-redux';
import store from '../redux/store/index'
import SwitchNav from './pages/SwitchNav';
import Footer from './pages/footer';
import { BrowserRouter as Router, Route,Switch,Link } from "react-router-dom";
import './styles.css'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
// import MenuAppBar from './pages/Navbar';
// import * as jwt_decode from 'jwt-decode';
// import setAuthToken from "../utils/setAuthToken";
// import { setCurrentUser, logoutUser } from "../redux/action/authActions";

// // Check for token to keep user logged in
// if (localStorage.jwtToken) {
//   // Set auth token header auth
//   const token = localStorage.jwtToken;
//   setAuthToken(token);
//   // Decode token and get user info and exp
//   const decoded = jwt_decode(token);
//   // Set user and isAuthenticated
//   store.dispatch(setCurrentUser(decoded));
// // Check for expired token
//   const currentTime = Date.now() / 1000; // to get in milliseconds
//   if (decoded.exp < currentTime) {
//     // Logout user
//     store.dispatch(logoutUser());
//     // Redirect to login
//     window.location.href = "./login";
//   }
// }
export default class App extends Component {
    render() {
      document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems, {});
      });
        return (
            <Provider store={store}>
<Router>
    <div>
<div className="navbar-fixed">
      <nav >
   <div className="nav-wrapper black lighten-1" >
       <a  className="brand-logo" style={{marginLeft:'10px'}}><Link to={'/'}><img style={{height:'60px'}}src="https://i.dlpng.com/static/png/1355873-red-toyota-ft1-sports-car-png-image-sports-car-png-1946_922_preview.png"></img>Lenegdary Motorsport </Link></a>
       <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
       <ul className="right hide-on-med-and-down" style={{ listStyleType:'none'}}>
         <li style={{textDecoration:'none !important'}}><Link to={'/'}>Home</Link></li>
         <li><Link to={'/contact'}>Contact</Link></li>
         <li><Link to={'/about'}>About</Link></li>
         
        <li><Link to={'/adminn332'}>Admin</Link></li>
        <li><Link to={'/register'}>Register</Link></li>
        <li><Link to={'/login'}>Login</Link></li>

       </ul>
     </div>
   </nav> 
   </div>
    <ul className="sidenav" id="mobile-demo">
   <li ><Link to={'/'}>Home</Link></li>
         <li><Link to={'/contact'}>Contact</Link></li>
         <li><Link to={'/about'}>About</Link></li>
         
        <li><Link to={'/adminn332'}>Admin</Link></li>
        <li><Link to={'/register'}>Register</Link></li>
        <li><Link to={'/login'}>Login</Link></li>
  </ul>
          <Switch>
    <SwitchNav/>
          </Switch>
  
  </div>
</Router>
<Footer/>
                </Provider>
        )
    }
}
