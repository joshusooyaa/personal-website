import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <App />,
    },
  ]);

  return <RouterProvider router={router} />;
}