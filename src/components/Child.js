import React, {Component} from 'react';
import Subchild from './Subchild'
import {Provider1} from '../services/contextService'



class Child extends Component {

    render () {

        let {greet} = this.props

        return (
            <div>

                <Subchild/>



            </div>
        )


    }




}
export default Child;
