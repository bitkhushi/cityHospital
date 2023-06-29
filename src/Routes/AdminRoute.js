import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../admin/component/Layout'
import AppointementDrawer from "../admin/container/AppointmentDrawer"
import DepartmentDrawer from "../admin/container/DepartmentDrawer"
import DoctorDrawer from "../admin/container/DoctorDrawer"
import MedicineDrawer from "../admin/container/MedicineDrawer"


function AdminRoute(props) {
    return (



        <Layout>
            <Routes>

            <Route path='/appointement_drawer' element={<AppointementDrawer />} />
            <Route path='/department_drawer' element={<DepartmentDrawer />} />
            <Route path='/doctor_drawer' element={<DoctorDrawer />} />
            <Route path='/medicine_drawer' element={<MedicineDrawer />} />
            </Routes>
        </Layout>

    );
}

export default AdminRoute;