import React, {Component} from 'react';


class Person extends Component {

    render () {

        let {item} = this.props

        return (

            <div>

                {item.name} - {item.birth_year}


            </div>

        );
    }
}

export default Person;

