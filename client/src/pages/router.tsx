import { createBrowserRouter } from "react-router-dom";
import CategoryPage from "./CategoryPage";
import BaseLayout from "./layouts/BaseLayout";
import SearchPage from "./SearchPage";

const router = createBrowserRouter([
  {
    // renders home and category pages
    path: "/:category?",
    element: <BaseLayout page={CategoryPage} />,
  },
  {
    // renders search page
    path: "/search",
    element: <BaseLayout page={SearchPage} />,
  },
]);

export default router;
