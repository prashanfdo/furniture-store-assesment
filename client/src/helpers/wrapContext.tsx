import React from "react";

type ComponentProps = {
  children?: React.ReactNode;
};
const wrapContext = (
  ContextProvider: React.FC<ComponentProps>,
  WrappedComponent: React.FC<ComponentProps>
) => {
  return class extends React.Component {
    render() {
      return (
        <ContextProvider>
          <WrappedComponent {...this.props} />
        </ContextProvider>
      );
    }
  };
};

export default wrapContext;
