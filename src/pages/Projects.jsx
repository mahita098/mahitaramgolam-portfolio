import Header from "../components/Header";
import ProjectCards from "../components/ProjectCards";

export default function Projects() {
  return (
    <div className="hero min-h-screen mt-3 mx-auto w-full">
      <Header />
      <div className="container">
        <div className="flex justify-center md:justify-between items-center flex-col md:flex-row mx-auto max-w-7xl mt-12">
          <ProjectCards
            projlink="https://mahitaramgolam.netlify.app"
            projimage="../2ndportfolio.png"
            projtitle="Porfolio"
            projdescription="Build with only Html/Css/Js"
          />
          <ProjectCards />
          <ProjectCards />
        </div>
      </div>
    </div>
  );
}
