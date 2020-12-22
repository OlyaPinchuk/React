import React, {Component} from 'react';
import Supersubchild from './Supersubchild'


class Subchild extends Component {

    render () {

        let {greet1} = this.props

        return (
            <div>

                <Supersubchild/>

            </div>
        )


    }




}
export default Subchild;
