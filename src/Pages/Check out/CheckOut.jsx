import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const CheckOut = () => {
    const service = useLoaderData()
    const {user} = useContext(AuthContext)
    const {_id, title, price,img} = service

    const handleBooking = e =>{
      e.preventDefault()

      const form = e.target 
      const name = form.name.value
      const date = form.date.value
      const email = user?.email
      
      const booking ={
        customerName: name,
        date,
        email,
        image: img,
        service: title,
        service_id: _id,
        price: price
      }
      console.log(booking);
      fetch('http://localhost:5000/bookings',{
        method:'POST',
        headers:{
          'content-type': 'application/json'
        },
        body:JSON.stringify(booking)
      })
      .then(result => result.json())
      .then(data => {
        if(data.insertedId){
          return alert('booking is confirmed')
        }
      })
    }
    
    return (
        <div>
            <h1>Our services:{title} </h1>
          
      <form onSubmit={handleBooking} className="card-body">
     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
     <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="name" name="name" defaultValue={user?.displayName} placeholder="Customer name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input type="date" name="date" className="input input-bordered" required />
        
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" defaultValue={user?.email} className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Due Amount</span>
          </label>
          <input type="text" name="amount" defaultValue={price}  className="input input-bordered" required />
        
        </div>
     </div>
        <div className="form-control mt-6">
          <input className="btn btn-primary" type="submit" value="Confirm Order" />
        </div>
      </form>
    
       </div>
    );
};

export default CheckOut;