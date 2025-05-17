import React from 'react';

const JobCard = ({ job }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300 border border-gray-200">
      <h3 className="text-xl font-semibold text-blue-700 mb-2">{job.jobTitle}</h3>
      <p className="text-gray-600 mb-1">
        <span className="font-medium text-gray-800">Company:</span> {job.companyName}
      </p>
      <p className="text-gray-600 mb-1">
        <span className="font-medium text-gray-800">Applied On:</span>{' '}
        {new Date(job.applicationDate).toLocaleDateString()}
      </p>
      <p className="text-sm font-semibold mt-2 px-3 py-1 inline-block rounded-full bg-blue-100 text-blue-800">
        Status: {job.status}
      </p>
      {job.notes && (
        <p className="text-gray-500 mt-3 text-sm">
          <span className="font-medium">Notes:</span> {job.notes}
        </p>
      )}
    </div>
  );
};

export default JobCard;
