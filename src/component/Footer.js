import React, {Component} from 'react';

class Footer extends Component{
    render(){
        return(
			<div>
				{/* <!-- footer section start here --> */}
<section>
	<footer>
		<div class="footer-logo">
			<img src="assets/images/cec-logo.png"/>
		</div>
		<div class="footer-newsletter">
			<form action="#">
    			<input type="text" placeholder="Email Address" />
    			<input type="submit" value="Subscribe" />
  			</form>
		</div>
		<div class="footer-copyright">
			<hr/>
			<p> <a href="#"> © Copyright CEC Flavours and Fragrances </a> </p>
		</div>
	</footer>
</section>
{/* <!-- footer section end here --> */}

{/* <!-- slider js start here --> */}
<script src="assets/js/slider.js" type="text/javascript" />

{/* <!-- slider js end here --> */}
			</div>
        )
    }
}
export default Footer;