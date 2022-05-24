import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from '../pages/HomePage'
import ListTripsPage from '../pages/ListTripsPage'
import AplicationFormPage from '../pages/ApplicationFormPage'
import AdminHomePage from '../pages/AdminHomePage'
import LoginPage from '../pages/LoginPage'
import CreateTripPage from '../pages/CreateTripPage'
import TripdetailPage from '../pages/TripDetailsPage'
const Router=()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage/> }/>
                <Route path="ListTrips" element={<ListTripsPage/>}/>
                <Route path="appform" element={<AplicationFormPage/>}/>
                <Route path="login" element={<LoginPage/>}/>
                <Route path="admhome" element={<AdminHomePage/>}/>
                <Route path="createtrip" element={<CreateTripPage/>}/>
                <Route path="tripdetail" element={<TripdetailPage/>}/>

            </Routes>
        </BrowserRouter>
    )
}
export default Router