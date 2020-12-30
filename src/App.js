import React, {useState, useEffect, useReducer} from 'react';


//useSate()
//useEffect()
//useReducer()


const Test = () => {
    useEffect(() => {
        console.log('mount')

        return () => {
            console.log('UNmount')
        }

    }, [])

    return ('will be unmounted')
}

const initialState = null;

const reducer = (state, action) => {
    switch (action.type){
        case 'SET_TODO_ITEM' : {
            return action.payload;
        }
        case 'RESET_TODO' : {
            return null;
        }
        default : {
            console.log('invalid action.type')
            return state;
        }
    }


}


export default function App() {

    const [counter, setCounter] = useState(1)
    const [user, setUser] = useState(null)
    const [state, dispatch] = useReducer(reducer, initialState)


    const fetchData = async() => {

        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${counter}`)
        const responseJson = await response.json()

        dispatch({type: 'SET_TODO_ITEM', payload: responseJson})

    }

     useEffect(() => {
        console.log('here is a useEffect')

//        if (counter == 3){
            fetchData()
//        }

    }, [counter])


    const handleInc = () => {
        setCounter((prevState) => prevState + 1)
    }

    const handleReset = () => {
        setCounter(1)
    }

    const handleSetUser = () => {
        setUser({
            name: 'Mike',
            age: 30
        })
    }

    const handleResetUser = () => {
        setUser(null)

    }

    const handleResetTodo = () => {
        dispatch({type: 'RESET_TODO'})

    }



    return(

        <div className = 'App'>
             {/*{counter !== 2 && <h2> <Test/> </h2>}*/}
            <h3> Counter: {counter} </h3>
            <button  onClick = {handleInc} > inc </button>
            <button  onClick = {handleReset} > reset </button>
            <button  onClick = {handleSetUser}> set user </button>
            <button  onClick = {handleResetUser}> reset user </button>
            <button  onClick = {handleResetTodo}> reset todo </button>

            {
                user && <h2> {user.name} - {user.age} </h2>

            }

            {
                state && <h2> {state.id} - {state.title} - {state.completed.toString()} </h2>

            }


        </div>

    )

}