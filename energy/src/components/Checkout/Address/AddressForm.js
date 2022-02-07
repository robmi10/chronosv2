import FormInput from '../CheckoutForm/CustomTextfield';
import { useForm, FormProvider } from 'react-hook-form';
import React, { useState, useEffect , useContext} from 'react'
import useStyles from "../../styles/styles"
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import { commerce } from '../../Commerce/commerce';
import {
    Select,
    TextField,
    Snackbar,
    Grid,
    Button,
    Box,
    Typography,
    InputLabel
  } from "@material-ui/core";
import { Link  } from "react-router-dom";
import MenuItem from '@mui/material/MenuItem';
import { Context } from '../../Context/Context';

const AddressForm = ({token}) => {
    
    const classes = useStyles();
    const methods = useForm();

    console.log("token new --->", token.id)

    const [ShippingCountries, setShippingCountries] = useState([])
    const [ShippingCountry, setShippingCountry] = useState('')

    const [ShippingSubdivisions, setShippingSubdivisions] = useState([])
    const [ShippingSubdivision, setShippingSubdivision] = useState("")

    const [ShippingOptions, setShippingShippingOptions] = useState([])
    const [ShippingOption, setShippingShippingOption] = useState("")

    const {next_step, setNext_step } = useContext(Context);

    const {Shipping_data, setShipping_data} = useContext(Context)
/*     
    const {Shipping_Country, setShipping_Country} = useContext(Context)
    const {Shipping_Subdivision, setShipping_Subdivision} = useContext(Context)
    const {Shipping_Option, setShipping_Option} = useContext(Context)  */

    const countries = Object.entries(ShippingCountries).map(([code, name]) =>({
        id:code, label: name
    }))

    const fetch_countries = async (checkoutid) =>{
        console.log("checkoutid -->", checkoutid)
        const { countries } = await commerce.services.localeListShippingCountries(checkoutid)
        console.log("countries -->", countries)
        setShippingCountries(countries)

        setShippingCountry(Object.keys(countries)[0])
    }

    const fetch_subdivisions= async (countryid) =>{
        console.log("countryid -->", countryid)
        const { subdivisions } = await commerce.services.localeListSubdivisions(countryid)
        console.log("subdivisions -->", subdivisions)
        setShippingSubdivisions(subdivisions)

        setShippingSubdivision(Object.keys(subdivisions)[0])
    }

    const fetch_option= async (tokenid, countryid, region = null) =>{
        console.log("countryid in fetch_option-->", countryid)

        console.log("countryid in region v2-->", region)

        const options  = await commerce.checkout.getShippingOptions(tokenid, {country: countryid, region: region})
        console.log("options -->", options)
        setShippingShippingOptions(options)  
        setShippingShippingOption(options[0].id)
    }

    useEffect(() => {        
        fetch_countries(token.id)
    }, [])

    useEffect(() => {
        console.log("current ShippingCountry->", ShippingCountry)
        if (ShippingCountry) fetch_subdivisions(ShippingCountry)

    }, [ShippingCountry])

    useEffect(() => {

        console.log("fetch ShippingCountry  --->", ShippingCountry)

        console.log("fetch Subdivision --->", ShippingSubdivision)

        if (ShippingSubdivision) fetch_option(token.id, ShippingCountry, ShippingSubdivision)

    }, [ShippingSubdivision])
        
    const setData = (data, ShippingCountry, ShippingSubdivision, ShippingOption) =>{
        console.log("data in set--->", data)
        // console.log("ShippingCountry --->", ShippingCountry)
        // console.log("ShippingSubdivision --->", ShippingSubdivision)
        // console.log("ShippingOption --->", ShippingOption) 

        setShipping_data(data)
        // setShipping_Country(ShippingCountry)
        // setShippingSubdivision(ShippingSubdivision)
        // setShipping_Option(ShippingOption) 
        setNext_step(1)
    }

    return (
        <>
    <Typography variant="h6" gutterBottom>Shipping address</Typography>
                        <FormProvider {...methods}>
                            <form
                                onSubmit={methods.handleSubmit((data) => setData({ ...data, ShippingCountry, ShippingSubdivision, ShippingOption }))}
                                >
                                <Grid container spacing={1}>
                                
                                    <FormInput required name="firstName" label="First name" />
                                        <FormInput required name="lastName" label="Last name" />
                                        <FormInput required name="address1" label="Address line 1" />
                                        <FormInput required name="email" label="Email" />
                                        <FormInput required name="city" label="City" />
                                        <FormInput required name="zip" label="Zip / Postal code" />
                                    <FormInput
                                        required
                                        name="zip"
                                        label="ZIP / Postal code"
                                    ></FormInput>     
                                 
                                
                                    <Grid item xs = {14} sm={6}>
                                            <InputLabel>Shipping Country</InputLabel>
                                            {/* {console.log("ShippingCountry 2 ->", ShippingCountry)} */}
                                            <Select value={ShippingCountry} fullWidth onChange={(e) => setShippingCountry(e.target.value)}>
                                                {Object.entries(ShippingCountries).map(([code, name]) => ({ id: code, label: name })).map((item) => (
                                                    
                                                <MenuItem key={item.id} value={item.id}>
                                                    {item.label}
                                                </MenuItem>
                                                ))}
                                            </Select>
                                    </Grid>

                                    <Grid item xs = {12} sm={6}>
                                    <InputLabel>Shipping Subdivision</InputLabel>
                                        <Select value={ShippingSubdivision} fullWidth onChange={(e) => setShippingSubdivision(e.target.value)}>
                                            {Object.entries(ShippingSubdivisions).map(([code, name]) => ({ id: code, label: name })).map((item) => (
                                            <MenuItem key={item.id} value={item.id}>
                                                {item.label}
                                            </MenuItem>
                                            ))}
                                        </Select>
                                    </Grid>
                                    
                                    <Grid item xs = {12} sm={6}>
                                    <InputLabel>Shipping Options</InputLabel>
                                        <Select value={ShippingOption} fullWidth onChange={(e) => setShippingShippingOption(e.target.value)}>
                                            {ShippingOptions.map((sO) => ({ id: sO.id, label: `${sO.description} - (${sO.price.formatted_with_symbol})` })).map((item) => (
                                            <MenuItem key={item.id} value={item.id}>
                                                {item.label}
                                            </MenuItem>
                                            ))}
                                        </Select>
                                    </Grid> 

                                    </Grid>

                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 20 }}>
                                        <Button component={Link} variant="outlined" to="/cart">Back to Cart</Button>
                                        <Button type="submit" variant="contained" color="primary">Next</Button>
                                    </div>
                            </form>
                        </FormProvider>
        </>
    )
}

export default AddressForm
