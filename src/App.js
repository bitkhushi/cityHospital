import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminRoute from "./Routes/AdminRoute";
import UserRoute from "./Routes/UserRoute";
import PrivateRoute from "./user/container/PrivateRoute";
import { Provider } from "react-redux";
import { configstore } from "./redux/store";

function App() {
  const store =configstore();
  return (
    <Provider store={store}>
      <Routes>
       <Route element={<PrivateRoute/>}>
        <Route path="/admin/*" element={<AdminRoute />} />
        </Route>

        <Route path="/*" element={<UserRoute />} />

      </Routes>
    </Provider>
    
      

    
  );
}

export default App;
