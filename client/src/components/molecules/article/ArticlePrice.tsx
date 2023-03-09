import { useMemo } from "react";

type ArticlePriceProps = {
  currency: string;
  price: number;
  salePrice?: number;
  discount?: number;
};
const ArticlePrice: React.FC<ArticlePriceProps> = ({
  currency,
  price,
  salePrice,
  discount,
}: ArticlePriceProps) => {
  const [finalPrice, regularPrice, discountPercent] = useMemo(() => {
    const curFormatter = new Intl.NumberFormat("de-DE", { style: "currency", currency });
    const finalPrice = curFormatter.format(salePrice || price);
    const regularPrice = curFormatter.format(price);
    const discountPercent = Math.round(((discount || 0) / price) * 100);
    return [finalPrice, regularPrice, discountPercent];
  }, [salePrice, price, discount, currency]);
  return (
    <div className="text-gray-600">
      <span className="text-red-600 font-semibold">{finalPrice}</span>
      {discountPercent > 0 ? (
        <span className="line-through text-sm ml-4">{regularPrice}</span>
      ) : null}
      {discountPercent > 0 ? (
        <span className="bg-red-500 text-sm ml-2 rounded-lg py-1 px-1 text-white">
          -{discountPercent}%
        </span>
      ) : null}
    </div>
  );
};

export default ArticlePrice;
