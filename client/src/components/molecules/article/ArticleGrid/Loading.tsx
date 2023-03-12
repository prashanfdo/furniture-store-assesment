import ContentLoader from "react-content-loader";

const LoadingArticle = () => {
  return (
    <ContentLoader
      data-testid="loading"
      speed={2}
      width={"100%"}
      height={300}
      backgroundColor="#fff"
      foregroundColor="#f0f0f0"
    >
      <rect x="0" y="0" rx="5" ry="5" width="100%" height="300" />
    </ContentLoader>
  );
};
const Loading = () => {
  return (
    <>
      <LoadingArticle />
      <LoadingArticle />
      <LoadingArticle />
    </>
  );
};

export default Loading;
