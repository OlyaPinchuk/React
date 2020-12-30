import React, {memo, useState, useEffect, useMemo, useCallback} from 'react';


const Test = memo (({onClick}) => {

    console.log('this is test')

    return (

        <div onClick = {onClick} > test here </div>

    )

})



export default function App() {

    const [counter, setCounter] = useState(0)

    const handleInc = () => {
        setCounter((prevState) => prevState + 1)

    }

    const handleDec = () => {
        setCounter((prevState) => prevState - 1)

    }

    const handleReset = () => {
        setCounter(0)

    }

    const onClickHandler = useCallback(() => console.log(counter) , [counter])

    return (
        <div>
            <Test onClick = {onClickHandler} />
            <h2> Counter: {counter} </h2>
            <button onClick = {handleInc} > increase </button>
            <button onClick = {handleDec} > decrease </button>
            <button onClick = {handleReset} > reset </button>


        </div>

    )

}