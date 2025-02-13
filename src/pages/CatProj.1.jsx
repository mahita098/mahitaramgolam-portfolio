import Header from "../components/Header";
import CatsApi from "../components/CatsApi";
import Footer from "../components/Footer";

export default function CatProj() {
  return (
    <div className="hero min-h-screen md:min-h-screen mt-3 mx-auto w-full flex flex-col items-center justify-center">
      <Header />
      <CatsApi />
      <Footer />
      .......................
    </div>
  );
}
