import { React, useEffect } from 'react';
import { Image } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/AuthHook';

const NotFoundPage = () => {
  const auth = useAuth();
  const { t } = useTranslation();
  useEffect(() => {
    (() => {
      if (auth.checkToken()) {
        auth.logIn();
      }
    })();
  }, [auth]);
  return (
    <div className="text-center">
      <Image
        alt={t('notFoundPage.title1')}
        className="img-fluid h-25"
        src="notfoundimg.svg"
      />
      <h1 className="h4 text-muted">{t('notFoundPage.title1')}</h1>
      <p className="text-muted">
        {t('notFoundPage.title2')}
&nbsp;
        <Link to="/">{t('notFoundPage.toRegister')}</Link>
      </p>
    </div>
  );
};
export default NotFoundPage;
