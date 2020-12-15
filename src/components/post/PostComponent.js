import React, {Component} from 'react';

class PostComponent extends Component {


    render() {

        let {item} = this.props

        return (
            <div>

                    {item.id} - {item.title}

            </div>
        );
    }
}

export default PostComponent;