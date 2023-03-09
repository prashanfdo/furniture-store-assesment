type ArticleListHeaderProps = {
  name: string;
  articleCount: number;
};
export default function ArticleListHeader({ name, articleCount }: ArticleListHeaderProps) {
  return (
    <>
      <h1 className="text-3xl grid grid-cols-[auto_auto_1fr] align-middle mt-4 mb-6">
        {name} <span className="ml-1 text-gray-500">({articleCount})</span>
      </h1>
    </>
  );
}
