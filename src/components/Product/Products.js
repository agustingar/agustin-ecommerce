import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Product from './Product'
import products from '../../product-data';
import './Product.css';
import { v4 as uuidv4 } from 'uuid';






const Item = styled(Grid)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

  
export default function Products() {

  return (
<> 

            <Grid container spacing={3}> 
              { 
                                    products.map(product => ( 
                        <Grid item xs={12} sm={6} md={4} lg={3} key={uuidv4()
                        }>
                            <Item> 
                                <Product 

                                product={product} />
                            </Item> 
                             </Grid>
                   ))
                }

            </Grid>
</>
    );
}
