import React,{Component} from 'react';
import emailjs from 'emailjs-com';
import { Link } from 'react-router-dom'

class Contact extends Component{
    constructor(props){
        super(props)

        this.state = {
            firstname: '',
            lastname: '',
            option: 'canada',
            message: ''
        }
    }

    handleFirstnameChange = (event) => {
        this.setState({
            firstname: event.target.value
        })
    }

    handleLastnameChange = (event) => {
        this.setState({
            lastname: event.target.value
        })
    }

    handleOptionChange = (event) => {
        this.setState({
            option: event.target.value
        })
    }

    handleMessageChange = (event) => {
        this.setState({
            message: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.firstname} ${this.state.lastname} ${this.state.option} ${this.state.message}`)
        // event.preventDefault()
    }

    render(){
        const sendEmail = (e) => {
            e.preventDefault();
        
            emailjs.sendForm('gmail', 'template_wfq91zg', e.target, 'user_2Yv9G7U59CqaZyM9FBdvf')
              .then((result) => {
                  console.log(result.text);
              }, (error) => {
                  console.log(error.text);
              });
              e.target.reset();
            //   showResult(true);
          };
        return(
            <React.Fragment>
              {/* <!-- slider section start here --> */}
              <section>
                    <img src="assets/images/contact-us.jpg" alt="aboutpage-sectionone" class="firstsnap"/>
                </section>

                <section>
                    <div class="sec-contact"> 
                        <h2>Get in touch</h2>
                        <p>You will find yourself working in a true partnership that results in an incredible experience, and an end product that is the best.</p>
                    </div>
                </section>

                <section>
                    <div class="sec-form">
                    <form onSubmit={sendEmail}>
                        <label for="fname">First Name</label>
                        <input type="text" name='firstname' />
                        
                        <label for="lname">Last Name</label>      
                        <input type="text" name='lastname' />
                    
                        <label for="country">Country</label>
                        <select name='option' id='option'>
                            <option value="australia">Australia</option>
                            <option  value="canada">Canada</option>
                            <option value="usa">USA</option>
                        </select>

                        <label for="Message">Message</label>
                        <textarea name='message' id='message'></textarea>
                        <input type="submit" value="Submit" />
                        {/* <div>
                            {result ? <Result/> : null}
                        </div> */}
                    </form>

                    {/* <form onSubmit={this.handleSubmit}>
                        <label for="fname">First Name</label>
                        <input type="text" value={this.state.firstname} onChange={this.handleFirstnameChange} />
                        
                        <label for="lname">Last Name</label>      
                        <input type="text" value={this.state.lastname} onChange={this.handleLastnameChange} />
                    
                        <label for="country">Country</label>
                        <select value={this.state.option} onChange={this.handleOptionChange}>
                            <option value="australia">Australia</option>
                            <option  value="canada">Canada</option>
                            <option value="usa">USA</option>
                        </select>

                        <label for="Message">Message</label>
                        <textarea value={this.state.message} onChange={this.handleMessageChange}></textarea>
                        <input type="submit" value="Submit" />
                    </form> */}
                    </div>
                </section>

            </React.Fragment> 
        )
    }
}
export default Contact;