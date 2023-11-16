import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Resume from "./components/resume";

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
    }
  ]);

  return <RouterProvider router={router} />;
}