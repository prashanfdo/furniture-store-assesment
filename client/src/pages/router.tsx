import { createBrowserRouter } from "react-router-dom";
import CategoryPage from "./CategoryPage";
import BaseLayout from "./layouts/BaseLayout";
import SearchPage from "./SearchPage";

const router = createBrowserRouter([
  {
    path: "/:category?",
    element: <BaseLayout page={CategoryPage} />,
  },
  {
    path: "/search",
    element: <BaseLayout page={SearchPage} />,
  },
]);

export default router;
