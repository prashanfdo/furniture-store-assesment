import { ReactNode } from "react";

type ArticleNameProps = {
  children: ReactNode;
};
const ArticleName: React.FC<ArticleNameProps> = ({ children }: ArticleNameProps) => {
  return <div className="text-gray-900 text-ellipsis whitespace-nowrap overflow-hidden">{children}</div>;
};

export default ArticleName;
