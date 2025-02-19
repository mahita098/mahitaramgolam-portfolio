import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Tamassa = () => {
  return (
    <div className="hero min-h-screen md:min-h-screen mt-3 mx-auto w-full flex flex-col items-center justify-center">
      <Header />
      <div className="text-center mx-5 hero-content w-full flex flex-1 flex-col lg:flex-col">
        <p>Tamassa blog in progress</p>
      </div>

      <Footer />
    </div>
  );
};

export default Tamassa;
