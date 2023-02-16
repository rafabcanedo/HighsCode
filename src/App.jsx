import React from "react"

import Home from "./Pages/Home";
import About from "./Pages/About";
import Community from "./Pages/community";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
 return (
  <>
  <Navbar />
  <Home />
  <About />
  <Community />
  <Footer />
  </>
  )
}

export default App;
