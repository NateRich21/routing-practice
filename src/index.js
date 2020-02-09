import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

//import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import BlogList from './Components/BlogList/BlogList.js';
import Home from './Components/Home/Home.js';
import BlogArticle from './Components/BlogArticle/BlogArticle.js';
import CreateBlog from './Components/CreateBlog/CreateBlog.js';
import Nav from 'react-bootstrap/Nav';
import NavBar from 'react-bootstrap/NavBar';

import * as serviceWorker from './serviceWorker';

class Index extends React.Component {

    render() {
        return(
            <div className='container'>
                <Router>
                    <div className='App'>
                        <NavBar bg="light" expand="lg">
                            <NavBar.Brand href="#home">Nate's Blog</NavBar.Brand>
                            <NavBar.Toggle aria-controls="basic-navbar-nav" />
                            <NavBar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link><Link to="/">Home</Link></Nav.Link>
                                <Nav.Link><Link to="/blog-list">Blog List</Link></Nav.Link>
                                <Nav.Link><Link to="/create-blog">Create Post</Link></Nav.Link>
                            </Nav>
                            </NavBar.Collapse>
                        </NavBar>

                        <Route path='/' exact component={Home} />
                        <Route 
                            path='/blog-list' 
                            exact 
                            component={BlogList} 
                        />
                        <Route 
                            path='/blog-list/:id' 
                            exact 
                            render={props => <BlogArticle {...props}/>} 
                        />
                        <Route 
                            path='/create-blog' 
                            exact 
                            render={props => <CreateBlog {...props} />}
                        />

                        
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
