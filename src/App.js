import React, {useState, useEffect, useRef} from 'react';
import User from './components/User'



// const InputWindow = () => {
//     return (
//         <div>
//             {/*<User item = {'item here'} />*/}
//
//         </div>
//     )
// }


//const handleSave = (ev) => {
//
//    ev.preventDefault()
//    // setState((prevState) => {})
//    console.log('works')
//    console.log(textInput.value)
//
//
//}



export default function App() {

    const [state, setState] = useState(null)
    const nameInput = useRef(null)


    const handleSave = (ev) => {

//        ev.preventDefault()
        setState({name: nameInput.current.value, age: 20})
        nameInput.current.value = null
//        console.log(nameInput.current.value)
//        console.log(state)
    }

    console.log(state)





    return (

        <div>

            <div>

                <div>User name</div>
                <input ref = {nameInput} ></input>

                <div>User age</div>
                <input></input>

                <button type = 'submit' onClick={handleSave} > save </button>


                <hr/>
                <User item = {state} />

            </div>


        </div>

    )

};
