import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import CreateShop from "../CreateShop";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/DashBoard";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import CreateTask from "../Dashboard/CreateTask";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "createShop",
        element: (
          <PrivateRoute>
            <CreateShop></CreateShop>
          </PrivateRoute>
        ),
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "CreateTask",
        element: <CreateTask></CreateTask>,
        // loader:()=>fetch(`http://localhost:5000/products/`)
      },
    ],
  },
]);
