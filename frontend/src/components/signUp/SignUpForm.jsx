import React from 'react';
import { Form, Button } from 'react-bootstrap';
import InputComponent from '../InputComponent';

const fields = [
  {
    id: 1, name: 'username', type: 'text', moduleName: 'signUp', label: true, feedBack: true,
  },
  {
    id: 2, name: 'password', type: 'password', moduleName: 'signUp', label: true, feedBack: true,
  },
  {
    id: 3, name: 'confirmPassword', type: 'password', moduleName: 'signUp', label: true, feedBack: true,
  },
];

const SignUpForm = ({ formik, t }) => (
  <Form className="w-50" onSubmit={formik.handleSubmit}>
    <h1 className="text-center mb-4">{t('signUp.title')}</h1>
    {fields.map(({
      name, type, moduleName, id, label, feedBack,
    }) => (
      <React.Fragment key={id}>
        <Form.Floating className="mb-3">
          <InputComponent
            key={id}
            componentName={moduleName}
            name={name}
            type={type}
            formik={formik}
            t={t}
            label={label}
            feedBack={feedBack}
          />
        </Form.Floating>
      </React.Fragment>
    ))}
    <Button type="submit" variant="outline-primary" className="w-100">{t('signUp.button')}</Button>
  </Form>
);

export default SignUpForm;
