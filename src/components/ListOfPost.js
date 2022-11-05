import React, { Component } from "react";
import { Context } from "../utils/Context";
import Comment from "./Comment";
import LisOfComment from "./ListOfComment";

class ListOfPost extends Component{
    constructor(props){
        super(props);
    }

    handleOnLike = (index) => {
        this.context.handleOnLike(index);
    }

    handleOnComment = (index) => {
        this.context.handleOnComment(index);
    }

    render(){
        return(
            <>            
                { this.props.list.map((item, index) => {
                    return (
                        <div className="container-post" key={index}>
                            <p className="post-description"> {item.content} </p>
                            <div className="post-buttons">  
                                <button className="btn btn-link" onClick={this.handleOnLike.bind(this, index)}> {item.isLiked? "Dislike": "Like"} </button> 
                                <button className="btn btn-link" onClick={this.handleOnComment.bind(this, index)}>{item.displayComment? "Hide comments" : "Add comment"}</button>
                            </div>
                            { item.displayComment? 
                                <div className="comments-container">
                                    <Comment index={index}/>
                                    <LisOfComment comments={item.comments} index={index}/>
                                </div>
                            : "" }
                        </div>
                    );
                })}
            </>
        );
    }
}

ListOfPost.contextType = Context;
export default ListOfPost;