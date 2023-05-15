import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data';
import {useState, useEffect} from 'react';


function JobList() {
  const [jobs, setJobs] = useState(data);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchCompany, setSearchCompany] = useState('');
  const [searchLocation, setSearchLocation] = useState('');

  const onChange = (e) => {
    setSearchTerm(e.target.value);
    setSearchCompany(e.target.value);
    setSearchLocation(e.target.value);
  };

  const search = (e) => {
    setJobs(
      jobs.filter((job) => job.title.toLowerCase().includes(searchTerm) || job.company.toLowerCase().includes(searchCompany) || job.location.toLowerCase().includes(searchLocation))
    );
      e.preventDefault();
  };

  useEffect(() => {
    setJobs(data);
  }, []);

  const mystyle = {
    backgroundImage: "url(/images/background.png)",
  };

  
  return (
    <>
    <div className='header'>
      <form className='search' style={mystyle} onSubmit={search}>
        <input type='text' placeholder='Search...' onChange={onChange} />
        <button className='searchBtn' onClick={search}>Search</button>
      </form>
    </div>
    <div className='main'>
    <div className='filter'>
      <h1>Filter</h1>
      <div className='filterBox'>
        <h3>Job title</h3>
        <input type='text' placeholder='Search...' onChange={onChange} />
      </div>
      <div className='filterBox'>
        <h3>Company</h3>
        <input type='text' placeholder='Search...' onChange={onChange} />
      </div>
      <div className='filterBox'>
        <h3>Location</h3>
        <input type='text' placeholder='Search...' onChange={onChange} />
      </div>
      </div>
      
    <div className='jobsBox'>
        {jobs.map((job) => (
          <Link to={`/jobs/${job.title}`}>
          <div key={job.id} className='job'> 
          <div className='img'>
            <div className='box'></div>
          </div>
          <div className='info'>
            <h3>{job.company}</h3>
            <h1>{job.title}</h1>
            <button>{job.etat}</button>
          </div>
          <div className='info-dest'>
          <h4>{job.location}</h4>
          <h4>{job.time}</h4>
          </div>
          </div>
          </Link>
        ))}
    </div>
    </div>
    </>
  );
}

export default JobList;
