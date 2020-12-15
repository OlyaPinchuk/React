import React, {Component} from 'react';


class Starship extends Component {

    render () {

        let {item} = this.props

        return (

            <div>

                {item.name} - {item.model}


            </div>

        );
    }
}

export default Starship;

