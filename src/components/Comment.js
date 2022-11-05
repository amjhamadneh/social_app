import React, { Component } from "react";
import { Context } from "../utils/Context";

class Comment extends Component{
    constructor(props){
        super(props);
        this.state = {
            content:""
        }
    }

    handleAddComment(e){
        e.preventDefault();
        const index = this.props.index;
        this.context.addComment(index, this.state.content);
    }

    render(){
        return(
            <form onSubmit={this.handleAddComment.bind(this)}>
                <input 
                    className="form-control" 
                    type="text" 
                    placeholder="Write your comment" 
                    value={this.state.content}
                    onChange={(e) => this.setState({content:e.target.value})}
                />
            </form>
        )
    }
}
Comment.contextType = Context;

export default Comment;