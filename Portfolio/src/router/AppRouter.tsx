import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layouts/mainlayout/MainLayout";
import HomePage from "../features/home/pages/home/Homepage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
]);
