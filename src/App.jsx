import { useContext } from "react";
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage";
import { BrowserRouter,Routes,Route,Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

function App() {
  const ProtectedRoute = ({children}) =>{
    if(!currentUser){
      return <Navigate to = "/login" />
    }
    return children
  }
  const {currentUser} = useContext(AuthContext)
  console.log(currentUser);
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/">
      <Route index element = {
      <ProtectedRoute>
        <HomePage />
      </ProtectedRoute>} />
      <Route path="login" element = {<LoginPage />} />
      <Route path="register" element = {<RegisterPage />} />
    </Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App
