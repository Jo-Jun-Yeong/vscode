import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NotificationList from './chapter_06/NotificationList';
import Accommodate from './chapter_07/Accommodate';
import ConfirmButton from './chapter_08/ConfirmButton';
import ConfirmButton2 from './chapter_08/ConfirmButton2';
import ConfirmButtonFunction from './chapter_08/ConfirmButtonFunction';
import Counter from './chapter_09/Counter';
import MainPage from './chapter_09/MainPage';
import LandingPage from './chapter_09/LandingPage';
import NumberList from './chapter_10/NumberList';
import AttendanceBook from './chapter_10/AttendanceBook';
import NameForm from './chapter_11/NameForm';
import SignUp from './chapter_11/SignUp';

const root = ReactDOM.createRoot(document.getElementById('root')); // createRoot 사용
root.render(
  <React.StrictMode>
    <SignUp />
  </React.StrictMode>
);

reportWebVitals();
