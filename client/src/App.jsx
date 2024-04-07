import './App.css'
import Home from './page/Home'
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Register from './page/Register'
import Login from './page/Login'
import SupplierAccount from './page/SupplierAccount'
import ShipmentAccount from './page/ShipmentAccount'
import MarketingAccout from './page/MarketingAccout'

import StaffManagerAccount from './page/StaffManagerAccount'
import StaffManagerDteailsUpdate from './page/SubStaffManager/StaffManagerDteailsUpdate.jsx'
import PaymentInforStaffMan from './page/SubStaffManager/PaymentforStaffMan'
import StaffManagerPaymentUpdate from './page/SubStaffManager/StaffManagerPaymentUpdate.jsx'
import AllStaffGet from './page/SubStaffManager/AllStaffGet'
import AllStaffCreate from './page/SubStaffManager/AllStaffCreate.jsx'
import AllStaffUpdatePage from './page/SubStaffManager/AllStaffUpdatePage.jsx'
import Responce from './page/SubStaffManager/Responce'

import StaffAccount from './page/StaffAccount'
import PaymentInforStaff from './page/SubStaffPage/PaymentInforStaff'
import PaymentInforStaffUpdate from './page/SubStaffPage/PaymentUpdateStaff.jsx'
import Request from './page/SubStaffPage/Request'
import StaffUpdate from'./page/SubStaffPage/StaffUpdate.jsx'

import UserAccount from './page/UserAccount'
import Contact from './page/Contact'
import About from './page/About'
import OwnerPage from './page/OwnerPage'
import Feedback from './page/Feedback.jsx'
import PaymentInfo from './page/PaymentInfo.jsx'
import ProductDetails from './page/ProductDetails.jsx'
import UserInfo from './page/UserInfo.jsx'



function App() {

  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/Contact' element={<Contact/>}/>
    <Route path='/supplierAccount' element={<SupplierAccount/>}/>
    <Route path='/shipmentAccount' element={<ShipmentAccount/>}/>
    <Route path='/marketingAccount' element={<MarketingAccout/>}/>

    <Route path='/staffManagerAccount' element={<StaffManagerAccount/>}/>
    <Route path='/StaffManagerDteailsUpdate/:id' element={<StaffManagerDteailsUpdate/>}/>
    <Route path='/PaymentInforStaffMan' element={<PaymentInforStaffMan/>}/>
    <Route path='/StaffManagerPaymentUpdate/:id' element={<StaffManagerPaymentUpdate/>}/>
    <Route path='/AllStaffGet' element={<AllStaffGet/>}/>
    <Route path='/AllStaffCreate' element={<AllStaffCreate/>}/>
    <Route path='/AllStaffUpdatePage/:id' element={<AllStaffUpdatePage/>}/>
    <Route path='/Responce' element={<Responce/>}/>

    <Route path='/staffAccount' element={<StaffAccount/>}/>
    <Route path='/PaymentInforStaff' element={<PaymentInforStaff/>}/>
    <Route path='/staffpaymentupdate/:id' element={<PaymentInforStaffUpdate/>}/>
    <Route path='/request' element={<Request/>}/>
    <Route path='/staffupdate/:id' element={<StaffUpdate/>}/>
   
    <Route path='/feedback' element={<Feedback/>}/>
    <Route path='/paymentinfo' element={<PaymentInfo/>}/>
    <Route path='/productdetails' element={<ProductDetails/>}/>
    <Route path='/userinfo' element={<UserInfo/>}/>


    <Route path='/userAccount' element={<UserAccount/>}/>
    <Route path='/OwnerPage' element={<OwnerPage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
