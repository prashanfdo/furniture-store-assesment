import { DEFAULT_LOCALE_NUMBER_FORMAT } from "helpers/constants";
import { useMemo } from "react";

type ArticlePriceProps = {
  currency: string;
  price: number;
  salePrice?: number;
  discount?: number;
};
const ArticlePrice: React.FC<ArticlePriceProps> = ({ currency, price, salePrice, discount }: ArticlePriceProps) => {
  const [finalPrice, regularPrice, discountPercent] = useMemo(() => {
    const curFormatter = new Intl.NumberFormat(DEFAULT_LOCALE_NUMBER_FORMAT, { style: "currency", currency });
    const finalPrice = curFormatter.format(salePrice || price);
    const regularPrice = curFormatter.format(price);
    const discountPercent = Math.round(((discount || 0) / price) * 100);
    return [finalPrice, regularPrice, discountPercent];
  }, [salePrice, price, discount, currency]);

  return (
    <div className="text-gray-600">
      <span data-testid="final-price" className="font-semibold text-red-600">
        {finalPrice}
      </span>
      {discountPercent > 0 ? (
        <span data-testid="regular-price" className="ml-4 text-sm line-through">
          {regularPrice}
        </span>
      ) : null}
      {discountPercent > 0 ? (
        <span data-testid="discount-percent" className="px-1 py-1 ml-2 text-sm text-white bg-red-500 rounded-lg">
          -{discountPercent}%
        </span>
      ) : null}
    </div>
  );
};

export default ArticlePrice;
