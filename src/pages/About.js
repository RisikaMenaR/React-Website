import React,{Component} from 'react';
import { Link } from 'react-router-dom'

class About extends  Component{
    render(){
        return(
            <React.Fragment>
              {/* <!-- slider section start here --> */}
                <section>
                    <img src="assets/images/about.jpg" alt="aboutpage-sectionone" class="firstsnap"/>
                </section>


                {/* <!-- flex-twocol section start here --> */}
<section>
	<div class="flex-container flexone">
  <div class="flex-item-left flex-one-left">
  	<h2>Of humble beginnings</h2>
  	<p>Long story short. Our journey, the CEC journey, began in the year 1946. A family-owned organisation, we started off humbly as a manufacturer of cellulose products and aromatic chemicals.</p>
    <p>Over the years, with innovation at the forefront, we have created a palette of unique flavour formulations that are curated to  provide extraordinary taste and sensorial experiences to our customers. Today, we have grown to become one of the leading flavour companies in India with global impressions.</p>
  </div>
  <div class="flex-item-right flex-one-right">
  	<img src="assets/images/cec-legacy.png"/>
  </div>
</div>
</section>
{/* <!-- flex-twocol section end here --> */}

                {/* <!-- flex section start here --> */}
<section>
	<main class="flex">
    <div class="flex-item">
    	<img src="assets/images/chemical-analysis.png"/>
    	<h3>CEC Fssai
License Foscos</h3>
    </div>
    <div class="flex-item">
    	<img src="assets/images/delivery-van.png"/>
    	<h3>CEC Halal Certificate
Up To 02.02.2022</h3>
    </div>
    <div class="flex-item">
    	<img src="assets/images/delivery-box.png"/>
    	<h3>ISO Certificate
Up To 29.06.2021</h3>
    </div>
  </main>
</section>
{/* <!-- flex section end here --> */}

{/* <!-- flex-twocol section start here --> */}
<section>
	<div class="flex-container flextwo">
  <div class="flex-item-left flex-two-left">
  	<img src="assets/images/cec-capacity.png" />
  </div>
  <div class="flex-item-right flex-two-right">
  	<h2>Our mission Our vision</h2>
    <p>We dream of being a global & world-class organisation with an exceptional team that’s unified by trust and respect by setting up for ourselves an intricately-thought-out mission as follow:</p>
    <ul>
      <li>We work towards synergizing people, processes and technology to improve collaboration, and facilitate innovation and learning.
</li>
      <li>We aim to deliver superior products and services that exceed customer expectations and add value to our clients’ businesses.
</li>
      <li>To foster continued growth in market coverage, where our customers, employees, business partners and the community share our success.
</li>
    </ul>
  </div>
</div>
</section>
{/* <!-- flex-twocol section end here --> */}

            </React.Fragment>
                
        )
    }
}
export default About;