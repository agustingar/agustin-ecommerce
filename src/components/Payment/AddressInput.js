import { Grid, TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";

const AddressInput = ({name, label, required}) => {
    const { control } = useFormContext();
  return (
<Grid item xs={12} sm={6}>
<TextField  control={control} 
fullWidth
defaultValue=""
required={required}
name={name} 
label={label} />

    </Grid>
  )
}

export default AddressInput