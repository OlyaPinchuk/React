import React, {Component} from 'react';
import {PeopleServices} from '../../services/PeopleServices'
import Person from './Person'

class People extends Component {

    peopleService = new PeopleServices()

    state = {people: []}

    componentDidMount () {
        this.peopleService.getAllPeople().then(value => this.setState({people: value}))

    }

    render () {

        let {people} = this.state
        console.log(people)

        return (
            <div>

                {
                    people.map(person => <Person item = {person} key = {person.height} />)

                }

             </div>
        );
    }
}

export default People;