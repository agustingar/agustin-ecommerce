import  {useEffect, useState}  from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import {AddShoppingCart} from '@mui/icons-material/';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import  './Product.css';
import { useStateValue} from "../../StateProvider"
import { Favorite } from '@mui/icons-material/';
import Popup from 'reactjs-popup';
import SubShare from './Share';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Product({
  product:{id, name , description, price, productType, image},
}) {
  const [{basket},dispatch] = useStateValue();
useEffect(() => {

localStorage.setItem('basket', JSON.stringify(basket))
}, [basket])


  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
const addToFav = () => {
  dispatch({
    type: "ADD_TO_FAV",
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

const shareData = async () => {
  try {
      await alert.share({
          message:
              'This is the demo text',
      });
  } catch (error) {
      alert(error.message);
  }
};
  return (
    
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader 
     title={name}
     className="headerName"
  
        subheader="in stock"
        action={
          <Typography
          variant= 'h5'
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
       
     
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
      {productType}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Add to Cart" onClick={addToBasket} >
          <AddShoppingCart />
        </IconButton>
        <IconButton  aria-label="like" onClick={addToFav}>
  <Favorite />
</IconButton>
        <IconButton>
          <Popup trigger={ <ShareIcon /> }position="  bottom bottom" >
    
 <SubShare/>
  </Popup>
        </IconButton>
       
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{description}</Typography>
          
        </CardContent>
      </Collapse>
    </Card>
  );
}
