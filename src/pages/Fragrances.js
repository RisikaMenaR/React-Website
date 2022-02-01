import React,{Component} from 'react';
import { Link } from 'react-router-dom'

class Fragrances extends  Component{
    render(){
        return(
            <React.Fragment>
              {/* <!-- slider section start here --> */}
                <section>
                    <img src="assets/images/fragrances.jpg" alt="aboutpage-sectionone" class="firstsnap"/>
                </section>


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
            </React.Fragment> 
        )
    }
}
export default Fragrances;