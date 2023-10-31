import { Link, useLocation, useNavigate } from 'react-router-dom';
import login from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import axios from 'axios';
const Login = () => {
  const {signIn}= useContext(AuthContext)
  const location = useLocation()
  const navigate = useNavigate()
     const handleLogin = e =>{
        e.preventDefault()

        const form = e.target 

        const email = form.email.value 
        const password = form.password.value 
        // console.log(email,password);
signIn(email,password)
.then(result=>{
  const loggedInUser = result.user
  console.log(loggedInUser);
  const user = {email}

// navigate(location?.state ? location?.state : '/') 
axios.post('http://localhost:5000/jwt', user,{withCredentials: true})
.then(res =>{
  if(res.data.success){
    navigate(location?.state ? location?.state : '/') 
  }
})
})




.catch(error=> console.error(error))
     }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className=" w-1/2 mr-5">
      
   <img src={login} alt="" />
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <h1 className="text-5xl font-bold text-center">Login !</h1>
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email'  placeholder="email" className="input input-bordered" required />
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
  <Link to={'/register'} className='text-blue-700 underline'>New here Register</Link>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;