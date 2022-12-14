

import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import DeleteIcon from '@mui/icons-material/Delete';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { useStateValue } from '../../StateProvider';
import { actionTypes } from '../../reducer';
import { AddShoppingCart } from '@mui/icons-material';



export default function FavoriteCard(
    { product:{id, name, price,productType, image,description}}) {

    const [{favorite},dispatch] = useStateValue();

    const removeItem = () => dispatch({
        type: "REMOVE_FAV_ITEM",
        id,
    });

    const addToBasket = () => {
        dispatch({
          type: "ADD_TO_BASKET",
          item:{
            id,
            name,
            productType,
            image,
            price,
            description,
          }
        })
      }

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                title={name}
                className="headerName"

                subheader="in stock"
                action={
                    <Typography
                        variant='h5'
                        color='textSecondary'
                  >
                        {price}{'€'}
                    </Typography>
                }


            />
            <CardMedia
                component="img"
                height="194"
                image={image}
title={name}
/>

            <CardActions disableSpacing
            display='flex'
            justifyContent='space-between'
            textAlign='center' >

  <IconButton aria-label="Add to Cart" onClick={addToBasket} >
          <AddShoppingCart />
        </IconButton>
                <IconButton>
                    <DeleteIcon  onClick={removeItem}/>
                </IconButton>


            </CardActions>

        </Card>
    );
}
