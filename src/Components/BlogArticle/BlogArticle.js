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


