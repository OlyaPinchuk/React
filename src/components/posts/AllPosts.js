import React, {Component} from 'react';
import PostComponent from "./PostComponent";
import {PostServices} from "../../services/PostServices"
import UserPosts from './UserPosts'

class AllPosts extends Component {

    postService = new PostServices()

    state = {posts: []}

    componentDidMount () {
        this.postService.getAllPosts().then(value => this.setState({posts: value}))
    }

    render() {

        let {posts} = this.state


        return (
            <div>


                {
                    posts.map(post => <PostComponent item = {post} key = {post.id} />)

                }


            </div>
        );
    }

}

export default AllPosts;