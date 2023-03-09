import ProductListHeader from "components/molecules/product-list/ProductListHeader";
import ProductsGrid from "components/molecules/product-list/ProductsGrid";
import wrapContext from "helpers/wrapContext";
import { ProductListContextProvider, useProductListContext } from "./ProductListContext";

const ProductList: React.FC = () => {
  const { data } = useProductListContext();

  if (data === undefined) {
    return null;
  }
  return (
    <div className="grid grid-rows-[auto_1fr] py-2 px-8">
      <ProductListHeader name={data.name} articleCount={data.articleCount} />
      <ProductsGrid products={data.categoryArticles.articles} />
    </div>
  );
};

export default wrapContext(ProductListContextProvider, ProductList);
