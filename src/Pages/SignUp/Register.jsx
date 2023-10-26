import { Link } from 'react-router-dom';
import login from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
const Register = () => {
    const {createUser} = useContext(AuthContext)
    const handleRegister = e=>{
        e.preventDefault()

        
        const form = e.target 
const name = form.name.value
        const email = form.email.value 
        const password = form.password.value 
        console.log(email,password,name);

        createUser(email,password)
        .then(result=>{
const user = result.user
console.log(user);
        })
        .catch(error=> console.log(error))
    }
    return (
        <div>
             <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className=" w-1/2 mr-5">
      
   <img src={login} alt="" />
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <h1 className="text-5xl font-bold text-center">Sign Up !</h1>
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="name" name='name'  placeholder="Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email"  placeholder="email" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
        <input className="btn btn-primary" type="submit" value="Login" />
        </div>
        <Link to={'/login'} className='text-blue-700 underline'>Have an account login</Link>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;