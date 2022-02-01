import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from "../component/Header";
import Footer from "../component/Footer";
import Home from './Home'
import About from './About'
import Manufacturingcap from './Manufacturingcap'
import Flavours from './Flavours'
import Fragrances from './Fragrances'
import Contact from './Contact'
import Contacts from './Contacts'
import Career from './Career'
import App from '../App';


export default function RouterPage() {
    return(
        <div>
            <Router>
            <Header />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/manufacturingcap" component={Manufacturingcap} />
                    <Route path="/flavours" component={Flavours} />
                    <Route path="/fragrances" component={Fragrances} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/contacts" component={Contacts} />
                    <Route path="/career" component={Career} />
                </Switch>
            <Footer />
            </Router>
        </div>
    )
}
