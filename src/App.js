import Footer from "./component/Footer";
import Header from "./component/Header";
import Home from "./container/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./container/pages/About";
import Appointment from "./container/pages/Appointment";
import Contact from "./container/pages/Contact";
import Departments from "./container/pages/Departments";
import Doctors from "./container/pages/Doctors";
import Doctor from "./container/pages/Doctor";
import VisitingDoctor from "./container/pages/VisitingDoctor";
import NotFound from "./component/NotFound";

import MakeAppointment from "./container/pages/MakeAppointment";
import Auth1 from "./container/pages/Auth1";

// import Auth from "./container/pages/Auth";





function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/appointment' element={<Appointment />} />
        <Route exact path='/contact' element={<Contact />}/>
        <Route exact path='/departsments' element={<Departments />} />
        <Route exact path='/doctors' element={<Doctors />} />
        <Route exact path="*" element={<NotFound /> } />
        {/* <Route exact path="/auth" element={<Auth />}/> */}
        <Route exact path="/auth"  element={<Auth1 /> } />

        <Route exact path="/appointment" element={<MakeAppointment />}/>
      
          
      <Route path="/doctor/">
        <Route exact path=':id' element={<Doctor />} />
        <Route exact path='Visiting_Doctor' element={<VisitingDoctor />} />
      </Route>
      </Routes>


      <Footer />
    </>
  );
}

export default App;
