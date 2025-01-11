import Header from "../components/Header";
import CatsApi from "../components/CatsApi";

export default function CatProj() {
  return (
    <div className="hero min-h-screen mt-3 mx-auto w-full">
      <Header />
      <CatsApi />
    </div>
  );
}
