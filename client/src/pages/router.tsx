import { createBrowserRouter } from "react-router-dom";
import CategoryPage from "./CategoryPage";
import BaseLayout from "./layouts/BaseLayout";

const router = createBrowserRouter([
  {
    path: "/:category",
    element: <BaseLayout page={CategoryPage} />,
  },
]);

export default router;
