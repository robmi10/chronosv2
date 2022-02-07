import React, {useContext, useState, useEffect} from 'react'
import { Context } from '../Context/Context';
import "./Cart.css"
import { commerce } from '../Commerce/commerce';
import Productstart from "./Productscart";
import { Navbar2 } from '../navbar/navbar2';
import { Button } from '@material-ui/core';
import { Link } from "react-router-dom";
import {
    Select,
    TextField,
    Snackbar,
    Grid,
    Box,
    Typography,
    InputLabel,
    CircularProgress
  } from "@material-ui/core";
import Alert from "@mui/material/Alert";

const Cart = () => {
    const {update_state, setUpdate_state} = useContext(Context)
    const {products, setProducts} = useContext(Context);
    const {productcart, setProductcart} = useContext(Context);

    const {status_cart_amount, setstatus_cart_amount} = useContext(Context);
    const {status_cart_delete, setstatus_cart_delete} = useContext(Context);

    const [product_get, setProduct_get] = useState(null)
    
    // const cart_ = JSON.parse(localStorage.getItem('cart'));

    const fetch_cart = async ()  =>{
        const cart = await commerce.cart.retrieve()

        console.log("inside fetch cart new", cart)
        setProduct_get(cart)
    }

    useEffect(() => {
        fetch_cart()

    }, [])

    if(product_get != null){
    return (
        <>
        <Navbar2/>
        
            <div className="bodyall">
                <div className="Mobilesize">

                              <Productstart products = {product_get.line_items}/>  
                <div className="PutToCenter"> 
                    <div className ="CartCheckoutContainer2"> 
                        <div className="h1_style" >Total Amount: {product_get.subtotal.formatted} $</div> 
                    </div>
                    
                    <div className ="CartCheckoutContainer3">
                        <Button className="TotalAmountdisplayButton" component={Link} color = "primary" variant= "contained" type="button" to="/checkout">Checkout</Button>
                        <Button className="TotalAmountdisplayButton2" color = "secondary"  variant= "contained" type="button" onClick={() =>{}}>Remove Cart</Button>
                    </div> 
                
                </div>
                </div>   


                </div>
                
                    
               
                <Snackbar
                open={status_cart_amount}
                autoHideDuration={2000}
                onClose={() => {
                    setstatus_cart_amount(false);
                }}
                >
                <Alert severity="success">Amount Updated</Alert>
                </Snackbar>

                <Snackbar
                open={status_cart_delete}
                autoHideDuration={2000}
                onClose={() => {
                    setstatus_cart_delete(false);
                }}
                >
                <Alert severity="success">Product Deleted</Alert>
                </Snackbar>
        </>
    )}

    else{
        return(
            <>
                <div className ="bodyall">
                <CircularProgress/>
                </div>
            </>
        )
    }
}

export default Cart
