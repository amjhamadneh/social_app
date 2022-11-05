import { Component } from 'react';
import './App.css';
import ListOfPost from './components/ListOfPost';
import Post from './components/Post';
import { Context } from './utils/Context';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      listOfPost: []
    }
  }
  
  handleAddPost = (post) => {
    this.setState({
      listOfPost: [{content:post, isLiked:false, comments:[], displayComment:false}, ...this.state.listOfPost]
    });
  }

  handleOnLike = (index) => {
    const list = this.state.listOfPost;
    let updateList = list.map((item, idx) => {
        if(index == idx){
          item.isLiked = !item.isLiked;
        } 
        return item;
    });
    this.setState({listOfPost:updateList});
  }

  handleOnComment = (index) => {
    const list = this.state.listOfPost;
    
    let updateList = list.map((item, idx) => {
        if(index == idx){
          item.displayComment = !item.displayComment;
        } 
        return item;
    });

    this.setState({listOfPost:updateList});
  }


  handleAddComment = (index, content) => {
    const list = this.state.listOfPost;
    let updateList = list.map((item, idx) => {
        if(index == idx){
          item.comments.push({"desc": content, "date": (new Date()).toLocaleString()});
        } 
        return item;
    });

    this.setState({listOfPost:updateList});
  }

  render(){
    return (
      <Context.Provider value={{ addPost: this.handleAddPost, handleOnLike:this.handleOnLike, handleOnComment:this.handleOnComment, addComment:this.handleAddComment }} >
        <div className="App">
          <Post />
          <hr />
          <ListOfPost list={this.state.listOfPost}/>
        </div>
      </Context.Provider>
    )
  }
}

export default App;
