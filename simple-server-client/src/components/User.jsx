import React, { use, useState } from 'react';
import { Link } from 'react-router';



const User = ({ userPromise }) => {
  const initialUser=use(userPromise);
  const [users,setUser]=useState(initialUser);
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
        console.log("data after creating user in the db", data);
        if (data.insertedId) {
          Newuser._id = data.insertedId; // ✅ Add ID to the newly created user
          const newUsers = [...users, Newuser]; // ✅ Add to the list
          setUser(newUsers); // ✅ Update state
          alert('User added successfully');
          e.target.reset();
        }
    })
  }
  const handleDelteUser = (id) => {
    console.log("delete user", id);
    fetch(`http://localhost:3000/users/${id} `,
      {
        method: 'DELETE',
      }
    )
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount)
        {
          const reaminingUser = users.filter(user => user._id !== id);
          setUser(reaminingUser);
        }
      console.log("data delete",data)
    })
    
  }
  return (
    <div>
      <div>
        <h2>users{users.length} </h2>
        <form onSubmit={handleAdduser} >
          <input type="text" name="name" /> <br />
          <input type="email" name="email" />
          <br />
          <input  type="submit" value="Add User" />
        </form>
        
      </div>
      {/* show user */}
      <div>
       
        {
          users.map(user => <div key={user._id}>
            <h2>
              {user.name} {user.email}
              <Link to={`/users/${users._id}`}>Details</Link>
              <button onClick={()=>  handleDelteUser  (user._id)}>X</button>
            
            </h2>
           
          
            
          </div>)
        }
       
      </div>
      

    </div>
  );
};

export default User;