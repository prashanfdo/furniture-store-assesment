import { ReactNode } from "react";

type ArticleNameProps = {
  children: ReactNode;
};
const ArticleName: React.FC<ArticleNameProps> = ({ children }: ArticleNameProps) => {
  return <h4 className="overflow-hidden text-gray-900 text-ellipsis whitespace-nowrap">{children}</h4>;
};

export default ArticleName;
