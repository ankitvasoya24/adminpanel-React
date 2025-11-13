import { useState } from "react";
import { Routes, Route, Navigate, useNavigate,Link } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Users from "./pages/Users.jsx";
import Setting from "./pages/Setting.jsx";
import Registration from "./pages/Registration.jsx";
import Form from "react-bootstrap/Form";
import {ToastContainer,toast} from 'react-toastify'


function LoginPage({ onLogin }) {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
     let storedusers = JSON.parse(localStorage.getItem('userdata')) || [];

    const matchusers = storedusers.find(
      (u) => u.email === email && u.password === password
    )
    
    if (email === "admin@gmail.com" && password === "1234")
    {
        toast.success("Login Successful! Welcome Admin", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme: "colored",
      });
      localStorage.setItem("loggedinuser", JSON.stringify({ email, role: "admin" }));
      onLogin();

      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);

    } 
    else if (matchusers) {
      toast.success(`Login Successful! Welcome ${matchusers.name}`, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme: "colored",
      })
    localStorage.setItem("loggedinuser", JSON.stringify(matchusers));
    onLogin();
    setTimeout(() => {
    navigate("/dashboard");
  }, 2000);
  }
  else{
        toast.error("Invalid email or password!", {
        position: "top-center",
        autoClose: 2000,
        theme: "colored",
      });
  }
  };

  return (
    <div className="d-flex justify-content-center align-items-center mt-5">
      <div className="card shadow-lg p-5 mt-5 w-full">
        <h2 className="text-center mb-4">Login</h2>
        <span className="text-muted text-center pb-3">
          Sign in to start your session
        </span>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Your Email</label>
            <input
              className="form-control"
              type="email"
              placeholder="admin@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              className="form-control"
              type="password"
              placeholder="1234"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <Form.Check
              type="checkbox"
              label="Remember Me"
              className="fw-bold text-muted"
            />
          </div>

          <button
            type="submit"
            className="w-100 bg-primary border-0 rounded p-2 text-white">
            Login
          </button>
           <div className='mt-3'>
              <Link to='/registration' className='text-decoration-none'>
                <span className='text-muted me-3' 
                style={{cursor:'text'}}>don't have an account?</span>
                Sign up Now
             </Link>
         </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default function App() {

  const [isLogin, setIsLogin] = useState( !!localStorage.getItem("loggedinuser"));

  return (
    <Routes>
      
      <Route
        path="/" element={<LoginPage onLogin={() => setIsLogin(true)} />}
      />
      <Route path="/registration" element={<Registration />} />
      
      <Route
        element={
          isLogin ? <Layout /> : <Navigate to="/" replace />
        }>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/setting" element={<Setting />} />
      </Route>
    </Routes>
  );
}
