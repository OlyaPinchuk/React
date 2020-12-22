import React, {Component} from 'react';
import User from './User'



class AllUsers extends Component {


    state = {users: []}

    onDelete = (id) => {

        let {users} = this.state
        users.splice(id-1, 1)
        this.setState({users})

    }

    componentDidMount() {

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => this.setState({users: value}))
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(prevProps)
        console.log(prevState)
    }

    componentWillUnmount() {
        console.log('delete')
    }

    render () {

            let {users} = this.state

        return (
            <div>

                {
                    users.map(value => <User user = {value} key = {value.id} func = {this.onDelete} /> )
                }

            </div>
        )


    }




}
export default AllUsers;
