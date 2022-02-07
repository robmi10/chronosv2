import React, {useContext, useEffect, useState} from 'react'
import { commerce } from '../Commerce/commerce'
import { Context } from '../Context/Context';

const Update = () => {
    const update_cart = async (id, amount) =>{
        const cart = await commerce.cart.update(id, amount)
        console.log("update cart", cart)
    }
    return (
        <>
            
        </>
    )
}

export default Update
