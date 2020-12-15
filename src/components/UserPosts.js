import React, {Component} from 'react';
import UserComponent from './user/UserComponent';
import PostComponent from './post/PostComponent';



class UserPosts extends Component {

    render() {

        let {posts, user} = this.props

        return (

            <div>

                <h1> These are the posts of <UserComponent item = {user} /> </h1>
                {
                    posts.map(value =>{
                        return(<PostComponent post = {value} key = {value.id} />)

                    })
                }

            </div>
        )
    }

}

export default UserPosts;





