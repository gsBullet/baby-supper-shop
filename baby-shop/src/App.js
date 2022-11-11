import { BrowserRouter, Route, Routes } from "react-router-dom";
import FrontendLayout from "./pages/layout/FrontendLayout";
import BackendLayout from "./pages/layout/BackendLayout";
import { FrontentAboutUs, FrontentAllProducts, FrontentCard, FrontentContact, FrontentHome, FrontentNotFound, FrontentProductDetails, FrontentProfile, FrontentProfileCardList, FrontentProfileDashboard, FrontentProfileLogout, FrontentProfileOrderList, FrontentProfilePayment, FrontentProfileSettings, FrontentProfileWishList } from "./pages/frontend/FrontendPagesList";
import { BackendAdvertise, BackendAllBlogs, BackendAllCategory, BackendAllProducts, BackendBanners, BackendBasicInfo, BackendBlogCategory, BackendBlogManagements, BackendBrands, BackendComments, BackendCreateCategory, BackendDiscountProduct, BackendFeatures, BackendIndex, BackendOrderManagement, BackendReporting, BackendReview, BackendUserManagement } from "./pages/backend/BackendPagesList";
import { createContext } from "react";
import SettingContextProvider from "./context/SettingContext";
import AuthContextProvider from "./context/AuthContext";
import { AuthForgetPassword, AuthLogin, AuthRegister } from "./pages/auth/AuthPagesList";
// import AuthRoute from "./routes/AuthRoute";
import AuthCustomerRoute from "./routes/AuthCustomerRoute";
import AuthAdminRoute from "./routes/AuthAdminRoute";

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

                    <Route path="profile" element={<AuthCustomerRoute><FrontentProfile/></AuthCustomerRoute>}>
                      <Route index element={<FrontentProfileCardList/>}/>
                      <Route path="cardlist" element={<FrontentProfileCardList/>}/>
                      <Route path="orderlist" element={<FrontentProfileOrderList/>}/>
                      <Route path="dashboard" element={<FrontentProfileDashboard/>}/>
                      <Route path="payment" element={<FrontentProfilePayment/>}/>
                      <Route path="settings" element={<FrontentProfileSettings/>}/>
                      <Route path="wishlist" element={<FrontentProfileWishList/>}/>
                      <Route path="logout" element={<FrontentProfileLogout/>}/>
                    </Route>

                    <Route path="about-us" element={<FrontentAboutUs/>}/>
                    <Route path="login" element={<AuthLogin/>}/>
                    <Route path="register" element={<AuthRegister/>}/>
                    <Route path="forget-password" element={<AuthForgetPassword/>}/>
                    <Route path="*" element={<FrontentNotFound/>}/>
                </Route>
                
                <Route path="/dashboard" element={<AuthAdminRoute><BackendLayout/></AuthAdminRoute>}>
                    <Route index element={<BackendIndex/>}/>
                    <Route path="all-blogs" element={<BackendAllBlogs/>}/>
                    <Route path="blog-category" element={<BackendBlogCategory/>}/>
                    <Route path="blog-managements" element={<BackendBlogManagements/>}/>
                    <Route path="comments" element={<BackendComments/>}/>

                    <Route path="advertise" element={<BackendAdvertise/>}/>
                    <Route path="banners" element={<BackendBanners/>}/>
                    <Route path="basic-info" element={<BackendBasicInfo/>}/>
                    <Route path="brands" element={<BackendBrands/>}/>
                    <Route path="discount-product" element={<BackendDiscountProduct/>}/>
                    <Route path="features" element={<BackendFeatures/>}/>
                    <Route path="review" element={<BackendReview/>}/>

                    <Route path="order-management" element={<BackendOrderManagement/>}/>
                    <Route path="user-management" element={<BackendUserManagement/>}/>

                    <Route path="categories" element={<BackendAllCategory/>}/>
                    <Route path="categories/create" element={<BackendCreateCategory/>}/>

                    <Route path="all-products" element={<BackendAllProducts/>}/>
                    <Route path="reporting" element={<BackendReporting/>}/>

                    

                </Route>    
            </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </SettingContextProvider>
  );
}

export default App;
