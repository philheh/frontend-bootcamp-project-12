import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import LoginPage from './loginPage/LoginPage';
import NotFoundPage from './NotFoundPage';
import MainChatPage from './MainChatPage';
import SignUp from './signUp/SignUp';
import { PrivateRoute } from '../providers/AuthProvider';
import NavComponent from './nav/NavComponent';
import '../style.css';
import routes from '../routes/routes';

const App = () => (
  <div className="d-flex flex-column h-100">
    <Router>
      <NavComponent />
      <Routes>
        <Route path={routes.notFoundPage()} element={<NotFoundPage />} />
        <Route
          path={routes.mainPage()}
          element={(<PrivateRoute><MainChatPage /></PrivateRoute>)}
        />
        <Route path={routes.loginPage()} element={<LoginPage />} />
        <Route path={routes.signUpPage()} element={<SignUp />} />
      </Routes>
    </Router>
  </div>
);

export default App;
