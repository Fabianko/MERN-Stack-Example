import React from 'react';
import './App.css';
import '../node_modules/bootswatch/dist/superhero/bootstrap.min.css'
import CreateEmployee from './components/CreateEmployee.js';
import ListEmployees from './components/ListEmployees.js';

function App() {
  return (
    <div className="row">
      <div className="col-md-4">
        <CreateEmployee/>
      </div>
      <div className="col-md-8">
        <ListEmployees/>
      </div>
    </div>
  );
}

export default App;
