import Footer from "./component/Footer";
import Header from "./component/Header";
import Home from "./container/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./container/pages/About";
import Appointment from "./container/pages/Appointment";
import Contact from "./container/pages/Contact";
import Departments from "./container/pages/Departments";
import Doctors from "./container/pages/Doctors";




function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/appointment' element={<Appointment />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/departsments' element={<Departments />} />
          <Route path='/doctors' element={<Doctors />}>
          </Route>
        </Routes>
      </BrowserRouter>
      <Home />
      <Footer />
    </>
  );
}

export default App;
