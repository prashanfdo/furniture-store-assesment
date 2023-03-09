// TODO : update alt prop to proper seo friendly text
type ArticleImageProps = Pick<
  React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>,
  "src" | "alt"
>;
const ArticleImage: React.FC<ArticleImageProps> = ({ src, alt }: ArticleImageProps) => {
  return (
    <div>
      <img className="object-contain h-96 w-full" src={src} alt={alt} />
    </div>
  );
};

export default ArticleImage;
