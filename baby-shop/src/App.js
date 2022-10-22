import { BrowserRouter, Route, Routes } from "react-router-dom";
import FrontendLayout from "./pages/layout/FrontendLayout";
import BackendLayout from "./pages/layout/BackendLayout";
import { FrontentAboutUs, FrontentAllProducts, FrontentCard, FrontentContact, FrontentHome, FrontentNotFound, FrontentProductDetails } from "./pages/frontend/FrontendPagesList";
import {  BackendContact, BackendIndex } from "./pages/backend/BackendPagesList";
import { createContext } from "react";
import SettingContextProvider from "./context/SettingContext";
import AuthContextProvider from "./context/AuthContext";
import { AuthForgetPassword, AuthLogin, AuthRegister } from "./pages/auth/AuthPagesList";

export const storeContext = createContext(null);



function App() {
  return (
    <SettingContextProvider>
      <AuthContextProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<FrontendLayout/>}>
                    <Route index element={<FrontentHome/>}/>
                    <Route path="allproducts" element={<FrontentAllProducts/>}/>
                    <Route path="product-details" element={<FrontentProductDetails/>}/>
                    <Route path="card" element={<FrontentCard/>}/> 
                    <Route path="contact" element={<FrontentContact/>}/>
                    <Route path="about-us" element={<FrontentAboutUs/>}/>
                    <Route path="login" element={<AuthLogin/>}/>
                    <Route path="register" element={<AuthRegister/>}/>
                    <Route path="forget-password" element={<AuthForgetPassword/>}/>
                    <Route path="*" element={<FrontentNotFound/>}/>
                </Route>
            
                <Route path="/dashboard" element={<BackendLayout/>}>
                    <Route index element={<BackendIndex/>}/>
                    <Route path="contact" element={<BackendContact/>}/>
                </Route>    
            </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </SettingContextProvider>
  );
}

export default App;
