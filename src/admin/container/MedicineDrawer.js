import * as React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


export default function FormDialog() {
  let medicineschema = Yup.object({
    

  })
  const formik = useFormik({
    initialValues: {
        name: '',
        price: '',
        exdate: '',
        desc: '',
        
    },
    validationSchema: contactschema,
    onSubmit: values => {
        // alert(JSON.stringify(values, null, 2));
    },
});
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Medicine
      </Button>
      <Dialog open={open} onClose={handleClose}>
        {/* <DialogTitle>Subscribe</DialogTitle> */}
        <DialogContent>
          {/* <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText> */}
          <TextField
            autoFocus
            margin="dense"
            id="name"
            name="name"
            label="Medicine_Name"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            name="price"
            label="Medicine_Price"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            name="exdate"
            label="Medicine_Expiry_Date"
            type="date"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            name="desc"
            label="Medicine_Description"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Sumbit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}