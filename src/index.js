import React, {createContext, useState} from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Route, Routes, BrowserRouter, createBrowserRouter, RouterProvider} from 'react-router-dom';
import Auth from './components/auth'
import WelcomeBack from './components/WelcomeBack/WelcomeBack'

import { CookiesProvider } from 'react-cookie';

//const root = ReactDOM.createRoot(document.getElementById('root'));

export const TokenContext = createContext(null);

const welcomeBackData = {
  illustration: "../../img/baninkg-app-illustration-01@2x.png",
  welcomeBack: "Welcome back!",
  enterYourMobileNu: "Enter your mobile number to login.",
  yourName: "Email",
  phone: "123 456 789",
  createAccount: "Login",
  spanText1: "New user? ",
  spanText2: "Create account",
};

// function Router(){
//   const [token, setToken] = useState('');
//   return (    
//     <React.StrictMode>
//       <CookieProvider value={{token, setToken}}>
//         <BrowserRouter>
//           <Routes>
//             <Route exact path="/welcomeback" element={<WelcomeBack {...welcomeBackData}/>} />
//             <Route exact path="/" element={<Auth/>} />
//             <Route exact path="/accounts" element={<App/>} />
//           </Routes>
//         </BrowserRouter>
//       </CookieProvider>
//     </React.StrictMode>
//   )
// }

const router = createBrowserRouter([
  {
      path: "/",
      element: <Auth />,
  },
  {
      path: "/accounts",
      element: <App />,
  },
  {
    path: "/welcomeback",
    element: <App {...welcomeBackData} />,
},
]);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
      <CookiesProvider>
          <RouterProvider router={router} />
      </CookiesProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
