
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './NewContracts.css';

const NewContracts = () => {
  const [contracts] = useState([
    {
      id: 1,
      title: 'Wheat Purchase Contract',
      description: 'Pre-harvest contract for 50 tons of wheat.',
    },
    {
      id: 2,
      title: 'Rice Purchase Contract',
      description: 'Pre-harvest contract for 100 tons of rice.',
    },
    {
      id: 3,
      title: 'Maize Purchase Contract',
      description: 'Pre-harvest contract for 30 tons of maize.',
    },
  ]);

  const navigate = useNavigate();

  const handleViewDetails = (id) => {
    navigate(`/contract-details/${id}`); // Navigate to ContractDetails page with id
  };

  return (
    <div className="new-contracts">
      <h2>Available Contract Requests</h2>
      {contracts.length === 0 ? (
        <p>No new contracts available.</p>
      ) : (
        <ul>
          {contracts.map((contract) => (
            <li key={contract.id}>
              <h3>{contract.title}</h3>
              <p>{contract.description}</p>
              <button onClick={() => handleViewDetails(contract.id)}>View Details</button>
            </li>
          ))}
        </ul>
      )}
      <button 
        className="back-button" 
        onClick={() => navigate('/main')} 
      >
        Back
      </button>
    </div>
  );
};

export default NewContracts;
