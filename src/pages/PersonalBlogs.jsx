import Header from "../components/Header";
import BlogCards from "../components/BlogCards";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

import { useEffect, useState } from "react";

export default function PersonalBlogs() {
  const [blogdata, setBlogData] = useState([]);
  useEffect(() => {
    fetch("/data/personalblogdata.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load blog data");
        }
        return response.json();
      })
      .then((jsonData) => setBlogData(jsonData.personalblogs))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!blogdata.length) {
    return <div>Loading...</div>; // Prevent error when data is empty
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 5 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4 }}
      className="hero min-h-screen mt-3 mx-auto w-full"
    >
      <Header />
      <div className="container mt-10 md:mt-0 mb-24 px-4 md:p-0 mx-auto">
        <div className="flex justify-center items-center flex-col  mx-auto max-w-7xl mt-10 mb-8">
          <h1 className=" font-bold text-5xl leading-tight bg-gradient-to-br bg-clip-text text-transparent from-gradient-start via-gradient-mid to-gradient-end">
            Blogs
          </h1>
          <p className=" mt-2 text-lg text-center">
            This is my little corner of the internet where I share my thoughts,
            experiences, and adventures. Whether it's travel, life moments, or
            just random musings. No rules, no niche—just me, sharing what feels
            right
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 items-center mx-auto max-w-7xl gap-2 md:mt-10">
          {blogdata.map((pblog, index) => (
            <BlogCards key={index} {...pblog} />
          ))}
        </div>
      </div>
      <Footer />
    </motion.div>
  );
}
