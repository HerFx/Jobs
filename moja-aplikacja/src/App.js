import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import JobList from './components/JobList';
import JobDetail from './components/JobDetail';
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<JobList />} />
        <Route path="/jobs/:jobId" element={<JobDetail />} />
      </Routes>
    </Router>
  );
}

export default App;