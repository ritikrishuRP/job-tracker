import api from './api';

export const fetchJobs = async () => {
  const res = await api.get('/jobs');
  return res.data;
};

export const addJob = async (jobData) => {
  const formData = new FormData();
  for (let key in jobData) {
    formData.append(key, jobData[key]);
  }

  const res = await api.post('/jobs', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return res.data;
};