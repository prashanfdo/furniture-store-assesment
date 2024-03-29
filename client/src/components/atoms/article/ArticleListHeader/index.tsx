import Loading from "./Loading";

type ArticleListHeaderProps = {
  name?: string;
  articleCount?: number;
  loading: boolean;
};
export default function ArticleListHeader({ name, articleCount, loading }: ArticleListHeaderProps) {
  return (
    <>
      <h1 className="text-3xl grid grid-cols-[auto_auto_1fr] align-middle mt-4 mb-6">
        {loading ? <Loading /> : null}
        {!loading ? (
          <>
            {name} <span className="ml-1 text-gray-500">({articleCount})</span>
          </>
        ) : null}
      </h1>
    </>
  );
}
