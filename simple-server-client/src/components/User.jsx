import React from 'react';

const User = () => {
  const handleAdduser = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const Newuser = { name, email }
    console.log(Newuser);
    //creat user
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(Newuser)
    })
      .then(res => res.json())
      .then(data => {
      console.log("data after creating user in the db",data);
    })
  }
  return (
    <div>
      <div>
        <form onSubmit={handleAdduser} >
          <input type="text" name="name" /> <br />
          <input type="email" name="email" />
          <br />
          <input  type="submit" value="Add User" />
        </form>
        
     </div>
    </div>
  );
};

export default User;