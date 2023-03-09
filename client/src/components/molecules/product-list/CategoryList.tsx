import CategorySidebarLink from "components/molecules/category/CategorySidebarLink";
import { ROOT_CATEGORY_ID } from "helpers/constants";
import { ChildCategory } from "types";
import { Bars3Icon } from "@heroicons/react/20/solid";
import { useState } from "react";
import clsx from "clsx";

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
      <div
        className={clsx(
          "thin-scroll fixed bottom-0 left-0 lg:!left-0 w-full md:w-[220px] top-14 overflow-auto z-10",
          {
            "-left-full": !showCategorySlideMenu,
          }
        )}>
        <button
          onClick={handleMenuButton}
          className="fixed lg:hidden top-4 left-4 opacity-50 hover:opacity-100 cursor-pointer">
          <Bars3Icon className="w-6 h-6" />
        </button>
        <div className="bg-white">
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
                  to={`/${category.id}`}>
                  {category.name}
                </CategorySidebarLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
