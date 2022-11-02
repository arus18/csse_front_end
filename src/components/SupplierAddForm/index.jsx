import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AddSupplier from '../../pages/Suppliers/Add';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
const initialState = {
    supplierName:"",
    supplierAddress:"",
    supplierContactNumber:""
     
};

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
   
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
});
    // const[suplierName,setSuplierName ] = useState("");
    // console.log("🚀 ~ file: index.jsx ~ line 27 ~ FormDialog ~ suplierName", suplierName)
    // const[suplierAddress,setSuplierAddress] = useState("");
    // console.log("🚀 ~ file: index.jsx ~ line 29 ~ FormDialog ~ suplierAddress", suplierAddress)
    // const[suplierContactNumber,setSuplierContactNumber] = useState("");
    // console.log("🚀 ~ file: index.jsx ~ line 31 ~ FormDialog ~ suplierContactNumber", suplierContactNumber)

    const [data, setData] = useState(initialState);
    const{supplierName,supplierAddress,supplierContactNumber}=data
    console.log("🚀 ~ file: index.jsx ~ line 40 ~ FormDialog ~ data", data)  
    const onChangeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
        
        
        
      };
      
      let navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();
        // const data = {
        //       suplierName,
        //       suplierAddress,
        //       suplierContactNumber
        // }
        


        try {
            await axios
                .post("http://localhost:5006/api/supplier", data)
                .then((res) => {
                    console.log(res);
                    setNotify({
                        isOpen: true,
                        message: "Registration Successfully",
                        type: "success",
                    });
                    window.location.reload();
                })
                .catch((err) => {
                    console.log(err);
                    console.log("Data error");
                });
        } catch (error) {
            console.log(error);
        }
    }
   

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add Supplier
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Supplier</DialogTitle>
        <DialogContent>
        <Grid  sx={{background:'white',width:'auto'}} container spacing={2}>
    
    <Grid item xs={6} >
         <Typography variant="h6" sx={{textAlign:'center'}}>Supplier Name</Typography>
    </Grid>
    <Grid item xs={6}>
    <TextField id="outlined-basic" label="Supplier Name" variant="outlined"  name="supplierName"  fullWidth onChange={(e)=>onChangeHandler(e)}/> 
    </Grid>
    <Grid item xs={6} >
         <Typography variant="h6" sx={{textAlign:'center'}} >Supplier Address</Typography>
    </Grid>
    <Grid item xs={6}>
    <TextField id="outlined-basic" label="Supplier Address" variant="outlined"  name="supplierAddress" onChange={(e)=>onChangeHandler(e)} fullWidth/> 
    </Grid>

    <Grid item xs={6} >
         <Typography variant="h6" sx={{textAlign:'center'}} >Contact Number</Typography>
    </Grid>
    <Grid item xs={6}>
    <TextField id="outlined-basic" label="Contact Number" variant="outlined"  name="supplierContactNumber" onChange={(e)=>onChangeHandler(e)} fullWidth/> 
    </Grid>

   <Grid item xs={4}>
     
  </Grid>
   <Grid item xs={8}>
    
   </Grid>
  </Grid>
        </DialogContent>
        <DialogActions>
        <Button  variant="contained" color="success" onClick={onSubmit}>
        Add
      </Button>
      <Button onClick={handleClose} variant="outlined" color="error">
        Close
      </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
