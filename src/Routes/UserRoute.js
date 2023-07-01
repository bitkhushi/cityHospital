import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from "../user/component/Footer";
import Header from "../user/component/Header";
import Home from "../user/container/Home";
import About from "../user/container/pages/About";
import Appointment from "../user/container/pages/Appointment";
// import Contact from "../user/container/pages/Contact";
import Departments from "../user/container/pages/Departments";
import Doctors from "../user/container/pages/Doctors";
import Doctor from "../user/container/pages/Doctor";
import VisitingDoctor from "../user/container/pages/VisitingDoctor";
import NotFound from "../user/component/NotFound";
import Contact1 from "../user/container/pages/Contact1";
import MakeAppointment from "../user/container/pages/MakeAppointment";
import Auth1 from "../user/container/pages/Auth1";
import Medicine from "../user/container/pages/Medicine"
// import Header1 from "../user/component/Header1";
// import Auth from "../user/container/pages/Auth";

function UserRoute(props) {
    return (
        <>
            <Header />
            <Routes>
                {/* <Route exact path='/' element={<Home />} /> */}
                <Route exact path='/' element={<Home/>}/>
                <Route exact path='/about' element={<About />} />
                <Route exact path='/appointment' element={<Appointment />} />
                {/* <Route exact path='/contact' element={<Contact />} /> */}
                <Route exact path='/departsments' element={<Departments />} />
                <Route exact path='/doctors' element={<Doctors />} />
                <Route exact path='/conatct1' element={<Contact1 />} />
                <Route exact path="*" element={<NotFound />} />
                {/* <Route exact path="/auth" element={<Auth />} /> */}
                <Route exact path="/auth" element={<Auth1 />} />
                <Route exact path='/medicine' element={<Medicine />}/>

                <Route exact path="/appointment" element={<MakeAppointment />} />
               

                <Route path="/doctor/">
                    <Route exact path=':id' element={<Doctor />} />
                    <Route exact path='Visiting_Doctor' element={<VisitingDoctor />} />
                </Route>

            </Routes>

            <Footer />
        </>


    );
}

export default UserRoute;