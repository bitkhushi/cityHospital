import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../admin/component/Layout'

import DoctorDrawer from "../admin/container/DoctorDrawer"
import MedicineDrawer from "../admin/container/MedicineAdmin/MedicineDrawer"
import DashBoard from '../admin/container/DashBoard/DashBoard';
import Doctor from '../admin/container/DoctorAPI/Doctor';
import DoctorForm2 from '../admin/container/Doctorspost/DoctorForm2';


function AdminRoute(props) {
    return (



        <Layout>
            <Routes>
            <Route path='/' element={<DashBoard />}/>
            <Route path='/doctor_drawer' element={<DoctorForm2 />} />
            {/* <Route path='/doctor_drawe' element={<Doctor />} />  */}
            <Route path='/medicine_drawer' element={<MedicineDrawer />} />
            </Routes>
        </Layout>

    );
}

export default AdminRoute;