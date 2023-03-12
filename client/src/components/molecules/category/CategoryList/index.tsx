import { Bars3Icon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { CategorySidebarLink } from "components/atoms";
import { ROOT_CATEGORY_ID } from "helpers/constants";
import { useState } from "react";
import { ChildCategory } from "types";

type Category = ChildCategory["list"][0];

type CategoryListProps = {
  selectedCategoryId?: string;
  categories?: Category[];
  loading: boolean;
  error: boolean;
};
const CategoryList: React.FC<CategoryListProps> = ({
  categories = [],
  selectedCategoryId,
  loading,
  error,
}: CategoryListProps) => {
  const [showCategorySlideMenu, setShowCategorySlideMenu] = useState(false);

  const handleMenuButton = () => {
    setShowCategorySlideMenu(!showCategorySlideMenu);
  };

  const isSelected = (id: string) => {
    return id === selectedCategoryId;
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
            <li data-testid={`cat-list-item-${ROOT_CATEGORY_ID}`}>
              <CategorySidebarLink isActive={isSelected(ROOT_CATEGORY_ID)} to={"/"}>
                All
              </CategorySidebarLink>
            </li>
            {loading && <li>loading...</li>}
            {error && <li>Error Occurred</li>}
            {!loading &&
              categories?.map((category) => (
                <li key={category.id} data-testid={`cat-list-item-${category.id}`}>
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
};

export default CategoryList;
