import React, {Component} from 'react';
import PostComponent from "../post/PostComponent";

class AllPosts extends Component {

    state = {posts: [], chosenPost: null}

    chosePost = (id) => {

        let {posts} = this.state
        let foundPost = posts.find(value => value.id === id)
        this.setState({chosenPost: foundPost})
        console.log(foundPost)

    }



    render() {


        let {posts, chosenPost,} = this.state

        return (
            <div>

                {
                    chosenPost && <PostComponent post = {chosenPost} isBold = {true}/>

                }

                {
                    posts.map(value => {
                        return (<PostComponent post = {value} key = {value.id} func = {this.chosePost} />)
                    })
                }






            </div>
        );
    }

    componentDidMount() {
        this.posts = []
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(allPosts => {
                this.setState({posts: allPosts})
            })

    }
}

export default AllPosts;