import { createBrowserRouter, RouterProvider } from "react-router-dom";

// layout
import AppLayout from "./Layout/AppLayout";
// pages
import HomePage from "./pages/HomePage";
import SingleCountry from "./pages/SingleCountry";
// router new version
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/country/:name",
        element: <SingleCountry />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
