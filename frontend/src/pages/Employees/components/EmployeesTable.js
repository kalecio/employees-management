import React from 'react';
import { Link } from 'react-router-dom';

const noop = () => {};

const EmployeesTable = ({ employees, onRemoveButtonClicked = noop }) => {
  const listRows = employees.map((employee, index) => (
    <tr key={employee.id}>
      <th scope="row">{index + 1}</th>
      <td>{employee.first_name}</td>
      <td>{employee.last_name}</td>
      <td>{employee.role_id}</td>
      <td>{employee.birthday}</td>
      <td>{employee.salary}</td>
      <td>
        <Link
          className="btn btn-primary"
          style={{ marginRight: '10px' }}
          to={`/employees/edit/${employee.id}`}
        >
          {'Editar'}
        </Link>
        <button
          className="btn btn-danger"
          onClick={() => onRemoveButtonClicked(employee.id)}
        >
          {'Excluir'}
        </button>
      </td>
    </tr>
  ));

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">{'#'}</th>
          <th scope="col">{'First Name'}</th>
          <th scope="col">{'Last Name'}</th>
          <th scope="col">{'Role'}</th>
          <th scope="col">{'Birthday'}</th>
          <th scope="col">{'Salary'}</th>
          <th scope="col">{'Actions'}</th>
        </tr>
      </thead>
      <tbody>{listRows}</tbody>
    </table>
  );
};

export default EmployeesTable;
