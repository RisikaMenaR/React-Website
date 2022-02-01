import React,{Component} from 'react';
import { Link } from 'react-router-dom'

class About extends  Component{
    render(){
        return(
            <React.Fragment>
              {/* <!-- slider section start here --> */}
              <section>
                    <img src="assets/images/career.jpg" alt="aboutpage-sectionone" class="firstsnap"/>
                </section>

                <section>
                    <div class="sec-contact"> 
                        <h2>HELLO THERE!</h2>
                        <p>We have 3 questions to ask you.</p>
                        <ul>
                            <li>Do you love flavours as much as we do?</li>
                            <li>Does developing new flavours and combinations excite you?</li>
                            <li>Do you wish to be part of a hustling team, with big dreams?</li>
                        </ul>
                        <p>Then we’ll make a great team!</p>
                        <p>Send your CV/portfolio to our HR team at <a href='mailto: hr@cecfeel.in'>hr@cecfeel.in</a> </p>
                    </div>
                </section>
                
            </React.Fragment> 
        )
    }
}
export default About;