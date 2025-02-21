import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BlogArticleHeader from "../../components/BlogArticleHeader";

const Tamassa = () => {
  return (
    <div className="hero min-h-screen md:min-h-screen mt-3 mx-auto w-full flex flex-col items-center justify-center">
      <Header />
      <div className="text-center mx-5 hero-content w-full flex flex-1 flex-col lg:flex-col">
        <BlogArticleHeader
          title="Tamassa Resort at Bel-Ombre Mauritius"
          subtitle="A Refreshing Break: My 3-Day Stay at TAMASSA Hotel 🌴"
          moredescription="An All-inclusive package"
          date="17 Dec 2024"
          readtime="5 mins"
        />
      </div>

      <Footer />
    </div>
  );
};

export default Tamassa;
