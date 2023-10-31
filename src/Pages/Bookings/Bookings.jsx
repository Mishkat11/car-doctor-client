import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import RowBookings from "./RowBookings";
import axios from "axios";
// import { data } from "autoprefixer";


const Bookings = () => {
    const {user} = useContext(AuthContext)
    const [bookings ,setBookings]= useState([])
   

const url = `http://localhost:5000/bookings?email=${user.email}`

useEffect(()=>{

  axios.get(url,{withCredentials:true})
  .then(data => setBookings(data.data))
// fetch(url)
// .then(res=>res.json())
// .then(data => setBookings(data))
// },
},[url])


const handleDelete= id=>{
   const proceed = confirm('do you want to really delete')
   if(proceed){
    
    fetch(`http://localhost:5000/bookings/${id}`,{
        method:'DELETE'
    })
    .then(res=>res.json())
    .then(data=>{

        if(data.deletedCount>0){
            alert('deleted successfully')
        }
        const remaining = bookings.filter(booking=> booking._id !== id)
        setBookings(remaining)

    })
   }
}

const handleConfirm= id=>{
fetch(`http://localhost:5000/bookings/${id}`,{
  method:'PATCH',
  headers:{
    'content-type': 'application/json'
  },
  body:JSON.stringify({status: 'confirm'})
})
.then(res=> res.json())
.then(data=>{
  console.log(data);
  if(data.modifiedCount){
   const remaining = bookings.filter(booking=> booking._id !== id)
   const updated = bookings.find(booking => booking._id === id)
   updated.status= 'confirm'
   const newBookings = [updated, ...remaining]
   setBookings(newBookings)
  }
})
}

    return (
        <div>
            <h1 className="text-2xl text-center font-medium">Your bookings {bookings.length}</h1>

         
<div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
   

{
    bookings.map(booking => <RowBookings
         key={booking._id}
         booking={booking}
         handleDelete={handleDelete}
         handleConfirm={handleConfirm}
    
    ></RowBookings>)
   }


   
    </tbody>
 
    
  </table>
</div>
        </div>
    );
};

export default Bookings;