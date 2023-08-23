import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DoctorForm from '../Doctor/DoctorForm';
import { AddDoctor, DeleteDoctor, UpdateDoctor } from '../../../redux/action/Doctor.action';
import { DataGrid } from '@mui/x-data-grid';
import { ADD_DOCTORS } from '../../../redux/ActionTypes';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Adddoctors, Deletedoctors, Updatedoctors, getdoctors } from '../../../redux/slice/DoctorsSlice';
import { CircularProgress } from '@mui/material';


function DoctorForm2(props) {

    const [update, setUpdate] = React.useState(null);

    const dispatch = useDispatch()
    const doctors = useSelector(state => state.doctors)
    console.log(doctors);

    const handlesubmit = (data) => {
        console.log(data);
        if (update) {
            dispatch(Updatedoctors(data))
        } else {
            dispatch(Adddoctors(data))
        }
        setUpdate(null)

    }
    useEffect(() => {
        dispatch(getdoctors())

    }, [])
    const handleDelete = (id) => {

        dispatch(Deletedoctors(id))
    }
    const handleUpdate = (data) => {
        setUpdate(data)


    }
    const columns = [

        { field: 'id', headerName: 'id', width: 130 },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'degree', headerName: 'Degree', width: 130 },
        {
            field: 'action',
            headerName: 'Action',
            width: 130,
            renderCell: (params) => (
                <>
                    <IconButton aria-label="delete" onClick={() => handleDelete(params.row.id)}>
                        <DeleteIcon />
                    </IconButton>
                    <IconButton aria-label="edit" onClick={() => handleUpdate(params.row)}>
                        <EditIcon />
                    </IconButton>

                </>

            )
        },

    ];

    return (
        <div>
            <DoctorForm onHandleSubmit={handlesubmit} onUpdate={update} />

            {
                doctors.loading ? <CircularProgress color="secondary" /> :
                    doctors.error !== null ? <p>{doctors.error}</p> :
                    
                        <div style={{ height: 400, width: '50%' }}>
                            <DataGrid
                                rows={doctors.doctors}
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
            }

        </div>

    );
}

export default DoctorForm2;