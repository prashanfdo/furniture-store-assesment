import { Article } from "types";

// TODO : update alt prop to proper seo friendly text
type ArticleImagesProps = {
  productImages: Article["images"];
};
const ArticleImages: React.FC<ArticleImagesProps> = ({ productImages }: ArticleImagesProps) => {
  const image = productImages[0];
  return (
    <div>
      <img className="object-contain h-96 w-full" key={image.path} src={image.path} alt={image.path} />
    </div>
  );
};

export default ArticleImages;
