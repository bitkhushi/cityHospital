import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

function DoctorForm({ onHandleSubmit, onUpdate }) {
  console.log(onUpdate);
  const [open, setOpen] = React.useState(false);
    
  useEffect(() => {

    if (onUpdate) {
      formik.setValues(onUpdate);
      handleClickOpen();
    }


  }, [onUpdate])
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);

  };
  let medicineschema = Yup.object({

    name: Yup.string().required(),
    degree: Yup.string().required(),
   
  })
  const formik = useFormik({
    initialValues: {
      name: '',
      degree: '',
     

    },
    validationSchema: medicineschema,
    onSubmit: (values, action) => {

      action.resetForm()
      // handleSubmitData(onUpdate)
      onHandleSubmit(values)

      handleClose()


    },
  });
  const { values, handleBlur, handleSubmit, errors, touched, handleChange } = formik
  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add Doctor Details
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <TextField

              margin="dense"
              id="name"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              label="Medicine_Name"
              type="text"
              fullWidth
              variant="standard"
            />
            {
              errors.name && touched.name ?
                <span className='error' style={{ color: 'red' }}>{errors.name}</span> : null
            }
            <TextField

              margin="dense"
              id="degree"
              name="degree"
              value={values.degree}
              onChange={handleChange}
              onBlur={handleBlur}
              label="Degree"
              type="text" 
              fullWidth
              variant="standard"
            />
            {
              errors.degree && touched.degree ?
                <span className='error' style={{ color: 'red' }}>{errors.degree}</span> : null
            }
            
           
           
           
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button type='submit' onClick={handleClose}>Sumbit</Button>
            </DialogActions>
          </form>
        </DialogContent>

      </Dialog>
    </>
  );
}

export default DoctorForm;