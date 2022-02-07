import { useEffect, useContext } from "react";
import {
  List,
  ListItem,
  ListItemText,
  Box,
  Typography,
  Divider
} from "@material-ui/core";
import { Context } from "../../Context/Context";
import useStyles from "../../styles/styles"

export default function Summary({token}) {
  const { productcart } = useContext(Context);

  console.log("summary token ->", token)

  useEffect(() => {
  }, []);

  const classes = useStyles();

  return (
    <div >
      <Box
        
        noValidate
        autoComplete="off"
      >
        <Typography variant="h6" gutterBottom>
          Order summary
        </Typography>
      
        <List disablePadding style={{ maxHeight: 200, overflow: "auto" }}>

          {token.live.line_items.map((option) => (
            <ListItem style={{ padding: "10px 0" }} key={option.product}>
              <ListItemText
                primary={option.name}
                secondary={`Quantity: ${option.quantity}`}
              />
              <Typography variant="body5" style={{marginTop:"20px"}}>
                {option.price.raw * option.quantity} $
              </Typography>
            </ListItem>
          ))}

          <ListItem style={{ padding: "10px 0" }}>
            <ListItemText primary="Total" />
            <Typography variant="subtitle1" style={{ fontWeight: 700 }}>
              {productcart.subtotal.formatted} $ 
            </Typography>
          </ListItem>
        </List>

        {/* <Paymentprovider /> */}
        <Divider className={classes.divider} />
      </Box>

     
    </div>
  );
}