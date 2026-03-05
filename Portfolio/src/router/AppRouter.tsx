import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layouts/mainlayout/MainLayout";
import HomePage from "../features/home/pages/home/Homepage";
import AboutMeSection from "../features/home/sections/about/AboutMeSection";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        children: [
          {
            index: true,
            element: <AboutMeSection />,
          },
        ],
      },
    ],
  },
]);
