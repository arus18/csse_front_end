import React from "react";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Typography } from "@mui/material";
import FormDialog from "../../../components/SupplierAddForm";
// import Notification from "../../../components/Notification/index";
import ConfirmDialog from "../../../components/ConfirmDialog";
import UpdateFormDialog from "../../../components/SupplierAddForm/update";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SupplierList() {
  const [supliers, setSuppliers] = useState([]);
  const [refresh, setRefresh] = useState(true);

  let navigate = useNavigate();
  const fetchSupplier = async () => {
    const res = await axios.get("http://localhost:5006/api/supplier");
    setSuppliers(res.data);
    console.log(res.data);
  }
  useEffect(() => {
    fetchSupplier();
  }, []);
  useEffect(() => {
    fetchSupplier();
  }, [refresh]);
  
  // setting notifications
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });

  // setting delete confirmation dialogue
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: "",
    subTitle: "",
  });

  // updating admin details in the database
  const UpdateSupplier = async (
    id,
    supplierName,
    supplierAddress,
    supplierContactNumber
  ) => {
    navigate(`http://localhost:5006/api/supplier/${id}`, {
      state: {
        supplierName: supplierName,
        supplierAddress: supplierAddress,
        supplierContactNumber: supplierContactNumber,
      },
    });
  };

  return (
    <div>
      <Box
        padding={"6px"}
        sx={{ background: "#7c5295", width: "100%", height: "900px" }}
        fullWidth
      >
        <Box sx={{ background: "#7c5295" }}>
          <Grid
            padding={"35px"}
            sx={{ background: "white", mx: "350px", my: "6px", width: "auto" }}
            container
            spacing={2}
          >
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography
                padding={"10px"}
                variant="h4"
                gutterBottom
                sx={{ background: "white", textAlign: "left" }}
              >
                Registerd Suppliers
              </Typography>
              <FormDialog />
            </Grid>

            <Table striped>
              <thead>
                <tr>
                  <th>Supervicer ID</th>
                  <th>Name</th>
                  <th>Contact No</th>
                  <th>Address</th>
                  <th>Action</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {supliers.map((s) => (
                  <tr>
                    <td>{s.id}</td>
                    <td>{s.supplierName}</td>
                    <td>{s.supplierContactNumber}</td>
                    <td>{s.supplierAddress}</td>
                    <td>
                      <ConfirmDialog sId={s.id} setNotify={setNotify} />
                    </td>
                    <td>
                      <UpdateFormDialog s={s} refresh={refresh} setRefresh={setRefresh}/>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Grid>
        </Box>
        {/* <Notification notify={notify} setNotify={setNotify} />
            <ConfirmDialog
                confirmDialog={confirmDialog}
                setConfirmDialog={setConfirmDialog}
            /> */}
      </Box>
    </div>
  );
}
