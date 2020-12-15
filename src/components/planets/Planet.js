import React, {Component} from 'react';


class Planet extends Component {

    render () {

        let {item} = this.props

        return (

            <div>

                {item.name} - {item.climate}


            </div>

        );
    }
}

export default Planet;

