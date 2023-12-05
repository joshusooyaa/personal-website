import { createBrowserRouter, RouterProvider, useLocation } from "react-router-dom";
import App from "./App";
import Resume from "./components/resume";
import MoreAbout from "./components/more-about";
import { useEffect } from "react";

function ToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location])
}

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <ToTop/>
          <App />,
        </>),
      errorElement: <App />,
    },
    {
      path: "/resume",
      element: (
      <>
        <ToTop/>
        <Resume/>
      </>),
    },
    {
      path: "/about",
      element: (
        <>
          <ToTop />
          <MoreAbout/>
        </>),
    }
  ]);

  return <RouterProvider router={router} />;
}