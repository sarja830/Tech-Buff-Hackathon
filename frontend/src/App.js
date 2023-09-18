import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import SignupForm from "./SignupForm";
import Signin from "./Signin";
import Dashboard from "./Employer/Dashboard";
import EmployeeDashboard from "./Student/EmployeeDashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <SignupForm />,
      },
      {
        path: "/signin",
        element: <Signin />,
      },
      {
        path: "/employer",
        element: <Dashboard />
      },
      {
        path: "/employee",
        element: <EmployeeDashboard />
      },
      // {
      //   path: "/employee/prompt",
      //   element: <Prompt />
      // }
    ]
  }
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
