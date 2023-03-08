import styled from "@emotion/styled";

const DivContainer = styled.div`
  display: grid;
  border: 0;
  border-radius: 0.5rem;
`;

type ArticleContainerProps = {
  children?: React.ReactNode;
};
const ArticleContainer: React.FC<ArticleContainerProps> = ({ children }: ArticleContainerProps) => {
  return <DivContainer>{children}</DivContainer>;
};

export default ArticleContainer;
