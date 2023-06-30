import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import JobList from "./components/JobList";
import CreateCompeny from "./components/CreateCompeny";
import CreateJob from "./components/CreateJob";
import CreateResume from "./components/CreateResume";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <br />
        <Route path='/' exact component={JobList} />
        <Route path='/jobs' component={CreateJob} />
        <Route path='/companies' component={CreateCompeny} />
        <Route path='/resume' component={CreateResume} />
      </Router>
    </div>
  );
}

export default App;
