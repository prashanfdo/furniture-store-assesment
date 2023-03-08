import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ChildCategory } from "types";

type Category = ChildCategory["list"][0];

const DivContainer = styled.div`
  background-color: #fff;
`;
const H2Title = styled.h2`
  font-size: 1rem;
  padding: 0 1.5em;
`;
const UlContainer = styled.ul`
  list-style-type: none;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0;
  margin-inline-end: 0;
  padding-inline-start: 0;
`;
type LinkCategoryProps = {
  isActive?: boolean;
};
const LinkCategory = styled.a<LinkCategoryProps>`
  text-decoration: none;
  padding: 0.5em 1.5em;
  display: block;
  color: #000;
  transition: background-color 0.05s ease-in-out;
  ${({ isActive }) => !!isActive && css({ color: "#7047eb" })}
  font-weight: 500;
  font-size: 0.9rem;
  &:hover {
    background-color: #e6e6ea;
  }
`;

type CategoryListProps = {
  selectedCategoryId?: string;
  categories?: Category[];
};
export default function CategoryList({ categories, selectedCategoryId }: CategoryListProps) {
  return (
    <DivContainer>
      <H2Title>Categories</H2Title>
      <UlContainer>
        <li>
          <LinkCategory isActive={!selectedCategoryId?.trim()} href={"/"}>
            All
          </LinkCategory>
        </li>
        {categories?.map((category) => (
          <li key={category.urlPath}>
            <LinkCategory
              isActive={category.id === selectedCategoryId?.trim()}
              href={`/${category.id}`}>
              {category.name}
            </LinkCategory>
          </li>
        ))}
      </UlContainer>
    </DivContainer>
  );
}
