import { createBrowserRouter } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import { adminPaths } from "./admin.routes";
import { routeGenerator } from "../utils/routesGenerator";
import { facultyPaths } from "./faculty.routes";
import { studentPaths } from "./student.routes";
import RootLayout from "../layout/RootLayout";
// import ProtectedRoute from "../components/layout/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
  },
  {
    path: "/admin",
    element: <RootLayout />,
    children: routeGenerator(adminPaths),
  },
  {
    path: "/faculty",
    element: <RootLayout />,
    children: routeGenerator(facultyPaths),
  },
  {
    path: "/student",
    element: <RootLayout />,
    children: routeGenerator(studentPaths),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
