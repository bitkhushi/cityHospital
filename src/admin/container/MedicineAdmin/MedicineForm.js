import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

function MedicineForm({ onHandleSubmit, onUpdate }) {
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
    price: Yup.number().typeError('Please Enter Valid Price').required(),
    exdate: Yup.date().min(new Date(), "please entre a valid date").required(),
    exdate: Yup.string().required().test('message', 'Date Must be in Present Or Future',
      function (val) {
        let currentDate = new Date();
        console.log(currentDate);
        let pastDate = new Date(val);
        console.log(pastDate);
        if (currentDate >= pastDate) {

          return false;

        } else if (currentDate === pastDate) {
          return true;
        }
        else {
          return true;
        }
      }
    ),
    desc: Yup.string().required().test('message', 'Maximum 100 word allowed',
      function (val) {
        let desc = val.split(" ")
        console.log(desc);
        if (desc.length > 100) {
          return false
        } else {
          return true
        }
      }
    )

  })
  const formik = useFormik({
    initialValues: {
      name: '',
      price: '',
      exdate: '',
      desc: '',

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
        Add Medicine
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
              id="name"
              name="price"
              value={values.price}
              onChange={handleChange}
              onBlur={handleBlur}
              label="Medicine_Price"
              type="text"
              fullWidth
              variant="standard"
            />
            {
              errors.price && touched.price ?
                <span className='error' style={{ color: 'red' }}>{errors.price}</span> : null
            }
            <TextField

              margin="dense"
              id="name"
              value={values.exdate}
              onChange={handleChange}
              onBlur={handleBlur}
              name="exdate"
              label="Medicine_Expiry_Date"
              type="date"
              fullWidth
              variant="standard"
            />
            {
              errors.exdate && touched.exdate ?
                <span className='error' style={{ color: 'red' }}>{errors.exdate}</span> : null
            }
            <TextField

              margin="dense"
              id="name"
              name="desc"
              value={values.desc}
              onChange={handleChange}
              onBlur={handleBlur}
              label="Medicine_Description"
              type="text"
              fullWidth
              variant="standard"
            />
            {
              errors.desc && touched.desc ?
                <span className='error' style={{ color: 'red' }}>{errors.desc}</span> : null
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

export default MedicineForm;