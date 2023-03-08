import { createBrowserRouter } from "react-router-dom";
import CategoryPage from "./CategoryPage";
import HomePage from "./HomePage";
import BaseLayout from "./layouts/BaseLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout page={HomePage} />,
  },
  {
    path: "/:category",
    element: <BaseLayout page={CategoryPage} />,
  },
]);

export default router;
