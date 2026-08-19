import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Companies from "./Components/Companies/Companies";
import Residencies from "./Components/Residencies/Residencies";
import Value from "./Components/Value/Value";
import Contact from "./Components/Contact/Contact";
import GetStarted from "./Components/Getstarted/GetStarted";
import Footer from "./Components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>

      <Routes>
        {/* Default / Home View */}
        <Route
          path="/"
          element={
            <>
              <div className="App">
                <div>
                  <div className="white-gradient" />
                  
                  <Hero />
                </div>
              </div>
              <Companies />
              <Residencies />
              <Value />
              <Contact />
              <GetStarted />
            </>
          }
        />

        {/* Dedicated Page Views */}
        <Route path="/residencies" element={<Residencies />} />
        <Route path="/value" element={<Value />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/get-started" element={<GetStarted />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;