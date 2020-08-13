import React, { useState, useEffect } from 'react';
import useFetch from '../../hooks/useFetch';
import SERVICES from '../../services/index';
import EmployeesTable from './components/EmployeesTable';
import { Link } from 'react-router-dom';
import makeFetch from '../../utils/makeFetch';

const Employees = () => {
  const [employees, setEmployees] = useState([]);
  const { response, loading, error } = useFetch(SERVICES.EMPLOYEES);

  useEffect(() => {
    setEmployees(response);
  }, [response]);

  const handleRemove = (id) => {
    const employeeFiltered = employees.filter((item) => item.id !== id);
    try {
      makeFetch(`${SERVICES.EMPLOYEES}/${id}`, { method: 'DELETE' });
      setEmployees(employeeFiltered);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  if (loading) {
    return <h1>loading ...</h1>;
  } else if (error) {
    return <h1>{'error'}</h1>;
  } else if (!employees.length && !loading) {
    return (
      <>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: '15px',
          }}
        >
          <h2>Empregados</h2>
          <Link className="btn btn-success" to="/employees/create">
            {'Adicionar'}
          </Link>
        </div>
        <h1>{'Não existem empregados cadastrados no sistema!'}</h1>
      </>
    );
  } else {
    return (
      <>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: '15px',
          }}
        >
          <h2>Empregados</h2>
          <Link className="btn btn-success" to="/employees/create">
            {'Adicionar'}
          </Link>
        </div>
        <EmployeesTable
          employees={employees}
          onRemoveButtonClicked={(id) => handleRemove(id)}
        />
      </>
    );
  }
};

export default Employees;
