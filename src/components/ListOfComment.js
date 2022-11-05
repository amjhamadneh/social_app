import React from "react";
import { Component } from "react";

class LisOfComment extends Component{
    constructor(props){
        super(props);
        this.state = {
            listOfcomment:props.comments
        }
    }

    render(){
        return (
            <>
                {
                    this.state.listOfcomment.map((item, index) => {
                        return(
                            <div key={index}>
                                <hr  className="dashed-line"/>
                                <div className="comments-container">
                                    <div>{item.desc}</div>
                                    <span> {item.date} </span>
                                </div>
                            </div>
                        )
                    })
                }
            </>
        )
    }
}

export default LisOfComment;