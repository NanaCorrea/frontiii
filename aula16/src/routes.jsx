import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/home";
import DashboardPage from "./pages/dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
  }
]);

function Routes() {
  return (
    <>
    <h1>Olá!</h1>
    <RouterProvider router={router} />
    <h2>Tchau!</h2>
    </>
  )
}

export default Routes