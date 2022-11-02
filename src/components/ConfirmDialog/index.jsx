import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Button1 from 'react-bootstrap/Button';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';

export default function ConfirmDialog(props) {
    const {sId,setNotify} =props
    console.log("🚀 ~ file: index.jsx ~ line 13 ~ ConfirmDialog ~ sId", sId)
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };

  const DeleteSupplier = async () => {
    console.log("DeleteSupplier Called");
    await axios
        .delete(`http://localhost:5006/api/supplier/${sId}`)
        .then((res) => {
            console.log("Admin Deleted");
            window.location.reload();
            setOpen(false);
            setNotify({
                isOpen: true,
                message: "Supplier Deleted Successfully",
                type: "error",
            });
        }).catch((err) => {
            console.log(err);
            console.log("Data error");
        });
};

  return (
    <div>
      <Button1 variant="outline-danger" onClick={handleClickOpen}>Remove</Button1>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Delete Supplier"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          Are you sure you want to delete this Profile?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button1 variant="outline-danger" onClick={()=>DeleteSupplier()} autoFocus>
            Ok
          </Button1>
        </DialogActions>
      </Dialog>
    </div>
  );
}