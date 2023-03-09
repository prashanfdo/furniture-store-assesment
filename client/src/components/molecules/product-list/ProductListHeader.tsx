type CategoryListProps = {
  name: string;
  articleCount: number;
};
export default function ProductListHeader({ name, articleCount }: CategoryListProps) {
  return (
    <>
      <h1 className="text-3xl grid grid-cols-[auto_auto_1fr] align-middle mt-4 mb-6">
        {name} <span className="text-gray-500 ml-1">({articleCount})</span>
      </h1>
    </>
  );
}
