import styled from "@emotion/styled";
import { layout } from "styled-system";

const H1Title = styled.h1`
  font-size: 1.5rem;
  display: grid;
  grid-template-columns: auto auto 1fr;
  align-items: center;
  ${layout}
`;

const SpanArticleCount = styled.span`
  color: #999;
  margin-left: 0.5rem;
  font-weight: normal;
`;

type CategoryListProps = {
  name: string;
  articleCount: number;
};
export default function ProductListHeader({ name, articleCount }: CategoryListProps) {
  return (
    <>
      <H1Title>
        {name} <SpanArticleCount>({articleCount})</SpanArticleCount>
      </H1Title>
    </>
  );
}
