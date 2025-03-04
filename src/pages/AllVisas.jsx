import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import VisaCard from "../components/VisaCard";

const AllVisas = () => {
  const [visasData, setVisasData] = useState(null); // all visas data
  const [loading, setLoading] = useState(true); // handle loading
  const [error, setError] = useState(null); // handle errors message

  useEffect(() => {
    // Fetch data from the backend API
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/visas");
        if (!response.ok) {
          throw new Error("Failed to fetch city data");
        }
        const data = await response.json();
        setVisasData(data); // Set the fetched data
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
  console.log(visasData);
  return (
    <div className="grid lg:grid-cols-4 grid-cols-1 gap-4">
      {/* <h2>No of All Visas: {visasData.length}</h2> */}
      {visasData.map((visa) => (
        <VisaCard key={visa._id} visasData={visa} setVisasData={setVisasData} />
      ))}
    </div>
  );
};

export default AllVisas;
