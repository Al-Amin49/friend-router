import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'

const FriendDetail=(props)=>{
 const {friendId} = useParams();
const [friend, setFriend] = useState({})

useEffect(()=>{
const url =`https://jsonplaceholder.typicode.com/users/${friendId}`
fetch(url)
.then(res=>res.json())
.then(data=>setFriend(data))
},[])
 
    return (
        <div>
      <p>This is friend detail: {friendId}</p>
      <h3>Name: {friend.name}</h3>
      <p>Email: {friend.email}</p>
      <p>Phone: {friend.phone}</p>
      <p>Website: {friend.website}</p>
        </div>
    )
}
export default FriendDetail;