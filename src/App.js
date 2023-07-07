import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminRoute from "./Routes/AdminRoute";
import UserRoute from "./Routes/UserRoute";
import PrivateRoute from "./user/container/PrivateRoute";

function App() {
  return (
    
      <Routes>
       <Route element={<PrivateRoute/>}>
        <Route path="/admin/*" element={<AdminRoute />} />
        </Route>

        <Route path="/*" element={<UserRoute />} />

      </Routes>

    
  );
}

export default App;
