import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Blog from './pages/Blog';
import FreeCourses from './pages/FreeCourses';
import Contact from './pages/Contact'
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import BlogDetails from './pages/BlogDetails';
import FreeCourseDetails from './pages/FreeCourseDetails';

const Router = createBrowserRouter(
  [{
    path: '/', element: <App />
  },
    {
    path: '/blog', element: <Blog/>
    }
    ,
    {
      path: '/freeCourses', element: <FreeCourses/>
    }
    ,
    {
      path: '/contact', element: <Contact/>
    }, {
      path:"/blog/details",element:<BlogDetails/>
    }, {
      path: "/freeCourse/details",element:<FreeCourseDetails/>
    }
  ]
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
