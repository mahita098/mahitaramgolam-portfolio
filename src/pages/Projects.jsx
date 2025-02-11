import Header from "../components/Header";
import ProjectCards from "../components/ProjectCards";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";

export default function Projects() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/data/projectdata.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load project data");
        }
        return response.json();
      })
      .then((jsonData) => setData(jsonData.projects))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!data.length) {
    return <div>Loading...</div>; // Prevent error when data is empty
  }

  return (
    <div className="hero min-h-screen mt-3 mx-auto w-full">
      <Header />
      <div className="container">
        <div className="flex justify-center items-center flex-col  mx-auto max-w-7xl mt-20 mb-8">
          <h1 className="text-white font-bold text-5xl">My Work</h1>
          <p className=" mt-2 text-lg">
            A collection of projects I've worked on.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center mx-auto max-w-7xl gap-2">
          {data.map((project, index) => (
            <ProjectCards key={index} {...project} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
