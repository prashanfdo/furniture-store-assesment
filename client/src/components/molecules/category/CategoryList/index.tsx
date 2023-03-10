import { ROOT_CATEGORY_ID } from "helpers/constants";
import { ChildCategory } from "types";
import { Bars3Icon } from "@heroicons/react/20/solid";
import { useState } from "react";
import clsx from "clsx";
import { CategorySidebarLink } from "components/atoms";

type Category = ChildCategory["list"][0];

type CategoryListProps = {
  selectedCategoryId?: string;
  categories?: Category[];
};
export default function CategoryList({ categories = [], selectedCategoryId }: CategoryListProps) {
  const [showCategorySlideMenu, setShowCategorySlideMenu] = useState(false);

  const handleMenuButton = () => {
    setShowCategorySlideMenu(!showCategorySlideMenu);
  };

  return (
    <>
      <aside
        className={clsx(
          "thin-scroll fixed bottom-0 left-0 lg:!left-0 w-full md:w-[220px] top-16 overflow-auto z-10 bg-white",
          {
            "!-left-full": !showCategorySlideMenu,
          },
        )}
      >
        <button
          onClick={handleMenuButton}
          className="fixed opacity-50 cursor-pointer lg:hidden top-4 left-4 hover:opacity-100"
        >
          <Bars3Icon className="w-6 h-6" />
        </button>
        <div>
          <ul>
            <li>
              <CategorySidebarLink isActive={selectedCategoryId === ROOT_CATEGORY_ID} to={"/"}>
                All
              </CategorySidebarLink>
            </li>
            {categories?.map((category) => (
              <li key={category.id}>
                <CategorySidebarLink
                  isActive={!!category.id ? selectedCategoryId === category.id : false}
                  to={`/${category.id}`}
                >
                  {category.name}
                </CategorySidebarLink>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
}