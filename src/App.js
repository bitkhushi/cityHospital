import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminRoute from "./Routes/AdminRoute";
import UserRoute from "./Routes/UserRoute";
import PrivateRoute from "./user/container/PrivateRoute";
import { Provider } from "react-redux";
import {  persistor, store } from "./redux/store";
import { PersistGate } from 'redux-persist/integration/react'
import { SnackbarProvider } from "notistack";
import Alert from "./admin/component/Alert";

function App() {
  
  return (
    <SnackbarProvider> 
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Alert />
        <Routes>

          <Route element={<PrivateRoute />}>
            <Route path="/admin/*" element={<AdminRoute />} />
          </Route>

          <Route path="/*" element={<UserRoute />} />



        </Routes>
      </PersistGate>
    </Provider >
    </SnackbarProvider>




  );
}

export default App;
