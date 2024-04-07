import express from 'express';
import { connect } from 'mongoose';
import authRouter from './Routes/AuthRoute.js';
import details from './Routes/DetailsRouts.js';
import staffpayment from './Routes/StaffPaymentRoute.js';
import RequestSaffRoute from './Routes/RequestSaffRoute.js';
import StaffManagerRoute from './Routes/StaffManagerRoute.js';
import StaffManagerPaymentRoute from './Routes/StaffManagerPaymentRoute.js';
import StaffManagerStaffDetailsRoutes from './Routes/StaffManagerStaffDetailsRoutes.js';
import cors from 'cors';

const app = express();
app.use(cors())
app.use(express.json())

connect('mongodb://localhost:27017/FreshLeaf');

 
app.use('/server/auth',authRouter)
app.use('/server/details',details)
app.use('/server/staffpayment',staffpayment)
app.use('/server/staffRequest',RequestSaffRoute)
app.use('/server/StaffManager',StaffManagerRoute)
app.use('/server/StaffManagerPaymentRoute',StaffManagerPaymentRoute)
app.use('/server/StaffInfo',StaffManagerStaffDetailsRoutes)


app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
