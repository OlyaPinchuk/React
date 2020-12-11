import React, {Component} from 'react';

class PostComponent extends Component {

    render() {

        let {post, func} = this.props

        return (
            <div>

                {post.userId} - {post.id} - {post.title}

                <button onClick = {() => {func(post.id)}} > chose </button>

            </div>
        );
    }
}

export default PostComponent;