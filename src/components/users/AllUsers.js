import React, {Component} from 'react';
import {UserServices} from '../../services/UserServices'
import UserComponent from './UserComponent'
import FullUser from './FullUser'
import './FullUserDesign.css'
import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route,
    withRouter
} from 'react-router-dom'


class AllUsers extends Component {

    userService = new UserServices()

    state = {users: [], searchText: '', }

    componentDidMount() {

        this.userService.getAllUsers().then(value => this.setState({users: value}))

    }

    handleSearchInput = (ev) => {
        let text = ev.target.value
        this.setState({searchText: text})

    }

    render() {

        let {users, searchText} = this.state;
        let filtered = users.filter(user => user.name.toUpperCase().includes(searchText.toUpperCase()));

        return(

                <div>

                    <div>
                        <div> Search </div>
                        <input type = 'text' value = {searchText} onChange = {this.handleSearchInput}/>
                    </div>

                    {
                        filtered.map(value => <UserComponent user = {value}  key = {value.id} />)
                    }

                    <Switch>
                        <Route path = {'/users/:id'} render = {(props) => {
                            let {match: {params: {id}}} = props
                            return <FullUser userID = {id} key = {id} />
                            } }  >

                        </Route>
                    </Switch>



                </div>

        )

    }

}
export default withRouter (AllUsers);
