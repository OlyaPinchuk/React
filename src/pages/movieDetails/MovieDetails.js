import React from 'react';
import {useRouteMatch} from 'react-router-dom'

export const MovieDetails = ({children}) => {
    const {params: {id}} = useRouteMatch()

    return (
        <div>
           hello
        </div>
    )
}
