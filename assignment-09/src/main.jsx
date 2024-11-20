import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Auth from './AuthLayout/Auth.jsx'
import Login from './AuthLayout/Login.jsx'
import Register from './AuthLayout/Register.jsx'
import MainRoot from './Components/MainRoot.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AuthProvider from './AuthProvider.jsx'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import Learning from './Components/Learning.jsx'
import Tutorials from './Components/Tutorials.jsx'
import LessonDetails from './Components/LessonDetails.jsx'
import PrivateRoute from './Components/PrivateRoute.jsx'
import Profile from './Components/Profile.jsx'
import UpdateProfile from './Components/UpdateProfile.jsx'
import ErrorPage from './Components/ErrorPage.jsx'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainRoot></MainRoot>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/profile',
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      },
      {
        path: 'profile/update-profile',
        element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
      }

    ]
  },

  {
    path: '/auth',
    element: <Auth></Auth>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/auth/login',
        element: <Login></Login>
      },
      {
        path: '/auth/register',
        element: <Register></Register>
      }
    ]
  },

  {
    path: '/about',
    element: <About></About>,
    errorElement: <ErrorPage></ErrorPage>
  },

  {
    path: '/learning',
    element: <Learning></Learning>,
    errorElement: <ErrorPage></ErrorPage>
  },
  {
    path: '/learning/lesson/:lesson_no',
    element: <PrivateRoute><LessonDetails></LessonDetails></PrivateRoute>,
    errorElement: <ErrorPage></ErrorPage>
  },

  {
    path: '/tutorials',
    element: <PrivateRoute><Tutorials></Tutorials></PrivateRoute>,
    errorElement: <ErrorPage></ErrorPage>
  }

  // {
  //   path: 'news/:id',
  //   element: (
  //     <PrivateRoute>
  //       <NewsLayout></NewsLayout>
  //     </PrivateRoute>
  //   ),
  //   loader: ({ params }) =>
  //     fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
  // }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </AuthProvider>
  </StrictMode>,
)
