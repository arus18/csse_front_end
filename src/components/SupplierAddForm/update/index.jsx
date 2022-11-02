import * as React from "react";
import Button from "@mui/material/Button";
import Button1 from "react-bootstrap/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { useState } from "react";
export default function UpdateFormDialog(props) {
  const { s, refresh, setRefresh } = props;

  const initialState = {
    supplierName: s.supplierName,
    supplierAddress: s.supplierAddress,
    supplierContactNumber: s.supplierContactNumber,
  };
  const [data, setData] = useState(initialState);
  const { supplierName, supplierAddress, supplierContactNumber } = data;
  const [open, setOpen] = React.useState(false);
  const onChangeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log("🚀 ~ file: index.jsx ~ line 40 ~ FormDialog ~ data", data);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUpdate = async () => {
    axios.put(`http://localhost:5006/api/supplier/${s.id}`, data);
    setOpen(false);
    setRefresh(!refresh);
  };

  return (
    <div>
      <Button1 variant="outline-success" onClick={handleClickOpen}>
        View
      </Button1>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Update Supplier</DialogTitle>
        <DialogContent>
          <Grid
            sx={{ background: "white", width: "auto" }}
            container
            spacing={2}
          >
            <Grid item xs={6}>
              <Typography variant="h6" sx={{ textAlign: "center" }}>
                Supplier Name
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="outlined-basic"
                label="Supplier Name"
                variant="outlined"
                defaultValue={supplierName}
                name="supplierName"
                onChange={(e) => onChangeHandler(e)}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6" sx={{ textAlign: "center" }}>
                Supplier Address
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="outlined-basic"
                label="Supplier Address"
                variant="outlined"
                name="supplierAddress"
                defaultValue={supplierAddress}
                onChange={(e) => onChangeHandler(e)}
                fullWidth
              />
            </Grid>

            <Grid item xs={6}>
              <Typography variant="h6" sx={{ textAlign: "center" }}>
                Contact Number
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="outlined-basic"
                label="Contact Number"
                variant="outlined"
                name="supplierContactNumber"
                defaultValue={supplierContactNumber}
                onChange={(e) => onChangeHandler(e)}
                fullWidth
              />
            </Grid>

            <Grid item xs={4}></Grid>
            <Grid item xs={8}></Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleUpdate()} variant="contained" color="success">
            Update
          </Button>
          <Button
             onClick={handleClose}
            variant="outlined"
            color="error"
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
