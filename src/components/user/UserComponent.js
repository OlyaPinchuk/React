import React, {Component} from 'react';
//import './User.css'


class UserComponent extends Component {

    render () {

        let {item, func} = this.props
        let text = 'Hi user! -'

        return (
            <div>
                {func && text}

                {item.id} - {item.name}

                {func && <button onClick={() => func(item.id)}>chose</button>}

            </div>
        );
    }
}

export default UserComponent;
