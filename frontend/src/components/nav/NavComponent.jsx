import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { AuthButton } from '../../providers/AuthProvider';
import routes from '../../routes/routes';

const NavComponent = () => {
  const { t } = useTranslation();
  return (
    <Navbar expand="lg" bg="white" className="shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to={routes.mainPage()}>{t('mainTitle')}</Navbar.Brand>
        <Nav className="mr-auto" />
        <AuthButton />
      </Container>
    </Navbar>
  );
};

export default NavComponent;
