import React from 'react';
import {Link, useNavigate} from 'react-router-dom'

const Friend=(props)=>{

   let navigate = useNavigate();
const handleClick=(friendId)=>{

  const url =`/friend/${friendId}`
  navigate(url);
}

const {name, email, id}= props.friend;
const friendStyle={
    border:'2px solid purple',
    margin:'20px',
    padding:'20px',
    borderRadius:'20px'
}
    return (
        <div style={friendStyle}>
            
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <p>Id: <Link to={`/friend/${id}`}>Show details of {id}</Link></p>
            <button onClick={()=>handleClick(id)}>Click Me</button>

        </div>
    )

}

export default Friend;