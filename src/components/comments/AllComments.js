import React, {Component} from 'react';
import {CommentsServices} from '../../services/CommentsServices'
import Comment from './Comment'


class AllComments extends Component {

    commentsService = new CommentsServices()

    state = {comments: []}

    componentDidMount () {
        this.commentsService.getAllComments().then(value => this.setState({comments: value}))
    }

    render () {

        let {comments} = this.state

        console.log(comments)

        return (

            <div>

                {
                    comments.map(comment => <Comment item = {comment} key = {comment.id} />)
                }

            </div>

        )
    }
}

export default AllComments;

