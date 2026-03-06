import { RouterProvider } from "react-router-dom";
import { router } from "./router/AppRouter";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer position="top-right" autoClose={3000} theme="dark" />
    </>
  );
}

export default App;
