import React from 'react';
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import FavoriteCard from './FavoriteCard';
import {useStateValue} from "../../StateProvider";
import { v4 as uuidv4 } from 'uuid';


const Item = styled(Grid)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));




const Favorites = () => {
    
const [{favorite}] = useStateValue();
   console.log(favorite)

function FormRow() {
    
        return (
            <React.Fragment>
                {favorite.map((item) => (
                    
                    <Grid item xs={12} sm={6} md={4} lg={3}   key={uuidv4()
                    } >
                        <Item>
                            <FavoriteCard 
                                 
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
                        Wishlist </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12} container spacing={2}>
                    <FormRow />
                </Grid> 
              
               
            </Grid>
        </div>
    );
};
export default Favorites