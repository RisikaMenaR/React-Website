import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Header extends Component{
    render(){
        return(
          <div>
            {/* <!-- header section start here --> */} 
<section class="navigation" id="myHeader">
  <div class="nav-container">
    <div class="brand">
      <a href="#!"><img src="assets/images/cec-logo.png" /> </a>
    </div>
    <nav>
      <div class="nav-mobile"><a id="navbar-toggle" href="#!"><span></span></a></div>
      <ul class="nav-list">
        <li>
          <Link to="/" class="active">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/manufacturingcap">Manufacturing Capablities</Link>
        </li>
        <li>
          <Link to="/flavours">Flavours</Link>
        </li>
        <li>
          <Link to="/fragrances">Fragrances</Link>
        </li>
        <li>
          <Link to="/career">Career</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/contacts">Contacts</Link>
        </li>
      </ul>
    </nav>
  </div>
</section>
{/* <!-- header section end here --> */}
          </div>     
        )
    }
}
export default Header;