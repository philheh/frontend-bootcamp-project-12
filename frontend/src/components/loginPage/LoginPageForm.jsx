import React from 'react';
import { Form, Button } from 'react-bootstrap';
import InputComponent from '../InputComponent';

const fields = [
  {
    id: 1, name: 'username', type: 'text', moduleName: 'signIn', label: true,
  },
  {
    id: 2, name: 'password', type: 'password', moduleName: 'signIn', label: true, feedBack: true, isInvalid: 'faildLogin',
  },
];

const LoginPageForm = ({ formik, t }) => (
  <Form onSubmit={formik.handleSubmit} className="col-12 col-md-6 mt-3 mt-mb-0">
    <h1 className="text-center mb-4">{t('signIn.enter')}</h1>

    {fields.map(({
      name, type, moduleName, label, isInvalid, feedBack, id,
    }) => (
      <React.Fragment key={id}>
        <Form.Floating className="mb-3">
          <InputComponent
            componentName={moduleName}
            name={name}
            type={type}
            formik={formik}
            t={t}
            label={label}
            feedBack={feedBack}
            isInvalid={isInvalid}
          />
        </Form.Floating>
      </React.Fragment>
    ))}

    <Button type="submit" variant="outline-primary" className="w-100 mb-3">{t('signIn.enter')}</Button>
  </Form>
);

export default LoginPageForm;
