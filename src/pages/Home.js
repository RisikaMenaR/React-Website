import React,{Component} from 'react';
import { Link } from 'react-router-dom'

class Home extends  Component{
    render(){
        return(
              <React.Fragment>
{/* <!-- slider section start here --> */}
<section>     
    <img src="assets/images/cecsliderone.png" alt="sliderone" class="firstsnap"/>
</section>
{/* <section>
	<div id="slidy-container">
  <figure id="slidy">
    <img src="assets/images/cecsliderone.png" alt="sliderone" />
    <img src="assets/images/cecslidertwo.png" alt="slidertwo" />
    <img src="assets/images/cecsliderthree.png" alt="sliderthree" />
  </figure>
</div>
</section> */}
{/* <!-- slider section end here --></figure> */}

{/* <!-- grid section start here --> */}
<section>
	<main>
    <article style={{ 
      backgroundImage: `url("assets/images/bakery.png")` 
    }}>
  	<a href="#"><h3>Bakery</h3>
  		<p><em>From flaky pastries <br/> to bite-sized biscuits ...</em></p>
    </a>
  </article>
  <article style={{ 
      backgroundImage: `url("assets/images/beverages.png")` 
    }}>
  	<a href="#"><h3>Beverage</h3>
  		<p><em>From bubbly beer, <br/>gourmet wine sprightly ...</em></p></a>
  </article>
  <article style={{ 
      backgroundImage: `url("assets/images/natural-flavours.png")` 
    }}>
  	<a href="#"><h3>Confectionary</h3>
  		<p><em>From classic treats to<br/>decadent delights ...</em></p></a>
  </article>
  <article style={{ 
      backgroundImage: `url("assets/images/dairy.png")` 
    }}>
  	<a href="#"><h3>Dairy</h3>
  		<p><em>Whether it’s pourable, <br/>spreadable or meltable ...</em></p></a>
  </article>
  <article style={{ 
      backgroundImage: `url("assets/images/food-service.png")` 
    }}>
  	<a href="#"><h3>Food Service</h3>
  		<p><em>Whether they’re packed<br/> in cans, tins, cartons ...</em></p></a>
  </article>
  <article style={{ 
      backgroundImage: `url("assets/images/sweets.png")` 
    }}>
  	<a href="#"><h3>Indian Sweets</h3>
  		<p><em>From the sweet, tempting <br/>essence of Jamuns ... </em></p></a>
  </article>
  <article style={{ 
      backgroundImage: `url("assets/images/natural-flavours.png")` 
    }}>
  	<a href="#"><h3>Natural Flavours</h3>
  		<p><em>Derived from natural<br/>sources of superior ...</em></p></a>
  </article>
  <article style={{ 
      backgroundImage: `url("assets/images/pharmacy.png")` 
    }}>
  	<a href="#"><h3>Pharma</h3>
  		<p><em>For pharmaceutical<br/>products, we incorporate ...</em></p></a>
  </article>
  <article style={{ 
      backgroundImage: `url("assets/images/tobacco.png")` 
    }}>
  	<a href="#"><h3>Supari & Tobacco</h3>
  		<p><em>Curated with refreshing<br/>flavours and essence... </em></p></a>
  </article>
  <article style={{ 
      backgroundImage: `url("assets/images/home-bakers.png")` 
    }}>
  	<a href="#"><h3>Flavours for <br/> Home Bakers</h3>
  		<p><em>From classic treats to<br/>decadent delights, our sweet ...</em></p></a>
  </article>
  <article style={{ 
      backgroundImage: `url("assets/images/pet-food.png")` 
    }}>
  	<a href="#"><h3>Pet Food <br/>Animal Feed</h3>
  		<p><em>From jerky treats, meaty <br/> feeds to crunchy biscuits ...</em></p></a>
  </article>	
  <article style={{ 
      backgroundImage: `url("assets/images/snack.png")` 
    }}>
  	<a href="#"><h3>Snack <br/>Savoury</h3>
  		<p><em>Be it the warmth of<br/>ginger, the earthiness ... </em></p></a>
  </article>
</main>
</section>
{/* <!-- grid section end here --> */}


{/* <!-- flex section start here --> */}
<section>
	<main class="flex">
    <div class="flex-item">
    	<img src="assets/images/chemical-analysis.png"/>
    	<h3>Flavour Creation
as per customer requirement</h3>
    </div>
    <div class="flex-item">
    	<img src="assets/images/delivery-van.png"/>
    	<h3>Dispatches within
36 hrs time</h3>
    </div>
    <div class="flex-item">
    	<img src="assets/images/delivery-box.png"/>
    	<h3>User friendly
pack sizes</h3>
    </div>
  </main>
</section>
{/* <!-- flex section end here --> */}

{/* <!-- flex-twocol section start here --> */}
<section>
	<div class="flex-container flexone">
  <div class="flex-item-left flex-one-left">
  	<h2>Our Flavourful Legacy</h2>
  	<p>At CEC, we pride ourselves on providing you with the highest value products and service possible. Proprietory knowledge and technologies enable us to provide performing flavours which serve as tools in the daily work of food technologists, to differentiote their work in todoy’s Competitive Environment.</p>
  </div>
  <div class="flex-item-right flex-one-right">
  	<img src="assets/images/cec-legacy.png"/>
  </div>
</div>
</section>
{/* <!-- flex-twocol section end here --> */}

{/* <!-- flex-twocol section start here --> */}
<section>
	<div class="flex-container flextwo">
  <div class="flex-item-left flex-two-left">
  	<img src="assets/images/cec-capacity.png" />
  </div>
  <div class="flex-item-right flex-two-right">
  	<h2>Our Capability</h2>
  	<p>Our aim is to identify specific flavour molecules that make a certain food taste the way it does. By focusing on local palettes, we create original taste experiences with the right blend of flavours to bring delightful sensory experiences in every bite and sip.</p>
  </div>
</div>
</section>
{/* <!-- flex-twocol section end here --> */}

{/* <!-- flex-twocol section start here --> */}
<section>
	<div class="flex-container flexone">
  <div class="flex-item-left flex-one-left">
  	<h2>The CEC Assurance</h2>
  	<p>We collaborate with well-renowned brands, provide unparalleled service, and create value to promote unrivalled taste and aroma for our clientele’s products.</p>
  </div>
  <div class="flex-item-right flex-one-right">
  	<img src="assets/images/cec-legacy-products.png" />
  </div>
</div>
</section>
{/* <!-- flex-twocol section end here --> */}
              </React.Fragment>
        )
    }
}
export default Home;