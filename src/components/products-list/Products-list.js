import React from 'react';
import '../../styles.css'

export const ProductList = ({products}) => {
    return (
        <div>
            {products.map(({id, title, price, description}) => (
                <div key={id}>
                    <h5>{id}</h5>
                    <h5>{title}</h5>
                    <h5>{price}</h5>
                    <h5>{description}</h5>
                    <hr/>
                </div>
            ))}
        </div>

    )


}