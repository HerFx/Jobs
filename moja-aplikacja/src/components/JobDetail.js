import React from 'react';
import { useParams } from 'react-router-dom';
import jobs from '../data';

function JobDetail() {
  const { jobId } = useParams();
  const job = jobs.find((job) => job.title === jobId);

  if (!job) {
    return <div>Job not found</div>;
  }

  return (
    <div>
      <h2>{job.title}</h2>
      <p>{job.etat}</p>
    </div>
  );
}

export default JobDetail;
