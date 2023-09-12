import React from 'react';
import { Form } from 'react-bootstrap';

const InputComponent = ({
  componentName, name, formik, t, type = 'text', isInvalid = name, label = null, feedBack = null,
}) => (
  <>
    <Form.Control
      onBlur={formik.handleBlur}
      onChange={formik.handleChange}
      isInvalid={formik.errors[isInvalid] && formik.touched[name]}
      placeholder={t(`${componentName}.${name}`)}
      name={name}
      required=""
      type={type}
      id={name}
      value={formik.values[name]}
    />
    { label ? <Form.Label htmlFor={name}>{t(`${componentName}.${name}`)}</Form.Label> : null }
    { feedBack ? <Form.Control.Feedback tooltip type="invalid">{formik.errors[isInvalid]}</Form.Control.Feedback> : null}
  </>
);

export default InputComponent;
