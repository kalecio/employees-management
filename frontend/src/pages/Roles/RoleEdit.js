import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { withRouter, useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import makeFetch from '../../utils/makeFetch';
import SERVICES from '../../services/index';

const RoleCreate = withRouter(({ history }) => {
  const [currentRole, setCurrentRole] = useState({
    description: '',
  });

  const { response, loading, error } = useFetch(SERVICES.ROLES);

  const { roleId } = useParams();

  useEffect(() => {
    if (response && !loading && !error) {
      const role = response.find((role) => role.id === Number(roleId));
      setCurrentRole(role);
    }
  }, [roleId, response, loading, error]);

  if (loading) {
    return <h1>{`Loading...`}</h1>;
  } else {
    return (
      <>
        <Formik
          enableReinitialize
          initialValues={currentRole}
          validate={(values) => {
            const errors = {};
            if (!values.description) {
              errors.description = 'Required';
            }
            return errors;
          }}
          onSubmit={({ description }, { setSubmitting }) => {
            makeFetch(`${SERVICES.ROLES}/${roleId}`, {
              method: 'PATCH',
              headers: {
                'content-type': 'application/json',
              },
              body: JSON.stringify({
                description,
              }),
            });
            setSubmitting(false);
            alert('Cargo criado com sucesso');
            history.push('/roles');
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="container">
                <h1 style={{ margin: '15px 0' }}>{'Create a new Role'}</h1>
                <div className="form-group">
                  <label htmlFor="description">{'Descrição'}</label>
                  <Field
                    className="form-control"
                    type="text"
                    name="description"
                  />
                  <ErrorMessage
                    style={{ color: 'red' }}
                    name="description"
                    component="div"
                  />
                </div>
                <button
                  className="btn btn-primary mt-2"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {'Submit'}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </>
    );
  }
});

export default RoleCreate;
