import React from "react";
import Router from "./Router";
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FixedHeader from "./components/FixedHeader";

function App() {
  return (
    <>
      <ScrollToTop />
      <AnimatePresence>
        <Header />
        <FixedHeader />
        <div className="bg-gradient-to-br from-blue-50 via-gray-100 to-gray-200">
          <Router />
        </div>
        <Footer />
      </AnimatePresence>
    </>
  );
}

export default App;
