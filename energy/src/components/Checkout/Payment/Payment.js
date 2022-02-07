import React, {useContext, useState} from 'react'
import { commerce } from '../../Commerce/commerce'
import { Context } from '../../Context/Context';
import { Link  } from "react-router-dom";
import {
    Select,
    TextField,
    Snackbar,
    Grid,
    Button,
    Box,
    Typography,
    InputLabel,
    CircularProgress
  } from "@material-ui/core";
import Summary from "./Summary"
import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const Payment = ({token, handleCaptureCheckout}) => {
    const {Shipping_data, setShipping_data} = useContext(Context)
    const {next_step, setNext_step } = useContext(Context);

    const [pay, setPay] = useState(false)

    const {order, setOrder } = useContext(Context);

    
    const {paymentdone, setpaymentdone} = useContext(Context);

    const stripePromise = loadStripe("pk_test_51JtI2eDJpnEFn3RgaDA2Jrhr1IuuyO5zVV3Vh0xghqnhoPbLsZujtYrnHJiCOjXBI3oA9FNjCauaAN60qTqj2a7e00jz3NuBtC");

    console.log("Shipping_data get ---->", Shipping_data)
   /*  console.log("Shipping_Country ---->", Shipping_Country)
    console.log("Shipping_Subdivision ---->", Shipping_Subdivision)
    console.log("Shipping_Option ---->", Shipping_Option) */
    const handleSubmit = async (event, elements, stripe) => {
        event.preventDefault();
        setPay(true)
        if (!stripe || !elements) return;
    
        const cardElement = elements.getElement(CardElement);
    
        const { error, paymentMethod } = await stripe.createPaymentMethod({ type: 'card', card: cardElement });
    
        if (error) {
          console.log('[error]', error);
        } else {
            console.log("Shipping_data -->", Shipping_data)
            console.log("Shipping_data.lastName -->", Shipping_data.lastName)
            
            console.log("Shipping_data.shippingCountry -->", Shipping_data.shippingCountry)

            console.log("ShippingCountry new-->", Shipping_data.ShippingCountry)
          const orderData = {
            line_items: token.live.line_items,
            customer: { firstname: Shipping_data.firstName, lastname: Shipping_data.lastName, email: Shipping_data.email },
            shipping: { name: 'International', street: Shipping_data.address1, town_city: Shipping_data.city, county_state: Shipping_data.shippingSubdivision, postal_zip_code: Shipping_data.zip, country: Shipping_data.ShippingCountry },
            fulfillment: { shipping_method: Shipping_data.ShippingOption },
            payment: {
              gateway: 'stripe',
              stripe: {
                payment_method_id: paymentMethod.id,
              },
            },
          };
          
          handleCaptureCheckout(token.id, orderData);
          if(order.customer){
            
          setpaymentdone(true)
          setNext_step(2)
        }
        }
      };
    
    return (
        <>
            <Summary token={token}/>
            <Typography variant="h6" gutterBottom style={{ margin: '20px 0' }}>Payment method</Typography>
                <Elements stripe={stripePromise}>
                    <ElementsConsumer>{({ elements, stripe }) => (
                    <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
                        <CardElement />
                       {/*  <PayPalScriptProvider options={{ "client-id": "test" }}>
                  <PayPalButtons style={{ layout: "horizontal" }} />
              </PayPalScriptProvider> */}
                        <br /> <br />
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        
                        <Button variant="outlined" onClick={() =>setNext_step(0)}>Back</Button>
                      { pay ? <CircularProgress/> : <Button type="submit" variant="contained" disabled={!stripe}  color="primary">
                            Pay {token.live.subtotal.raw} $
                        </Button>}
                        </div>
                    </form>
                    )}
                    </ElementsConsumer>
                </Elements>

               
          {/*   <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 20 }}>
                                        <Button onClick={() => {setNext_step(0)}}>Back to Shipping</Button>
                                        <Button type="submit" variant="contained" color="primary">Buy</Button>
                                    </div> */}

        </>
    )
}

export default Payment
