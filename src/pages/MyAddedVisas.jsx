import { useEffect, useState } from "react";
import Loading from "./Loading";
import MyAddedVisasCard from "../components/MyAddedvisasCard";

const MyAddedVisas = () => {
  const [visasData, setVisasData] = useState(null); // all visas data
  const [loading, setLoading] = useState(true); // handle loading
  const [error, setError] = useState(null); // handle errors message

  useEffect(() => {
    // Fetch data from the backend API
    const fetchData = async () => {
      try {
        const response = await fetch("https://visa-nav-app-server.vercel.app/visas"); //from db
        if (!response.ok) {
          throw new Error("Failed to fetch city data");
        }
        const data = await response.json();
        setVisasData(data); // Set fetched data
      } catch (err) {
        setError(err.message); // Set error message
      } finally {
        setLoading(false); // Set loading to false
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!visasData) {
    return <div>No data found </div>;
  }
  // console.log(visasData);
  return (
    <div className="grid lg:grid-cols-4 grid-cols-1 gap-4">
      {visasData.map((vData) => (
        <MyAddedVisasCard
          key={vData._id}
          vData={vData}
          setVisasData={setVisasData}
          visasData={visasData}
        />
      ))}
    </div>
  );
};

export default MyAddedVisas;
