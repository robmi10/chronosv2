import React,{useEffect, useContext, useState} from 'react'
import "./Cart.css"
import { Navbar } from '../navbar';
import { ButtonCart, ButtonCart2 } from '../ButtonElements';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import IconButton from '@mui/material/IconButton';
import { commerce } from '../Commerce/commerce';
import { Context } from '../Context/Context';
import { Link } from "react-router-dom";
import { Button } from '@material-ui/core';
import { useNavigate } from "react-router-dom";

const Productscart = ({products}) => {
    const {productcart, setProduct_get} = useContext(Context);
    const {update_state, setUpdate_state} = useContext(Context);

    
    const {status_cart_amount, setstatus_cart_amount} = useContext(Context);
    const {status_cart_delete, setstatus_cart_delete} = useContext(Context);

/*  console.log("Productscart ->", productcart)
    console.log("Products ->", products)
    console.log("productcart all cost->", productcart.subtotal.formatted) */
    
    const update_amount = async(id, qty) =>{
        console.log("id -->", id)
        console.log("quantity -->", qty)
        const update_cart = await commerce.cart.update(id, {quantity: qty})
        console.log("inside update --__--__-->", update_cart)
        setUpdate_state(!update_state)

        setstatus_cart_amount(true)
        console.log("setUpdate_state -->", update_state)
    } 

    const delete_product = async (id) =>{
        console.log("inside delete")
        const remove_cart = await commerce.cart.remove(id)
        setUpdate_state(!update_state)
        setstatus_cart_delete(true)
    }
    
    
    return (
        <>
           
            <div className ="CartWrapper">
               
               {products.map((option, index) =>{
                   console.log("inside cart option -->", option)
                   return(
                    <div className ="CartCard">
                   <h3>{option.name}</h3>

                   <img style={{width:200, height: 200}}src={option.image.url}/>
                   
                   <div className="CartAmountContainer">
                   <IconButton onClick={() =>{update_amount(option.id, option.quantity - 1)}}>
                   <RemoveIcon/>
                   </IconButton>
                   
                   <h3> {option.quantity}</h3>
                   <IconButton onClick={() =>{update_amount(option.id, option.quantity + 1)}}>
                   <AddIcon/>
                   </IconButton>
                   </div>
                   <Button color = "secondary"  style={{marginLeft: 245, marginBottom: -30 }} variant= "contained" onClick={() =>{delete_product(option.id)}}><DeleteIcon/></Button>

                   </div>)
               })} 
       </div>

            
            
        </>
    )
}

export default Productscart
