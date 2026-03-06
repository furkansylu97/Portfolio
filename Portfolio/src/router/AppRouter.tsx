import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layouts/mainlayout/MainLayout";
import HomePage from "../features/home/pages/home/Homepage";
import AboutUsPage from "../features/home/pages/about/Aboutpage";
import ProjectsPage from "../features/home/pages/projects/Projectspage";
import ExperiencePage from "../features/home/pages/experience/ExperiencePage";
import CertificatesPage from "../features/home/pages/certificates/CertificatesPage";
import ContactPage from "../features/home/pages/contatct/Contactpage";

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
            element: <AboutUsPage />,
          },
        ],
      },
      {
        path: "projects",
        children: [
          {
            index: true,
            element: <ProjectsPage />,
          },
        ],
      },
      {
        path: "experiences",
        children: [
          {
            index: true,
            element: <ExperiencePage />,
          },
        ],
      },
      {
        path: "certificates",
        children: [
          {
            index: true,
            element: <CertificatesPage />,
          },
        ],
      },
      {
        path: "contact",
        children: [
          {
            index: true,
            element: <ContactPage />,
          },
        ],
      },
    ],
  },
]);
