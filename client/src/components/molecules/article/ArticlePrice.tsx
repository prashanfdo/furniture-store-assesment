import styled from "@emotion/styled";
import { useMemo } from "react";

const DivContainer = styled.div`
  color: #333;
`;
const SpanOldPrice = styled.span`
  text-decoration: line-through;
  font-size: 0.8em;
  margin-left: 1em;
`;
const SpanFinalPrice = styled.span`
  color: red;
  font-weight: bold;
`;
const SpanDiscount = styled.span`
  background-color: red;
  color: #fff;
  font-size: 0.8em;
  margin-left: 1em;
  border-radius: 5px;
  padding: 0.2em 0.4em;
`;

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
    <DivContainer>
      <SpanFinalPrice>{finalPrice}</SpanFinalPrice>
      {discountPercent > 0 ? <SpanOldPrice>{regularPrice}</SpanOldPrice> : null}
      {discountPercent > 0 ? <SpanDiscount>-{discountPercent}%</SpanDiscount> : null}
    </DivContainer>
  );
};

export default ArticlePrice;
