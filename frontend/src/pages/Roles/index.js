import React, { useState, useEffect } from 'react';
import useFetch from '../../hooks/useFetch';
import SERVICES from '../../services/index';
import RolesTable from './components/RolesTable';
import { Link } from 'react-router-dom';
import makeFetch from '../../utils/makeFetch';

const Roles = () => {
  const [roles, setRoles] = useState([]);

  const { response, loading, error } = useFetch(SERVICES.ROLES);

  useEffect(() => {
    setRoles(response);
  }, [response]);

  const handleRemove = (id) => {
    const roleFiltered = roles.filter((item) => item.id !== id);

    try {
      makeFetch(`${SERVICES.ROLES}/${id}`, { method: 'DELETE' });
      setRoles(roleFiltered);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  if (loading) {
    return <h1>{'Loading...'}</h1>;
  } else if (error) {
    return <h1>{'error'}</h1>;
  } else if (!roles.length && !loading) {
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
          <h2>{'Cargos'}</h2>
          <Link className="btn btn-success" to="/roles/create">
            {'Adicionar'}
          </Link>
        </div>
        <h1>{'Não existem cargos cadastrados no sistema!'}</h1>
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
          <h2>{'Cargos'}</h2>
          <Link className="btn btn-success" to="/roles/create">
            {'Adicionar'}
          </Link>
        </div>
        <RolesTable roles={roles} onRemoveButtonClicked={handleRemove} />
      </>
    );
  }
};

export default Roles;
