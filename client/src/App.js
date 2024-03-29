import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet
} from "react-router-dom";
import Home from "./pages/Home";
import JobSeekerLogin from './pages/JobSeekerLogin/JobSeekerLogin';
import CompanyLogin from './pages/CompanyLogin/CompanyLogin';
import SignUp from './pages/SignUp/SignUp';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import './App.css'
import RecommendedJobs from './pages/RecommendedJobs/RecommendedJobs';
import ForgetPassword from './pages/JobSeekerLogin/ForgetPassword';
import CompanyHome from './pages/CompanyHome/CompanyHome';
import CompanyAddJob from './pages/CompanyAddJob/CompanyAddJob';


function Layout() {
  return (
    
    <>
      <Navbar />
      <Outlet />
      <Footer/>

    </>


  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },

    
   ],
   
  },
  {
    path:"/login",
    element:<CompanyLogin/>
  },
  {
    path:"/JobSeekerlogin",
    element:<JobSeekerLogin/>
  },
  {
    path:"/signup",
    element:<SignUp/>
  },
  {
    path:"/jobs",
    element:<RecommendedJobs/>
  },
  {
    path:"/forgetpassword",
    element:<ForgetPassword/>
  },
  {
    path:"/companyhome",
    element:<CompanyHome/>
  },
  {
    path:"/companyform",
    element:<CompanyAddJob/>
  }

]);

function App() {
  return (
    <>
     <RouterProvider router={router} />
    {/* <Home/> */}
      {/* <div className="bg-indigo-600 w-full h-screen"></div> */}
    </>
  );
}

export default App;
