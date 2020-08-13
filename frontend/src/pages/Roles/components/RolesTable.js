import React from 'react';
import { Link } from 'react-router-dom';

const noop = () => {};
const RolesTable = ({ roles, onRemoveButtonClicked = noop }) => {
  const listRows = roles.map((role, index) => (
    <tr key={role.id}>
      <th scope="row">{index + 1}</th>
      <td>{role.description}</td>
      <td>
        <Link
          className="btn btn-primary"
          style={{ marginRight: '10px' }}
          to={`/roles/edit/${role.id}`}
        >
          {'Editar'}
        </Link>
        <button
          className="btn btn-danger"
          onClick={() => onRemoveButtonClicked(role.id)}
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
          <th scope="col">{'Description'}</th>
          <th scope="col">{'Actions'}</th>
        </tr>
      </thead>
      <tbody>{listRows}</tbody>
    </table>
  );
};

export default RolesTable;
