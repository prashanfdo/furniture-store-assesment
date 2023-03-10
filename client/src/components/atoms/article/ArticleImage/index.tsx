// TODO : update alt prop to proper seo friendly text
type ArticleImageProps = Required<
  Pick<React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, "src" | "alt">
>;
const ArticleImage: React.FC<ArticleImageProps> = ({ src, alt }: ArticleImageProps) => {
  return (
    <div>
      <img className="object-contain w-full h-96" src={src} alt={alt} loading="lazy" />
    </div>
  );
};

export default ArticleImage;
