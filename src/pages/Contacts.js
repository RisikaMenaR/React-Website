import React,{Component} from 'react';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import { getDefaultNormalizer } from '@testing-library/react';
//import { Link } from 'react-router-dom'


export default class extends React.Component {
    
    constructor(props) {
        super(props);
    this.state = {
          name: "",
          email: "",
          feedback: "",
        };
      }
    handleInputChange(event) {
        event.preventDefault();
        const target = event.target;
        const name = target.name;
        const value = target.value;
    this.setState({ [name]: value });
      }

      sendMessage(event) {
        event.preventDefault();
    if (!this.validateMail()) {
          return;
        }
    const templateParams = {
          from_name: this.state.name + " (" + this.state.email + ")",
          to_name: this.state.email,
          feedback: this.state.feedback
        };
    // emailjs
        //   .send("gmail", "portfoliositecontact", templateParams, {template_wfq91zg})
        emailjs.sendForm('gmail', 'template_wfq91zg', templateParams, 'user_2Yv9G7U59CqaZyM9FBdvf')
          .then(
            function(response) {
              toast.success("Your message has successfully sent!", {
                position: toast.POSITION.BOTTOM_CENTER
              });
              console.log("SUCCESS!", response.status, response.text);
            },
            function(err) {
              toast.error("Your message was not able to be sent");
            }
          );
    this.setState({
          name: "",
          email: "",
          feedback: ""
        });
      }

    render(){
        
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
                <div>
        <form
          //className="ui form"
          id={this.props.id}
          name={this.props.name}
          method={this.props.method}
          action={this.props.action}
        >
          <textarea
            id="name"
            name="name"
            onChange={this.handleInputChange.bind(this)}
            placeholder="your name"
            required
            value={this.state.name}
            style={{ width: "100%" }}
            rows={1}
          />
          <br />
          <textarea
            id="email"
            name="email"
            onChange={this.handleInputChange.bind(this)}
            placeholder="your email address"
            required
            value={this.state.email}
            // error={this.state.errors.email}
            style={{ width: "100%" }}
            rows={1}
          />
          <br />
          <textarea
            id="feedback"
            name="feedback"
            onChange={this.handleInputChange.bind(this)}
            placeholder="what would you like to chat about?"
            required
            value={this.state.feedback}
            style={{ width: "100%", height: "250px" }}
          />
          <br />
          <input
            type="button"
            value="Send"
            className="ui button"
            style={{
              fontFamily: "Amatic SC",
              fontSize: "20px",
              color: "blue"
            }}
            onClick={this.sendMessage.bind(this)}
          />
        </form>
      </div>
                </section>
               
            </React.Fragment> 
        )
    }
}
