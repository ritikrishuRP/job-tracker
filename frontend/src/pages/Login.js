import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError('');
      await login(credentials);
      navigate('/');
    } catch (err) {
      setError('Invalid email or password.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">Login to Your Account</h2>
        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={e => setCredentials({ ...credentials, email: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={e => setCredentials({ ...credentials, password: e.target.value })}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-md shadow transition duration-200"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          Don’t have an account? <a href="/register" className="text-blue-600 hover:underline">Register</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
