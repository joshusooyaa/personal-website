import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Resume from "./components/resume";
import MoreAbout from "./components/more-about";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <App />,
    },
    {
      path: "/resume",
      element: <Resume />,
    },
    {
      path: "/about",
      element: <MoreAbout />,
    }
  ]);

  return <RouterProvider router={router} />;
}