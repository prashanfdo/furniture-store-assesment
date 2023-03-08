import React from "react";
import HeaderBar from "components/organisms/HeaderBar";
import Footer from "components/organisms/Footer";
import styled from "@emotion/styled";

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

const BaseLayout: React.FC<BaseLayoutProps> = ({ page: Page }) => {
  return (
    <RootDiv>
      <HeaderBar />
      <Page />
      <Footer />
    </RootDiv>
  );
};

export default BaseLayout;
