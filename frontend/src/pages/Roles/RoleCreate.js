import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { withRouter } from 'react-router-dom';
import makeFetch from '../../utils/makeFetch';
import SERVICES from '../../services/index';

const RoleCreate = withRouter(({ history }) => {
  return (
    <>
      <Formik
        initialValues={{ description: '' }}
        validate={(values) => {
          const errors = {};
          if (!values.description) {
            errors.description = 'Required';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          makeFetch(SERVICES.ROLES, {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
            },
            body: JSON.stringify({
              description: values.description,
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
});

export default RoleCreate;
