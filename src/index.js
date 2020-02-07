import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import './index.css';

import Blog from './Blog.js';
import Home from './Components/Home/Home.js'
import BlogArticle from './Components/BlogArticle/BlogArticle.js'

import * as serviceWorker from './serviceWorker';

class Index extends React.Component {

    render() {
        return(
            <div className='container'>
                <Router>
                    <div>
                        <div><Link to="/">Home</Link></div>
                        <div><Link to="/blog">BLog</Link></div>
            
                        <Route path='/' exact component={Home} />
                        <Route path='/blog' exact component={Blog} />
                        <Route path='/blog/:id' exact render={props => <BlogArticle {...props}/>} />
                    </div>
                </Router>
            </div>
        );
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
