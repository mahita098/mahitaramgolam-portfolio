import Header from "../components/Header";
import ProjectCards from "../components/ProjectCards";

export default function Projects() {
  return (
    <div className="hero min-h-screen mt-3 mx-auto w-full">
      <Header />
      <div className="container">
        <div className="flex justify-between mx-auto max-w-7xl">
          <ProjectCards
            projlink="https://mahitaramgolam.netlify.app"
            projimage="../2ndportfolio.png"
            projtitle="My Porfolio"
            projdescription="A framework free project "
          />
          <ProjectCards />
          <ProjectCards />
        </div>
      </div>
    </div>
  );
}
