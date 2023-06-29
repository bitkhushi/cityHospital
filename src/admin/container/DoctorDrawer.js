import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useFormik } from 'formik';
import * as Yup from 'yup'

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleadd =(data)=>{
    console.log(data);
  }
  let doctorschema = Yup.object({
    img: Yup.string().required('please select the image'),
    name: Yup.string().required().matches(/^[a-zA-Z ]+$/, 'please enter valid name'),
    desg: Yup.string().required()
      .test('designation', 'maxmium 100 word allowed.',
        function (val) {
          let arr = val.split(" ")

          if (arr.length > 100) {
            return false
          } else {
            return true
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
      img: '',
      name: '',
      desg: '',
      desc:''

    },
    validationSchema: doctorschema,
    onSubmit: (values , action) => {
        action.resetForm()
        handleClose()
        handleadd(values)

      // alert(JSON.stringify(values, null, 2));
    },
  });
  const { values, handleChange, handleBlur, handleSubmit, errors, touched } = formik

  
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Doctor
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <TextField
              
              margin="dense"
              type="file"
              id="name"
              name="img"
              value={values.img}
              onChange={handleChange}
              onBlur={handleBlur}
              label="Doctor_Image"
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
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              label="Doctor_Name"
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
              value={values.desg}
              onChange={handleChange}
              onBlur={handleBlur}
              name="desg"
              label="Doctor_Designation"
              type="text"
              fullWidth
              variant="standard"
            />
            {
              errors.desc && touched.desc ?
                <span className='error' style={{ color: 'red' }}>{errors.desc}</span> : null
            }
            <TextField
              
              margin="dense"
              id="name"
              name="desc"
              value={values.desc}
              onChange={handleChange}
              onBlur={handleBlur}
              label="Description"
              type="text"
              fullWidth
              variant="standard"
            />
            {
              errors.desg && touched.desg ?
                <span className='error' style={{ color: 'red' }}>{errors.desg}</span> : null
            }
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button type="submit">Sumbit</Button>
            </DialogActions>
          </form>
        </DialogContent>

      </Dialog>
    </div>
  );
}