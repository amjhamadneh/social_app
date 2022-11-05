import React, { Component } from "react";
import { Context } from "../utils/Context";

class Comment extends Component{
    constructor(props){
        super(props);
        this.state = {
            description:""
        }
    }

    handleAddComment(e){
        e.preventDefault();
        const index = this.props.index;
        this.context.addComment(index, this.state.description);
    }

    render(){
        return(
            <form onSubmit={this.handleAddComment.bind(this)}>
                <input 
                    className="form-control" 
                    type="text" 
                    placeholder="Write your comment" 
                    value={this.state.description}
                    onChange={(e) => this.setState({description:e.target.value})}
                />
            </form>
        )
    }
}
Comment.contextType = Context;

export default Comment;