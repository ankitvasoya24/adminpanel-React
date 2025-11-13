import React, { useEffect } from 'react'
import { useState } from 'react'
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import {ToastContainer,toast} from 'react-toastify'

const Registration = () => {
    const [formData, setFormData] = useState({
        name : '',
        email : '',
        password : '',
        confirmpassword:'',
        role : "",
    })
    
    const [savedUsers, setSavedUsers] = useState([]);

    const [error,Seterror] = useState('');

    useEffect(()=>{
        const storeuser = JSON.parse(localStorage.getItem('userdata'));
        if(storeuser){
            setSavedUsers(storeuser);
        }
        else
        {
            const defaultuser = [
            {
                name: "admin",
                email: "admin@gmail.com",
                password: "admin123",
                role: "admin"
            }];
        
            setSavedUsers(defaultuser);
            localStorage.setItem("userdata",JSON.stringify(defaultuser));
        }
    },[]);

    const handleclick = (e) => {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    };

    const handleSubmit = (e) => {

        e.preventDefault();

        if(formData.password !== formData.confirmpassword)
        {
            // Seterror('password do not match');
            toast.error('password do not match!',{
                position:'top-right'
            });
            return;
        }
        Seterror('');

        // const savedUsers = JSON.parse(localStorage.getItem("userdata")) || [];
        //saved a new user
        const addUser = [...savedUsers, formData];
        setSavedUsers(addUser);

        //save in localStorage
        localStorage.setItem('userdata',JSON.stringify(addUser));

         toast.success('Registration Successful 🎉',{
            position:'top-center',
        })

        //reset form data
        setFormData({name: '', email: '', password: '',confirmpassword: '', role: ''})
    }

    return (
    <div className='d-flex justify-content-center align-items-center'>
        <div className='card shadow-lg p-5 mt-3 w-full'>
            <h2 className='text-center mb-4'>Create an account</h2>
            
        <form onSubmit={handleSubmit}>
            <div className='mb-3'>
                <input className='form-control' value={formData.name} onChange={handleclick} type='text' name='name' placeholder='Enter Full Name' required />
            </div>
            
            <div className='mb-3'>
                <input className='form-control' value={formData.email} onChange={handleclick} type='email'name='email' placeholder='Enter Your Email' required />
            </div>

            <div className='mb-3'>
                <input className='form-control' value={formData.password} onChange={handleclick} type='password' name='password' placeholder='Enter Your Password' required />
            </div>
            
            <div className='mb-3'>
                <input className='form-control' value={formData.confirmpassword} onChange={handleclick} name='confirmpassword' type='password' placeholder='Confirm Password' required />
            </div>
            
            {error && <p className='text-danger'>{error}</p>}

            <div className='mb-3'>
                {/* <label className='form-label'>Role : </label>  */}
                <select className='form-select' name='role' value={formData.role} onChange={handleclick}>
                    <option value='' disabled>Select role</option>
                    <option value="User">User</option>
                    <option value="Admin">Admin</option>
                </select>
            </div>
             <div className='mb-3'>
                <Form.Check  type="checkbox" label="I agree to the terms"  className="fw-bold text-muted" required/>
            </div>
            <button type='submit' className='w-100 bg-primary rounded p-2 border-0 text-white'>Register</button>
            <div className='mt-3'>
             <Link to="/" className='text-decoration-none' ><span className='text-muted me-2' 
             style={{cursor:'text'}}>Already have an account?</span>
             Log in</Link>

        
            </div>
           
        </form>
        </div>
        <ToastContainer/>
    </div>
  )
}

export default Registration