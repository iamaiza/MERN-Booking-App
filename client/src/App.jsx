import { Route, Routes } from "react-router-dom";
import { Layout, Login, Register } from "./index";
import { UserContextProvider } from "./Context/UserContext";
import axios from "axios"

axios.defaults.baseURL = "http://localhost:3000"
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
