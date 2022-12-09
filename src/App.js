import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import { AuthContextProvider } from "./context/AuthContext";
import PrivateRoutes from "./Components/PrivateRoutes";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/home"
            element={
              <PrivateRoutes>
                <Home />
              </PrivateRoutes>
            }
          />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
