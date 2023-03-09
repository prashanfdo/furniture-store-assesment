import CategoryProductList from "components/organisms/CategoryProductList";
import { ROOT_CATEGORY_ID } from "helpers/constants";
import { useMatches } from "react-router-dom";

export default function CategoryPage() {
  const matches = useMatches();

  const categoryId = matches?.[0]?.params?.category || ROOT_CATEGORY_ID;

  return (
    <>
      <CategoryProductList categoryId={categoryId} />
    </>
  );
}
