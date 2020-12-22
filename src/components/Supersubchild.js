import React, {Component} from 'react';
import {Consumer} from '../services/contextService'
import {Consumer1} from '../services/contextService'


class Supersubchild extends Component {

    render () {

        let {greet2} = this.props

        return (

            <div>

                <Consumer>
                    {
                        (value) => {
                        return <div> {value} </div>
                        }
                    }
                </Consumer>

                <Consumer1>
                    {
                        (value) => {
                        return <div> {value} </div>
                        }
                    }
                </Consumer1>

            </div>


        )


    }




}
export default Supersubchild;
