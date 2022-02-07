import React, {useContext, useEffect, useState} from 'react'
import { commerce } from '../Commerce/commerce'
import { Context } from '../Context/Context';

const Fetch = () => {
    const { productcart, setProductcart } = useContext(Context);
    const { setProducts } = useContext(Context);
    const {update_state, setUpdate_state} = useContext(Context);

    const fetch_cart = async () =>{
        console.log("inside fetch cart func!")
        const cart = await commerce.cart.retrieve()
        setProductcart(cart)

        localStorage.setItem('cart', cart);
        
        console.log("fetch_cart -->", cart)
    }

    const fetch_products = async () => {
        const { data } = await commerce.products.list();
    
        setProducts(data);
      };

    useEffect(() => {
        
        fetch_products()
        console.log("inside fetch useeffect")
        fetch_cart()
    }, [update_state])

    return (
        <>
            
        </>
    )
}

export default Fetch
