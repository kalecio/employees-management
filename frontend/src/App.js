import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Employees from './pages/Employees/index';
import Roles from './pages/Roles/index';
import Index from './pages/index';
import EmployeeCreate from './pages/Employees/EmployeeCreate';
import EmployeeEdit from './pages/Employees/EmployeeEdit';
import RoleCreate from './pages/Roles/RoleCreate';
import RoleEdit from './pages/Roles/RoleEdit';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/employees/create">
          <EmployeeCreate />
        </Route>
        <Route path="/employees/edit/:employeeId">
          <EmployeeEdit />
        </Route>
        <Route path="/roles/create">
          <RoleCreate />
        </Route>
        <Route path="/roles/edit/:roleId">
          <RoleEdit />
        </Route>
        <Route path="/employees">
          <Employees />
        </Route>
        <Route path="/roles">
          <Roles type={'form'} />
        </Route>
        <Route path="/">
          <Index />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
