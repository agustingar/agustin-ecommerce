import React from 'react';
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import CheckoutCard from './CheckoutCard.js';
import Total from './Total';
import {useStateValue} from "../../StateProvider";
import { v4 as uuidv4 } from 'uuid';


const Item = styled(Grid)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));




const CheckoutPage = () => {
    
const [{basket},dispatch] = useStateValue();
   console.log(basket)

function FormRow() {
    
        return (
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
        );
    }
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography align='center' component={'div'} gutterBottom variant='h4'>
                        Shopping Cart </Typography>
                </Grid>
                <Grid item xs={12} sm={8} md={9} container spacing={2}>
                    <FormRow />
                </Grid> 
                <Grid item xs={12} sm={4} md={3}>
                    <Typography align='center' component={'div'} gutterBottom variant='h4'>
                        <Total/>
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
};
export default CheckoutPage