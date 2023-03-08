import React from "react";
import HeaderBar from "components/organisms/HeaderBar";
import Footer from "components/organisms/Footer";
import styled from "@emotion/styled";
import CategorySidebar from "components/organisms/CategorySidebar";
import { useMatches } from "react-router-dom";

type BaseLayoutProps = {
  page: React.FC;
};

const RootDiv = styled.div`
  min-height: 100vh;
  min-height: 100dvh;
  background-color: #eeeeef;
  display: grid;
  grid-template-rows: auto 1fr auto;
`;

const DivContent = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
`;

const BaseLayout: React.FC<BaseLayoutProps> = ({ page: Page }) => {
  const matches = useMatches();

  const categoryId = matches?.[0]?.params?.category || "156126";

  return (
    <RootDiv>
      <HeaderBar />
      <DivContent>
        <CategorySidebar selectedCategoryId={categoryId} />
        <Page />
      </DivContent>
      <Footer />
    </RootDiv>
  );
};

export default BaseLayout;
