import React, { useState } from 'react';
import { addJob } from '../services/jobService';
import { useNavigate } from 'react-router-dom';

const JobForm = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    companyName: '',
    jobTitle: '',
    applicationDate: '',
    status: '',
    notes: '',
    resume: null,
    coverLetter: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setForm((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addJob(form);
      navigate('/dashboard');
    } catch (err) {
      console.error('Error submitting job', err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100 px-4 py-10">
      <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">Log New Job Application</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
            <input
              name="companyName"
              placeholder="Company Name"
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
            <input
              name="jobTitle"
              placeholder="Job Title"
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Application Date</label>
            <input
              name="applicationDate"
              type="date"
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
            <select
              name="status"
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="">Select Status</option>
              <option value="applied">Applied</option>
              <option value="interviewed">Interviewed</option>
              <option value="offered">Offered</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
            <textarea
              name="notes"
              placeholder="Any notes about the application"
              rows="4"
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Resume</label>
            <input
              type="file"
              name="resume"
              accept=".pdf,.doc,.docx"
              onChange={handleChange}
              className="block w-full text-sm text-gray-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Cover Letter</label>
            <input
              type="file"
              name="coverLetter"
              accept=".pdf,.doc,.docx"
              onChange={handleChange}
              className="block w-full text-sm text-gray-600"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium py-3 rounded-lg transition duration-200"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobForm;
