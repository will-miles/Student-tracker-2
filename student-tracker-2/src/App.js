import React from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import { Router } from '@reach/router';
import StudentList from './components/StudentList';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Router>
        <StudentList path="/" />
        <StudentList path="/students/:type" />
        <StudentList path="/students/:type/:block" />
      </Router>
    </div>
  );
}

export default App;
