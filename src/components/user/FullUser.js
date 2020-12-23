import React, {Component} from 'react';
import {UserServices} from '../../services/UserServices'


class FullUser extends Component {

    state = {user: null}

    userService = new UserServices()

    componentDidMount () {
        let {userID} = this.props
        this.userService.getUserById(userID).then(value => this.setState({user: value}))
    }


    render () {

        let {user} = this.state


        return (
            <div className = 'details' >

                {
                    user && <div> {user.id} - {user.name} - {user.email} </div>

                }


            </div>

        )

    }
}

export default FullUser;