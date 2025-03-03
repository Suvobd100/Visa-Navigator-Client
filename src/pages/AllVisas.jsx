import React, { useEffect, useState } from 'react'
import Loading from './Loading';

const AllVisas = () => {

  
  const [visasData, setVisasData] = useState(null); // all visas data
  const [loading, setLoading] = useState(true); // handle loading
  const [error, setError] = useState(null); // handle errors message

  useEffect(() => {
    // Fetch data from the backend API
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/visas');
        if (!response.ok) {
          throw new Error('Failed to fetch city data');
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
    return <div><Loading/></div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!visasData) {
    return <div>No data found </div>;
  }




  return (
    <div>No of All Visas: {visasData.length}  </div>
  )
}

export default AllVisas