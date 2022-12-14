import  React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { useStateValue } from '../../StateProvider';
import { styled } from '@mui/material/styles';
import { v4 as uuidv4 } from 'uuid';
import CheckoutCard from '../Checkout/CheckoutCard';
import accounting from 'accounting';
import { getBasketTotal } from '../../reducer';


const Item = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



const addresses = ['1 MUI Drive', 'Reactville', 'Anytown', '99999', 'USA'];


export default function Review() {
const [state, setState] = useState({
  number: "",
  expiry: "",
  cvc: "",
  
});
const handleInputChange = (e) => {
  setState({
      ...state,
      [e.target.name] : e.target.value
  })
}
const [{basket},dispatch] = useStateValue();
   console.log(basket)
const payments =[ 
state.number,
  state.expiry,
  state.cvc,
]
;
   return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>



            <React.Fragment>
                {basket.map((item) => (

                    <Grid item xs={12} sm={6} md={4} lg={3}   key={uuidv4()
                    } >
                        <Item>
                            <CheckoutCard 

                                    product={item} />
                        </Item>
                    </Grid>
                ))} 
            </React.Fragment>
  

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
       {accounting.formatMoney(getBasketTotal(basket),"€")}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>John Smith</Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}