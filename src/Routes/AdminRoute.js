import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../admin/component/Layout'

import DoctorDrawer from "../admin/container/DoctorDrawer"
import MedicineDrawer from "../admin/container/MedicineAdmin/MedicineDrawer"
import DashBoard from '../admin/container/DashBoard/DashBoard';


function AdminRoute(props) {
    return (



        <Layout>
            <Routes>
            <Route path='/' element={<DashBoard />}/>
            <Route path='/doctor_drawer' element={<DoctorDrawer />} />
            <Route path='/medicine_drawer' element={<MedicineDrawer />} />
            </Routes>
        </Layout>

    );
}

export default AdminRoute;