import { Route, Routes } from "react-router-dom";
import { Layout, Login, Register, Home, AccountPage } from "./index";
import { UserContextProvider } from "./Context/UserContext";
import axios from "axios"

axios.defaults.baseURL = "http://localhost:3000"
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path="/account/:pageId?" element={<AccountPage />} />
          <Route path="/account/:pageId/:actionId" element={<AccountPage />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
