import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const EmployeeEdit = () => (
  <div>
    <h1>Any place in your app!</h1>
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
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className="container">
            <div className="form-group">
              <label htmlFor="first_name">Nome</label>
              <Field className="form-control" type="text" name="first_name" />
              <ErrorMessage
                style={{ color: 'red' }}
                name="first_name"
                component="div"
              />
            </div>
            <div className="form-group">
              <label htmlFor="last_name">Sobrenome</label>
              <Field className="form-control" type="text" name="last_name" />
              <ErrorMessage
                style={{ color: 'red' }}
                name="last_name"
                component="div"
              />
            </div>
            <div className="form-group">
              <label htmlFor="role_id">Cargo</label>
              <Field className="form-control" type="text" name="role_id" />
              <ErrorMessage
                style={{ color: 'red' }}
                name="role_id"
                component="div"
              />
            </div>
            <div className="form-group">
              <label htmlFor="birthday">Data de nascimento</label>
              <Field className="form-control" type="text" name="birthday" />
              <ErrorMessage
                style={{ color: 'red' }}
                name="birthday"
                component="div"
              />
            </div>
            <div className="form-group">
              <label htmlFor="salary">Salário</label>
              <Field className="form-control" type="text" name="salary" />
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
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  </div>
);

export default EmployeeEdit;
