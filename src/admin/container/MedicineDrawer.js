// import * as React from 'react';
// import { useFormik } from 'formik';
// import * as Yup from 'yup'
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DeleteIcon from '@mui/icons-material/Delete';

// import { DataGrid } from '@mui/x-data-grid';
// // import React, { useEffect, useState } from 'react';


// export default function MedicineDrawer() {
//   const [open, setOpen] = React.useState(false);
//   const [dis, setDis] = React.useState([]);

//   let medicineschema = Yup.object({

//     name: Yup.string().required(),
//     price: Yup.number().typeError('Please Enter Valid Price').required(),
//     // exdate:Yup.date().min(new Date(),"please entre a valid date").required(),
//     exdate: Yup.string().required().test('message', 'Date Must be in Present Or Future',
//       function (val) {
//         let currentDate = new Date();
//         console.log(currentDate);
//         let pastDate = new Date(val);
//         console.log(pastDate);
//         if (currentDate >= pastDate) {

//           return false;

//         } else if (currentDate === pastDate) {
//           return true;
//         }
//         else {
//           return true;
//         }
//       }
//     ),
//     desc: Yup.string().required().test('message', 'Maximum 100 word allowed',
//       function (val) {
//         let desc = val.split(" ")
//         console.log(desc);
//         if (desc.length > 100) {
//           return false
//         } else {
//           return true
//         }
//       }
//     )

//   })
//   const formik = useFormik({
//     initialValues: {
//       name: '',
//       price: '',
//       exdate: '',
//       desc: '',

//     },
//     validationSchema: medicineschema,
//     onSubmit: (values, action) => {
//       // alert(JSON.stringify(values, null, 2));
//       action.resetForm()
//       handleadd(values)
//       handleClose()

//     },
//   });
//   const { values, handleChange, handleBlur, handleSubmit, errors, touched } = formik



  
 

 
  
//   React.useEffect(() => {

//     let localData = JSON.parse(localStorage.getItem("medicine"));

//     if (localData !== null) {
//       setDis(localData)
//     }

//   }, [])
//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);

//   };
  


//   // const handleadd = (data) => {
//   //   console.log(data);

//   //   let localdata = JSON.parse(localStorage.getItem("medicine"))

//   //   let rno = Math.floor(Math.random() * 1000);

//   //   let newdata = { id: rno, ...data }

//   //   if (localdata === null) {
      
//   //     localStorage.setItem("medicine", JSON.stringify([newdata]))
//   //     setDis([newdata])
      
//   //   } else {
//   //     localdata.push(newdata)
//   //     localStorage.setItem("medicine", JSON.stringify(localdata))
//   //     setDis(localdata)
//   //   }


//   // }
//   const handleadd = (data) => {
//     console.log(data);

//     let rno = Math.floor(Math.random() * 1000);

//     let newData = { id: rno, ...data };

//     let localdata = JSON.parse(localStorage.getItem("medicine"));

//     console.log(localdata);

//     if (localdata === null) {
//       localStorage.setItem("medicine", JSON.stringify([newData]))
//       setDis([newData])
//     } else {
//       localdata.push(newData)
//       localStorage.setItem("medicine", JSON.stringify(localdata))
//       setDis(localdata)
//     }

//     handleClose();
//   };
//   const handleDelete =(id)=>{
//     let localData = JSON.parse(localStorage.getItem("medicine"));

//     let fdata = localData.filter((v, i) => v.id !== id)

//     localStorage.setItem("medicine", JSON.stringify(fdata))

//     setDis(fdata)
//   }
//   const columns = [
  
//     { field: 'name', headerName: 'Name', width: 130 },
//     { field: 'exdate', headerName: 'Expiry_Date', width: 130 },
//     { field: 'price', headerName: 'Price', width: 130 },
//     { field: 'desc', headerName: 'Description', width: 130 },
//     { field: 'action',
//      headerName: 'Action', 
//      width: 130 ,
//       renderCell: (params) => (
//         <DeleteIcon  
//         onClick={()=> handleDelete(params.row.id)} />
//       )
//   },
   
//   ];
//   return (
//     <div>
//       <Button variant="outlined" onClick={handleClickOpen}>
//         Medicine
//       </Button>
//       <Dialog open={open} onClose={handleClose}>
//         <DialogContent>
//           <form onSubmit={handleSubmit}>
//             <TextField

//               margin="dense"
//               id="name"
//               name="name"
//               value={values.name}
//               onChange={handleChange}
//               onBlur={handleBlur}
//               label="Medicine_Name"
//               type="text"
//               fullWidth
//               variant="standard"
//             />
//             {
//               errors.name && touched.name ?
//                 <span className='error' style={{ color: 'red' }}>{errors.name}</span> : null
//             }
//             <TextField

//               margin="dense"
//               id="name"
//               name="price"
//               value={values.price}
//               onChange={handleChange}
//               onBlur={handleBlur}
//               label="Medicine_Price"
//               type="text"
//               fullWidth
//               variant="standard"
//             />
//             {
//               errors.price && touched.price ?
//                 <span className='error' style={{ color: 'red' }}>{errors.price}</span> : null
//             }
//             <TextField

//               margin="dense"
//               id="name"
//               value={values.exdate}
//               onChange={handleChange}
//               onBlur={handleBlur}
//               name="exdate"
//               label="Medicine_Expiry_Date"
//               type="date"
//               fullWidth
//               variant="standard"
//             />
//             {
//               errors.exdate && touched.exdate ?
//                 <span className='error' style={{ color: 'red' }}>{errors.exdate}</span> : null
//             }
//             <TextField

//               margin="dense"
//               id="name"
//               name="desc"
//               value={values.desc}
//               onChange={handleChange}
//               onBlur={handleBlur}
//               label="Medicine_Description"
//               type="text"
//               fullWidth
//               variant="standard"
//             />
//             {
//               errors.desc && touched.desc ?
//                 <span className='error' style={{ color: 'red' }}>{errors.desc}</span> : null
//             }
//             <DialogActions>
//               <Button onClick={handleClose}>Cancel</Button>
//               <Button type='submit' onClick={handleClose}>Sumbit</Button>
//             </DialogActions>
//           </form>
//         </DialogContent>

//       </Dialog>
//       <div style={{ height: 400, width: '60%' }}>
//         <DataGrid
//           rows={dis}
//           columns={columns}
//           initialState={{
//             pagination: {
//               paginationModel: { page: 0, pageSize: 5 },
//             },
//           }}
//           pageSizeOptions={[5, 10]}
//           checkboxSelection
//         />
//       </div>
//     </div>

//   );
// }
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Formik, useFormik } from 'formik';
import * as yup from 'yup';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [items, setItems] = React.useState([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAdd = (data) => {
    console.log(data);

    let rno = Math.floor(Math.random() * 1000);

    let newData = { id: rno, ...data };

    let localdata = JSON.parse(localStorage.getItem("medicines"));

    console.log(localdata);

    if (localdata === null) {
      localStorage.setItem("medicines", JSON.stringify([newData]))
      setItems([newData])
    } else {
      localdata.push(newData)
      localStorage.setItem("medicines", JSON.stringify(localdata))
      setItems(localdata)
    }

    handleClose();
  };

  useEffect(() => {
    let localData = JSON.parse(localStorage.getItem("medicines"));

    if (localData !== null) {
      setItems(localData)
    }

  }, []);

  let d = new Date();
  let nd = new Date(d.setDate(d.getDate() - 1))

  let medicineschema = yup.object({
    name: yup.string().required(),
    date: yup.date().min(nd, "please entre a valid date").required(),
    price: yup.number().required(),
    desc: yup.string().required()
      .test('desc', 'maxmium 3 word allowed.',
        function (val) {
          let arr = val.split(" ")

          if (arr.length > 3) {
            return false
          } else {
            return true
          }
        })
  });

  const formik = useFormik({
    validationSchema: medicineschema,

    initialValues: {
      name: '',
      date: '',
      price: '',
      desc: ''
    },
    onSubmit: (values, action) => {
      handleAdd(values)
      action.resetForm()
    },

  });

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = formik;

  const handleDelete = (id) => {
    let localData = JSON.parse(localStorage.getItem("medicines"));

    let fdata = localData.filter((v, i) => v.id !== id)

    localStorage.setItem("medicines", JSON.stringify(fdata))

    setItems(fdata)
  }

  const handleEdit = (data) => {
    setOpen(true);

    formik.setValues(data);
    
    // update=true;
    

    // formik.setItem(data)
    // {
    //   <TextField

    //   margin="dense"
    //   id="name"
    //   label="Medicine name"
    //   name='name'
    //   type="text"
    //   fullWidth
    //   variant="standard"
    //   value={values.name}
    // />
    // }

    console.log(data);

  }

  const columns = [

    // { field: 'id', headerName: 'ID', width: 130 },
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'date', headerName: 'ExpiryDate', width: 130 },
    { field: 'price', headerName: 'Price', width: 130 },
    { field: 'desc', headerName: 'Description', width: 130 },
    {
      field: 'action',
      headerName: 'Action',
      width: 130,
      renderCell: (params) => (
        <>
          <IconButton aria-label="delete" onClick={() => handleDelete(params.row.id)}>
            <DeleteIcon />
          </IconButton>

          <IconButton aria-label="edit" onClick={() => handleEdit(params.row)}>
            <EditIcon />
          </IconButton>
        </>
      ),

    }

  ];

  return (
    <>
      <h1>Medicine</h1>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add Medicine
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Medicine</DialogTitle>
        <DialogContent>
          <Formik value={values} >
            <form onSubmit={handleSubmit}>
              <TextField

                margin="dense"
                id="name"
                label="Medicine name"
                name='name'
                type="text"
                fullWidth
                variant="standard"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <span style={{ color: 'red' }}>{errors.name && touched.name ? errors.name : null}  </span>
              <TextField

                margin="dense"
                id="name"
                label=""
                name='date'
                type="date"
                fullWidth
                variant="standard"
                value={values.date}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <span style={{ color: 'red' }}>{errors.date && touched.date ? errors.date : null} </span>
              <TextField

                margin="dense"
                id="name"
                label="Medicine Price"
                name='price'
                type="text"
                fullWidth
                variant="standard"
                value={values.price}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <span style={{ color: 'red' }}>{errors.price && touched.price ? errors.price : null} </span>
              <TextField

                margin="dense"
                id="name"
                label="Medicine Description"
                name='desc'
                multiline
                rows={4}
                type="address"
                fullWidth
                variant="standard"
                value={values.desc}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <span style={{ color: 'red' }}>{errors.desc && touched.desc ? errors.desc : null} </span>

              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button type='submit' >submit</Button>
              </DialogActions>
            </form>
          </Formik>
        </DialogContent>
      </Dialog>

      <div style={{ height: 400, width: '60%'}}>
        <DataGrid
          rows={items}
          columns={columns}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
    </>
  );
}