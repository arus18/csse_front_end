import React from 'react'
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';

export default function UpdateSupplier() {

     
  return (
    
    
    <Grid  sx={{background:'white',width:'auto'}} container spacing={2}>
    
    <Grid item xs={6} >
         <Typography variant="h6" sx={{textAlign:'center'}}>Supplier Name</Typography>
    </Grid>
    <Grid item xs={6}>
    <TextField id="outlined-basic" label="Supplier Name" variant="outlined"  fullWidth/> 
    </Grid>
    <Grid item xs={6} >
         <Typography variant="h6" sx={{textAlign:'center'}}>Supplier Address</Typography>
    </Grid>
    <Grid item xs={6}>
    <TextField id="outlined-basic" label="Supplier Address" variant="outlined" fullWidth/> 
    </Grid>

    <Grid item xs={6} >
         <Typography variant="h6" sx={{textAlign:'center'}} >Contact Number</Typography>
    </Grid>
    <Grid item xs={6}>
    <TextField id="outlined-basic" label="Contact Number" variant="outlined" fullWidth/> 
    </Grid>

   <Grid item xs={4}>
     
  </Grid>
   <Grid item xs={8}>
    
   </Grid>
  </Grid>
  )
}
