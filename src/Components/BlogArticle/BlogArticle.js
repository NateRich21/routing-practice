import React from 'react';

import './BlogArticle.css'


class BlogArticle extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            post: {}
        }
    }

    componentDidMount() {
        fetch(`http://localhost:8000/posts/view-post?id=${this.props.match.params.id}`)
            .then(response => response.json())
            .then(response => this.setState({ post: response.data[0] }))
            .catch(err => console.log(err))    
    }

    render() {
        return(
     /*        <div className='BlogView'>
                <div id='title'>
                    <h1>{this.state.post.title}</h1>
                </div>
                <div id="author">
                    <h3 >By: {this.state.post.author}</h3>
                </div>
                <div id='content-box'>
                    <div id='content'>
                        {this.state.post.content}
                    </div>
                </div>
            </div> */

       
        <div className="Card">
            <h2>{this.state.post.title}</h2>
            <h5>by: {this.state.post.author}</h5>
            <div className="img">Image</div>
            <p>{this.state.post.content}</p>
        </div>
);
    }
}

export default BlogArticle;


