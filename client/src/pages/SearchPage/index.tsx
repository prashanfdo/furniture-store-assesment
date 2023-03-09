import SearchProductList from "components/organisms/SearchProductList";
import { useSearchParams } from "react-router-dom";

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const searchText = searchParams.get("q") || undefined;

  if (!searchText) {
    return null;
  }

  return (
    <>
      <SearchProductList searchText={searchText} page={1} />
    </>
  );
}
