import React, {Component} from 'react';
import {StarshipsServices} from '../../services/StarshipsServices'
import Starship from './Starship'

class AllStarships extends Component {

    starshipsService = new StarshipsServices()

    state = {ships: []}

    componentDidMount () {
        this.starshipsService.getAllShips().then(value => this.setState({ships: value}))
    }

    render () {

        let {ships} = this.state


        return (
            <div>

                {
                    ships.map((ship, index) => <Starship item = {ship} key = {index} />)

                }

             </div>
        );
    }
}

export default AllStarships;