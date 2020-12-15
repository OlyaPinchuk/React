import React, {Component} from 'react';
import {PlanetsServices} from '../../services/PlanetsServices'
import Planet from './Planet'

class People extends Component {

    planetsService = new PlanetsServices()

    state = {planets: []}

    componentDidMount () {
        this.planetsService.getAllPlanets().then(value => this.setState({planets: value}))

    }

    render () {

        let {planets} = this.state
        console.log(planets)

        return (
            <div>

                {
                    planets.map((planet, index) => <Planet item = {planet} key = {index} />)

                }

             </div>
        );
    }
}

export default People;