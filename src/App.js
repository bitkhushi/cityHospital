import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminRoute from "./Routes/AdminRoute";
import UserRoute from "./Routes/UserRoute";
import PrivateRoute from "./user/container/PrivateRoute";
import { Provider } from "react-redux";
import { configstore } from "./redux/store";
import { PersistGate } from 'redux-persist/integration/react'

function App() {
  const {store,persistor} = configstore();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes>

          <Route element={<PrivateRoute />}>
            <Route path="/admin/*" element={<AdminRoute />} />
          </Route>

          <Route path="/*" element={<UserRoute />} />



        </Routes>
      </PersistGate>
    </Provider >




  );
}

export default App;
