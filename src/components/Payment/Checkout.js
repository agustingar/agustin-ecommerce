import  React, { useState } from 'react';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/agustingar/" target="_blank" >
     Agustin Garcia
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const steps = ['Shipping address', 'Payment details', 'Review your order'];





export default function Checkout() {
  const [activeStep, setActiveStep] = useState(0);

const nextStep = () => setActiveStep((prevActivestep) => prevActivestep + 1 );
  const backStep = () => setActiveStep((prevActivestep) => prevActivestep - 1 );


  const Form = () =>  activeStep === 0 ? <AddressForm nextStep={nextStep} /> : <PaymentForm  backStep={backStep}nextStep={nextStep}/>  ;
  
  return (
    
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>  
     {
      activeStep === steps.length ? (<Review/>) : (<Form/> )
     }
        
        </Paper>
        <Copyright />
      </Container>
 
  );
}
