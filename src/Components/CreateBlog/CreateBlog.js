import React from 'react';
import './CreateBlog.css';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


class CreateBlog extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			title: '',
			author: '',
			content: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.createNewPost = this.createNewPost.bind(this);
	}


	handleChange(e) {
		this.setState({ [e.target.name] : e.target.value });
	}

	//---------------------------------------------------------------

	createNewPost = _ => {
		fetch(`http://localhost:8000/posts/add?title=${this.state.title}&author=${this.state.author}&content=${this.state.content}`)
			.then(response => response.json())
			.then(this.props.getAllPosts)
			.catch(err => console.log(err))

		this.setState({
			title: '',
			author: '',
			content: ''
		})
	}


	render() {
		return (
			<div className='create-post-page'>
				<div className="post-form">

					<div className="details">
						<div id='name'>
							<input
								type='text'
								value={this.state.title}
								onChange={this.handleChange.bind(this)}
								name='title'
								id='name'
								placeholder='The title of your post'/>
						</div>
						<span />
						<div id='title'>
							<input
								type='text'
								value={this.state.author}
								onChange={this.handleChange.bind(this)}
								name='author'
								placeholder='Your name' />
						</div>
					</div>
					<div id='content'>
						<input
							type='text'
							value={this.state.content}
							onChange={this.handleChange.bind(this)}
							name='content'
							placeholder='Write your post here' />
					</div>
					<Button onClick={this.createNewPost}>save</Button>
				</div>
			</div>


/* 			<div>
				<Form>
					<row>
						<col>
							<Form.Control plaintext placeholder="Your name" />
						</col>
						<col>
							<Form.Control plaintext placeholder="Title of your post" />
						</col>
					</row>
					<row>
						<col>
							<Form.Control as="textarea" rows="3" />
						</col>
					</row>
				</Form>
		  	</div> */
		);
	}
}


export default CreateBlog;
