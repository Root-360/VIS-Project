import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Header from "./Components/Header";
import LocalDev from "./Components/LocalDev";
import Login from "./Components/Login";
import RegisterComponent from "./Components/Register";
import Event from "./Components/Event";
import EventDetails from "./Components/EventDetails";
import News from "./Components/News";
import NewsDetails from "./Components/NewsDetails";
import Offers from "./Components/Offers";
import OffersDetails from "./Components/OffersDetails";
import Publicauthorities from "./Components/Publicauthorities";
import PublicauthoritiesDetails from "./Components/PublicauthoritiesDetails";
import Country from "./Components/Country";
import CountryDetails from "./Components/CountryDetails";
import Asylumprocess from "./Components/Asylumprocess";
import AsylumprocessDetails from "./Components/AsylumprocessDetails";
import Footer from "./Components/Footer";
import { ToastContainer } from "react-toastify";


const App = () => {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/localdev" element={<LocalDev />} />
          <Route path="/event" element={<Event />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/asylumprocess" element={<Asylumprocess />} />
          <Route path="/country" element={<Country />} />
          <Route path="/publicauthorities" element={<Publicauthorities />} />
          <Route path="/publicauthoritiesdetails/:_id" element={<PublicauthoritiesDetails />} />
          <Route path="/offersdetails/:_id" element={<OffersDetails />} />
          <Route
            path="/asylumprocessdetails/:_id"
            element={<AsylumprocessDetails />}
          />
          <Route
            path="/countrydetails/:_id"
            element={<CountryDetails />}
          />
          <Route path="/eventdetails/:_id" element={<EventDetails />} />
          <Route path="/newsdetails/:_id" element={<NewsDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterComponent />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
