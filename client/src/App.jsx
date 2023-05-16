import { Route, Routes } from "react-router-dom";
import { Layout, Login, Register, Home, ProfilePage, PlacesPage, PlaceForm } from "./index";
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
          <Route path="/account" element={<ProfilePage />} />
          <Route path="/account/places" element={<PlacesPage />} />
          <Route path="/account/places/new" element={<PlaceForm />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
