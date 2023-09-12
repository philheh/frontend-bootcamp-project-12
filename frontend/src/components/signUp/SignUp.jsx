import React from 'react';
import { useFormik } from 'formik';
import {
  Card, Col, Container, Image, Row,
} from 'react-bootstrap';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import getScheme from '../../validationSchemes';
import useAuth from '../../hooks/AuthHook';
import SignUpForm from './SignUpForm';
import routes from '../../routes/routes';
import toastConfig from '../../toastConfig';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const auth = useAuth();
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: getScheme.signUp(Yup, t),
    onSubmit: async (values) => {
      try {
        const { username, password } = values;
        const r = await axios.post(routes.signUp(), { username, password });
        auth.setToken(r.data);
        auth.logIn();
        navigate(routes.mainPage(), { replace: true });
      } catch (err) {
        if (err.response.status === 409) {
          formik.errors.confirmPassword = t('signUp.errors.alreadyExist');
        }
        toast.error(formik.errors.confirmPassword, toastConfig);
      }
    },
  });
  return <RenderSignUp formik={formik} t={t} />;
};

const RenderSignUp = ({ formik, t }) => (
  <Container fluid className="h-100">
    <Row className="justify-content-center align-content-center h-100">
      <Col xs={12} md={8} xxl={6}>
        <Card className="shadow-sm">
          <Card.Body className="d-flex flex-column flex-md-row justify-content-around align-items-center p-5">
            <div>
              <Image src="signupimg.jpg" roundedCircle alt={t('signUp.title')} />
            </div>
            <SignUpForm formik={formik} t={t} />
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default SignUp;
