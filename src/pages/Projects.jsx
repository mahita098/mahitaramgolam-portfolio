import Header from "../components/Header";
import ProjectCards from "../components/ProjectCards";
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
        <p className="flex justify-center md:justify-between items-center flex-col md:flex-row mx-auto max-w-7xl mt-12">
          Page still in progress
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center mx-auto max-w-7xl gap-2">
          {data.map((project, index) => (
            <ProjectCards key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}
