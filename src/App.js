import React, {useState, useEffect} from 'react';
import User from './components/User'



// const InputWindow = () => {
//     return (
//         <div>
//             {/*<User item = {'item here'} />*/}
//
//         </div>
//     )
// }


const handleSave = () => {

    // setState((prevState) => {})
    console.log('works')

}



export default function App() {

    const [state, setState] = useState(null)

    return (

        <div>

            <form>

                <div>User name</div>
                <input></input>
                <div>User phone</div>
                <input></input>

                <button type = 'submit' onClick={handleSave} > save </button>

            </form>
        </div>

    )

};
