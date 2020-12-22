import React, {Component} from 'react';
import Child from './components/Child'
import AllUsers from './components/users/AllUsers'

import {Provider} from './services/contextService'
import {Provider1} from './services/contextService'


class App extends Component {

    data = 'Hi user'

    render () {


        return (
             <div>
                <AllUsers/>
             </div>




            /*<Provider1 value = {'Second provider'}>
                <Provider value = {'hi user'}>
                    <div>
                        <Child/>
                    </div>
                </Provider>
            </Provider1>*/

        )


    }




}
export default App;
