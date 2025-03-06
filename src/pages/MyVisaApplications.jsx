import React, { useContext, useEffect, useState } from 'react';
import Loading from './Loading';
import { AuthContext } from '../provider/AuthProvider';
import VisaApplicationCard from '../components/VisaApplicationCard';

const MyVisaApplications = () => {
  const [visasData, setVisasData] = useState(null); // all visas data
  const [filteredVisas, setFilteredVisas] = useState([]); // filtered visas data
  const [loading, setLoading] = useState(true); // handle loading
  const [error, setError] = useState(null); // handle errors message

  const { user } = useContext(AuthContext);

  useEffect(() => {
    // Fetch data from the backend API
    const fetchData = async () => {
      try {
        const response = await fetch("https://visa-nav-app-server.vercel.app/visas"); // from db 
        if (!response.ok) {
          throw new Error("Failed to fetch visa data");
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

  useEffect(() => {
    if (visasData && user) {
      // Filter visas data by user email
      const filtered = visasData.filter(visa => visa.email === user.email);
      setFilteredVisas(filtered);
    }
  }, [visasData, user]);

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
    return <div>No data found</div>;
  }

  return (
    <div>
      {/* <h4>My Visa Applications: {filteredVisas.length}</h4>
      <p>Logged user is: {user.email}</p> */}
      <div className="lg:flex gap-4 justify-center items-center">
        {filteredVisas.map((visa) => (
          // <li key={index}>
          //   <p>Visa ID: {visa._id}</p>
          //   <p>Status: {visa.name}</p>
          //   <p>Visa Type: {visa.visaType}</p>
          //   <p>Application Date: {visa.createAt}</p>
          //   {/* Add more visa details as needed */}
          // </li>
          <VisaApplicationCard 
          key={visa.id}
          visa={visa}
          filteredVisas={filteredVisas}
          setFilteredVisas={setFilteredVisas}
          
          />
        ))}
      </div>
    </div>
  );
};

export default MyVisaApplications;