import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminRoute from "./Routes/AdminRoute";
import UserRoute from "./Routes/UserRoute";

function App() {
  return (
    <>


      <Routes>
        <Route path="/admin/*" element={<AdminRoute />} />
        <Route path="/*" element={<UserRoute />} />

      </Routes>



    </>






  );
}

export default App;
