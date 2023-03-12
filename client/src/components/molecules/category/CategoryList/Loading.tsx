import ContentLoader from "react-content-loader";

const Loading = () => {
  return (
    <ContentLoader
      speed={2}
      width={"100%"}
      height={150}
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      data-testid="loading"
    >
      <rect x="0" y="0" rx="5" ry="5" width="180" height="20" />
      <rect x="0" y="30" rx="5" ry="5" width="180" height="20" />
      <rect x="0" y="60" rx="5" ry="5" width="180" height="20" />
      <rect x="0" y="90" rx="5" ry="5" width="180" height="20" />
    </ContentLoader>
  );
};

export default Loading;
