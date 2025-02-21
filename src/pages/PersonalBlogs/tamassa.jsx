import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BlogArticleHeader from "../../components/BlogArticleHeader";

const Tamassa = () => {
  return (
    <div className="hero min-h-screen md:min-h-screen mt-3 mx-auto  w-full flex flex-col items-center justify-center">
      <Header />
      <div className="container mt-28  px-4 md:p-0 mx-auto max-w-5xl ">
        <div className="mb-16">
          <BlogArticleHeader
            title="Tamassa Resort at Bel-Ombre Mauritius"
            subtitle="A Refreshing Break: My 3-Day Stay at TAMASSA Hotel 🌴"
            moredescription="All-inclusive package"
            date="17 Dec 2024"
            readtime="5 mins"
          />
        </div>

        <div className=" mb-20 bg-[#0e1419] p-10">
          <img src="../images/tamassa.jpg" alt="" />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Tamassa;
