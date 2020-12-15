import React, {Component} from 'react';

class PostComponent extends Component {


    render() {

        let {post, func, isBold} = this.props

        let postInfo = <span> {post.userId} - {post.id} - {post.title} </span>;
        if (isBold) {
            postInfo = <h1> {post.userId} - {post.id} - {post.title} </h1>
        }

        return (
            <div>


                {postInfo}

                { func && <button onClick = {() => {func(post.id)}} > chose </button>

                }

            </div>
        );
    }
}

export default PostComponent;