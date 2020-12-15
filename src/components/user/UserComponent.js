import React, {Component} from 'react';
//import './User.css'


class UserComponent extends Component {

    render () {

        let {item} = this.props

        return (
            <div>

                {item.id} - {item.name}

            </div>
        );
    }
}

export default UserComponent;
