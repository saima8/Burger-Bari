import React from 'react'

// import Aux from 'react-aux'

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map(igkey => {
        return <li key = {igkey}>
        <span style={{textTransform: 'capitalize'}}>{igkey}</span>: {props.ingredients}
    </li>
    })
    
    return (
        <>
            <h3>Your order</h3>
            <p>Delicious burger with the following ingredints: </p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to checkout?</p>
        </>
    )
}

export default orderSummary