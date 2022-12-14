import { useForm, FormProvider} from 'react-hook-form';
import { Grid, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import AddressInput from './AddressInput';
import { useStateValue } from '../../StateProvider';


const AddressForm = ({nextStep}) => {
const methods = useForm();
const [{shippingData}, dispatch] = useStateValue();

  return (
<>
<div>
      <Typography variant="h4" paddingBottom="2rem" >
        Shipping address
      </Typography>
      </div>
      <FormProvider {...methods}>
       <form onSubmit={methods.handleSubmit(data => {
       dispatch ({
        type: "SET_SHIPPINGDATA",
        shippingData: data,
       });
nextStep();
       })}> 
        <Grid container spacing={3}>
        <AddressInput required name="firstName" label="First name"/>
        <AddressInput required name="lastName" label="Last name"   />
        <AddressInput required name="address" label="Address"/>
        <AddressInput required name="address2" label="Address 2" />
        <AddressInput required name="province" label="Province" />
        <AddressInput required name="CP" label="CP"/>
        <AddressInput required name="country" label="Country"/>
      </Grid>
      <Grid>
       <Link to='/checkout-page'> <Button >Back to the Checkout Page</Button> </Link>
        <Button type='submit' variant='contained' color='primary'>Next</Button>  
        </Grid>
        </form>
</FormProvider>
    </>
  )
  }
  export default  AddressForm