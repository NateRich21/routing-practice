  import React from 'react';
  import { BrowserRouter as Router, Link, Route } from 'react-router-dom';


  import './BlogList.css';

  class BlogList extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        blogs: [], 
      }
    }

    componentWillMount() {
      fetch('http://localhost:8000/posts')
			.then(response => response.json())
			.then(response => this.setState({ blogs: response.data }))
			.catch(err => console.error(err))
    }

    render() {
      return(
        <div className='container'>
          <h1>Blog List</h1>
          {this.state.blogs.map(blog => 
            <li>
              <Link to={"/blog-list/" + blog.id}> {blog.title} </Link>
            </li>
          )}      
        </div>
      );
    }
  }

  export default BlogList;
