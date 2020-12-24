import React, {Component} from 'react';
import {UserServices} from '../../services/UserServices'
import UserComponent from './UserComponent'
import FullUser from './FullUser'
import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route,
    withRouter
} from 'react-router-dom'



class AllUsers extends Component {

    userService = new UserServices()

    state = {users: []}

    componentDidMount() {

        this.userService.getAllUsers().then(value => this.setState({users: value}))

    }

    render() {

        let {users} = this.state


        return(

                <div>

                    {
                        users.map(value => <UserComponent user = {value}  key = {value.id} />)
                    }

                    <Switch>
                        <Route path = {'/users/:id'} render = {(props) => {
                            let {match: {params: {id}}} = props
                            return <FullUser userID = {id} key = {id} />
                            } }  >

                        </Route>
                    </Switch>

                    {/*{
                        localStorage.setItem('1', 'Hi, this is user 1.')

                    }*/}

                    {/*{
                        console.log(localStorage.getItem('1'))
                    }*/}

                </div>

        )

    }

}
export default withRouter (AllUsers);
