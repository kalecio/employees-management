import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { withRouter } from 'react-router-dom';
import makeFetch from '../../utils/makeFetch';
import useFetch from '../../hooks/useFetch';
import SERVICES from '../../services/index';

const EmployeeCreate = withRouter(({ history }) => {
  const roles = useFetch(SERVICES.ROLES);

  return (
    <>
      <Formik
        initialValues={{
          first_name: '',
          last_name: '',
          role_id: '',
          birthday: '',
          salary: '',
        }}
        validate={(values) => {
          const errors = {};
          if (!values.first_name) {
            errors.first_name = 'Required';
          } else if (!values.last_name) {
            errors.last_name = 'Required';
          } else if (!values.role_id) {
            errors.role_id = 'Required';
          } else if (!values.birthday) {
            errors.birthday = 'Required';
          } else if (!values.salary) {
            errors.salary = 'Required';
          }
          return errors;
        }}
        onSubmit={(
          { first_name, last_name, role_id, birthday, salary },
          { setSubmitting },
        ) => {
          makeFetch(SERVICES.EMPLOYEES, {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
            },
            body: JSON.stringify({
              first_name,
              last_name,
              role_id,
              birthday,
              salary,
            }),
          });
          setSubmitting(false);
          alert('Funcionário criado com sucesso');
          history.push('/employees');
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="container">
              <h1 style={{ margin: '15px 0' }}>{'Crie um novo funcionário'}</h1>
              <div className="form-group">
                <label htmlFor="first_name">{'Nome'}</label>
                <Field className="form-control" type="text" name="first_name" />
                <ErrorMessage
                  style={{ color: 'red' }}
                  name="first_name"
                  component="div"
                />
              </div>
              <div className="form-group">
                <label htmlFor="last_name">{'Sobrenome'}</label>
                <Field className="form-control" type="text" name="last_name" />
                <ErrorMessage
                  style={{ color: 'red' }}
                  name="last_name"
                  component="div"
                />
              </div>
              <div className="form-group">
                <label htmlFor="role_id">{'Cargo'}</label>
                <Field
                  as="select"
                  className="form-control"
                  type="number"
                  name="role_id"
                >
                  {roles.response &&
                    roles.response.map(({ id, description }) => (
                      <option key={id} value={id}>
                        {description}
                      </option>
                    ))}
                </Field>
                <ErrorMessage
                  style={{ color: 'red' }}
                  name="role_id"
                  component="div"
                />
              </div>
              <div className="form-group">
                <label htmlFor="birthday">{'Data de nascimento'}</label>
                <Field className="form-control" type="date" name="birthday" />
                <ErrorMessage
                  style={{ color: 'red' }}
                  name="birthday"
                  component="div"
                />
              </div>
              <div className="form-group">
                <label htmlFor="salary">{'Salário'}</label>
                <Field className="form-control" type="number" name="salary" />
                <ErrorMessage
                  style={{ color: 'red' }}
                  name="salary"
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

export default EmployeeCreate;
