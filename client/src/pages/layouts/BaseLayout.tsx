import CategorySidebar from "components/organisms/CategorySidebar";
import Footer from "components/organisms/Footer";
import HeaderBar from "components/organisms/HeaderBar";
import React from "react";
import { useMatches } from "react-router-dom";

type BaseLayoutProps = {
  page: React.FC;
};

const BaseLayout: React.FC<BaseLayoutProps> = ({ page: Page }) => {
  const matches = useMatches();

  const categoryId = matches?.[0]?.params?.category || "156126";

  return (
    <div className="min-h-screen bg-[#eeeeef] grid grid-rows-[auto_1fr_auto]">
      <HeaderBar />
      <div className="lg:ml-[220px] mt-16">
        <CategorySidebar selectedCategoryId={categoryId} />
        <Page />
      </div>
      <Footer />
    </div>
  );
};

export default BaseLayout;
