// src/components/SignUp.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'customer', // Default role
  });
  const navigate = useNavigate(); // Updated to useNavigate

  const { name, email, password, role } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/signup', formData);
      const token = res.data.token;
      localStorage.setItem('token', token);

      // Redirect based on role
      if (role === 'customer') {
        navigate('/customer/dashboard');
      } else if (role === 'trainer') {
        navigate('/trainer/dashboard');
      } else if (role === 'admin') {
        navigate('/admin/dashboard');
      }
    } catch (err) {
      console.error(err.response?.data?.msg || 'An error occurred');
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="name" value={name} onChange={onChange} placeholder="Name" required />
      <input type="email" name="email" value={email} onChange={onChange} placeholder="Email" required />
      <input type="password" name="password" value={password} onChange={onChange} placeholder="Password" required />
      <select name="role" value={role} onChange={onChange}>
        <option value="customer">Customer</option>
        <option value="trainer">Trainer</option>
        <option value="admin">Admin</option>
      </select>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUp;
