import { Article } from "types";

type ArticleNameProps = {
  product: Article;
};
const ArticleName: React.FC<ArticleNameProps> = ({ product }: ArticleNameProps) => {
  return (
    <div className="text-gray-900 text-ellipsis whitespace-nowrap overflow-hidden">
      {product.name}
    </div>
  );
};

export default ArticleName;
