import React from 'react'
import "./Checkout.css"
import { useState, useEffect, useContext } from "react";
import { Stepper, StepLabel, Step, Paper, Typography, CircularProgress, CssBaseline} from "@material-ui/core";
import useStyles from "../../styles/styles"
import Zoom from "@mui/material/Zoom";
import { Context } from '../../Context/Context';
import { Navbar2 } from '../../navbar/navbar2';
import AddressForm from "../Address/AddressForm"
import { commerce } from '../../Commerce/commerce';
import Payment from '../Payment/Payment';
import Confirmation from '../Confirmation/Confirmation';

const steps = ["Shpipping information", "Payment"];

export default function Checkout() {
  const { next_step, setNext_step } = useContext(Context);
  const { order, setOrder } = useContext(Context);
  const [open_now] = useState(true);
  const {productcart, setProductcart} = useContext(Context);

  const [token, setToken] = useState(null);

  console.log("Checkout -->", productcart.id)

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setProductcart(newCart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);

      console.log("inside handleCaptureCheckout -->", incomingOrder)
      setOrder(incomingOrder);
      setNext_step(2)
      refreshCart();
    } catch (error) {
      //setErrorMessage(error.data.error.message);
    }
  };

  useEffect(() => {
    const gettokenid = async () =>{
        try{
            const token = await commerce.checkout.generateToken(productcart.id, {type: 'cart'})

            console.log("token --->", token)
            setToken(token)
        }catch(error) {

        }
    }
    gettokenid()
  }, []);

  const classes = useStyles();

  if(token != null){
  return (
    <>
    <Navbar2/>
    <CssBaseline/>
    <div className="rootDiv">
      <Zoom in={open_now} timeout={1000}>
        <Paper elevation={3} className={classes.paper2}>
          <Typography variant="h5" align="center">
            Checkout
          </Typography>

          <Stepper activeStep={next_step} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                
                  {console.log("current label ->", label)}
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {next_step === 0 && token != null? (
            <AddressForm token = {token}/>) : 
            next_step === 1  ? (
                <Payment token = {token} handleCaptureCheckout = {handleCaptureCheckout}/>
            ) :
            next_step === 2  ? (
                <Confirmation token = {token}/>
            ) :( 
            console.log("no matches"))}
        </Paper>
      </Zoom>
    </div>

    </>
  );
}
else{
  return(
    <>
    <Navbar2/>
    <div className="rootDiv">
      <CircularProgress/>
    </div>
    </>
  )
}
}