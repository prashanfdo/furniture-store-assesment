import ContentLoader from "react-content-loader";

const Loading = () => {
  return (
    <ContentLoader
      data-testid="article-list-header-loading"
      speed={2}
      width={"100%"}
      height={45}
      backgroundColor="#fff"
      foregroundColor="#f0f0f0"
    >
      <rect x="0" y="0" rx="5" ry="5" width="100%" height="40" />
    </ContentLoader>
  );
};

export default Loading;
