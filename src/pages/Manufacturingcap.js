import React,{Component} from 'react';
import { Link } from 'react-router-dom'

class About extends  Component{
    render(){
        return(
            <React.Fragment>
                {/* <!-- slider section start here --> */}
                <section>
                    <img src="assets/images/manufacturing-capabilities.png" alt="aboutpage-sectionone" class="firstsnap"/>
                </section>

                <section>
                    <div class="sec-mancap"> 
                        <h2>What We Do</h2>
                        <p>We believe that taste plays a significant part in consumer behaviour. By establishing knowledge exchange systems with renowned flavorists and flavour houses around the world, we devote considerable time to identify and analyse nature’s intricate steps in developing flavour. This has led to the development of many new flavour systems customised to the needs of our customers.</p>
                    </div>
                </section>

                <section>
                    <div class="sec-mancap"> 
                        <h2>What Makes Us Different​</h2>
                        <p>We believe that our creative strength plus decade long experience enables us to do the one thing nature cannot do; provide flavour stability. We began our flavour journey with a strong commitment to quality which has been the single driving force behind the effectiveness of our products. Our state-of-the-art flavour manufacturing facilities can cater to world-renowned FMCG companies.</p>
                    </div>
                </section>
            </React.Fragment> 
        )
    }
}
export default About;   