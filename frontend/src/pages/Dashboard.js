import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { fetchJobs } from '../services/jobService';
import JobCard from '../components/JobCard';
import Loader from '../components/Loader';

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getJobs = async () => {
      try {
        const data = await fetchJobs();
        setJobs(data);
      } catch (err) {
        console.error('Failed to fetch jobs', err);
      } finally {
        setLoading(false);
      }
    };
    getJobs();
  }, []);

  return (
    <div className="px-6 py-10 max-w-6xl mx-auto">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold text-blue-700">Welcome, {user?.name || 'Guest'} 👋</h1>
        <p className="text-gray-600 mt-2 text-lg">Track your job applications with ease</p>
      </div>

      {loading ? (
        <Loader />
      ) : jobs.length ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      ) : (
        <div className="text-center mt-12">
          <p className="text-gray-500 text-lg">No job applications found. Start adding some!</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
