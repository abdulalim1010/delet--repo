import React from 'react';
import { useLoaderData } from 'react-router';

const Userdetails = () => {
  const user = useLoaderData();
  console.log(user);

  return (
    <div style={{ padding: '20px' }}>
      <h2>User Details</h2>
      {user ? (
        <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px' }}>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      ) : (
        <p>User not found.</p>
      )}
    </div>
  );
};

export default Userdetails;
