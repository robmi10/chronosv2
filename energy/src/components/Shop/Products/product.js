import React, {useState, useEffect, useContext} from 'react'
import { commerce } from '../../Commerce/commerce'
import { Context } from '../../Context/Context';

export const Product = () => {
    // const [productlist, setProductlist] = useState()
    
    const { products, setProducts } = useContext(Context);
    const fetch_products = async () =>{
        const {data} = await commerce.products.list()
        console.log("inside product component -->", data)
        setProducts(data)
    }

    useEffect(() => {
        console.log("fetch_products ->", fetch_products())
    }, [])
    return (
        <>

        </>
    )
}
