import React, { Component } from "react";
import { Context } from "../utils/Context";

class Post extends Component{
    constructor(props) {
        super(props);

        this.state = {
            content : "",
        };
    }

    handleOnClick = () => {
        this.context.addPost(this.state.content);
    }

    render(){
        return (
            <div>
                <textarea 
                    className="form-control" 
                    id="content" 
                    rows="3"
                    placeholder="Write what you think"
                    value={this.state.content}
                    onChange={(e) => this.setState({content: e.target.value})}
                >
                </textarea>
                <button 
                    className="btn btn-primary" 
                    onClick={this.handleOnClick}
                > 
                    Add post
                </button>
            </div>
        )
    }
}
Post.contextType = Context;

export default Post;

