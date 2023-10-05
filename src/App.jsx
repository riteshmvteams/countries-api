import { createBrowserRouter, RouterProvider } from "react-router-dom";

// layout
import AppLayout from "./Layout/AppLayout";
// pages
import HomePage from "./pages/HomePage";
import SingleCountry from "./pages/SingleCountry";
import NotFound from "./pages/NotFound";
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
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
