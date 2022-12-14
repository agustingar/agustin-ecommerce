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



export default function CheckoutCard(
    { product:{id, name, price, image}}) {

    const [{basket},dispatch] = useStateValue();

    const removeItem = () => dispatch({
        type: actionTypes.REMOVE_ITEM,
        id,
    });



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

                <IconButton>
                    <DeleteIcon  onClick={removeItem}/>
                </IconButton>


            </CardActions>

        </Card>
    );
}
