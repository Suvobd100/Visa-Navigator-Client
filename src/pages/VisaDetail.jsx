import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loading from "./Loading";
import SingleVisaCard from "./SingleVisaCard";

const VisaDetail = () => {
    const { id } = useParams();
    const [visasData, setVisasData] = useState(null); // all visas data
    const [loading, setLoading] = useState(true); // handle loading
    const [error, setError] = useState(null); // handle errors message
    const [visa, setVisa] = useState(null); // specific visa data
  
    useEffect(() => {
      // Fetch data from the backend API
      const fetchData = async () => {
        try {
          const response = await fetch("https://visa-nav-app-server.vercel.app/visas");
          if (!response.ok) {
            throw new Error("Failed to fetch visa data");
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
  
    useEffect(() => {
      if (visasData && id) {
        const foundVisa = visasData.find((visa) => visa._id === id);
        setVisa(foundVisa);
      }
    }, [visasData, id]);
 
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
  
    if (!visa) {
      return <div>No visa data found for the given ID</div>;
    }
    // console.log('1 visa data:---',visa);  
  return (
    // <div>VisaDetail: {email}</div>
    <div>
        <h4>VisaDetail: {id}</h4>
        
        {visa && <SingleVisaCard visa={visa} />}
   
        
    </div>
  );
};

export default VisaDetail;
