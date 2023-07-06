import * as React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import MedicineForm from './MedicineForm';



export default function MedicineDrawer() {
  
  const [dis, setDis] = React.useState([]);
  const [update, setUpdate] = React.useState(null);

  React.useEffect(() => {

    let localData = JSON.parse(localStorage.getItem("medicine"));

    if (localData !== null) {
      setDis(localData)
    }

  }, [])

  


  
  const handleSubmitData = (data) => {
    console.log(data);

    let rno = Math.floor(Math.random() * 1000);

    let newData = { id: rno, ...data };

    let localdata = JSON.parse(localStorage.getItem("medicine"));

    console.log(localdata);

    if (localdata === null) {
      localStorage.setItem("medicine", JSON.stringify([newData]))
      setDis([newData])
    } else {
      if (update) {
        let Udata=localdata.map((v)=>{
          if(v.id === data.id){
            return data;
          }else{
            return v;
          }
        })
        console.log(Udata);
        localStorage.setItem("medicine", JSON.stringify(Udata))
        setDis(Udata)
      } else {
        localdata.push(newData)
        localStorage.setItem("medicine", JSON.stringify(localdata))
        setDis(localdata)
      }

    }
    setUpdate(null);
    // handleClose();
  };

  const handleDelete = (id) => {
    let localData = JSON.parse(localStorage.getItem("medicine"));

    let fdata = localData.filter((v, i) => v.id !== id)

    localStorage.setItem("medicine", JSON.stringify(fdata))

    setDis(fdata)
  }

  const handleUpdate = (data) => {
   
   

    setUpdate(data)

  }



  const columns = [

    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'exdate', headerName: 'Expiry_Date', width: 130 },
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
          <IconButton aria-label="edit" 
          onClick={() => handleUpdate(params.row)}
          >
            <EditIcon />
          </IconButton>

        </>

      )
    },

  ];

 
  return (
    <div>
      
      
      <MedicineForm onHandleSubmit={handleSubmitData} onUpdate={update} />
      <div style={{ height: 400, width: '60%' }}>
        <DataGrid
          rows={dis}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
    </div>

  );
}
