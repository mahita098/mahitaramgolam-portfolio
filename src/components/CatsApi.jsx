import Axios from "axios";
import { useEffect, useState } from "react";

export default function CatsApi() {
  //fetch("https://catfact.ninja/fact")
  //  .then((res) => res.json())
  //  .then((data) => {
  //   console.log(data);
  // });

  const [catFact, setCatFact] = useState("");

  useEffect(() => {
    fetchCatFact();
  }, []);

  const fetchCatFact = () => {
    const apiUrl =
      process.env.NODE_ENV === "production"
        ? "/api/fetchCatFact"
        : "https://catfact.ninja/fact";

    Axios.get(apiUrl)
      .then((res) => {
        setCatFact(res.data.fact);
      })
      .catch((err) => {
        console.error("Error fetching cat fact:", err);
      });
  };

  return (
    <div className="text-center">
      <button
        className="w-48 mx-auto bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        onClick={fetchCatFact}
      >
        Generate Cat Fact
      </button>
      <p className="text-white mt-3">{catFact}</p>
    </div>
  );
}
