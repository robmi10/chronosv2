import React, {useContext, useEffect, useState} from 'react'
import { commerce } from '../Commerce/commerce'
import { Context } from '../Context/Context';

const Add = () => {
    const add_cart = async (id, amount) =>{
        const cart = await commerce.cart.add(id, amount)
        console.log("update cart", cart)
    }

    return (
        <>
            
        </>
    )
}

export default Add