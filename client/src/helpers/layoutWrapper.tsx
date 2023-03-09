import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};
type ComponentProps = {
  children?: React.ReactNode;
};
const layoutWrapper = (LayoutComponent: React.FC<LayoutProps>) => {
  return (WrappedComponent: React.FC<ComponentProps>) => {
    return class extends React.Component {
      render() {
        return (
          <LayoutComponent>
            <WrappedComponent {...this.props} />
          </LayoutComponent>
        );
      }
    };
  };
};

export default layoutWrapper;
