import React, { ReactNode } from "react";

const wrapContext = <
  TProviderProps extends { children?: ReactNode },
  TComponentProps extends { children?: ReactNode }
>(
  ContextProvider: React.FC<TProviderProps>,
  WrappedComponent: React.FC<TComponentProps>
) => {
  return (props: TProviderProps & TComponentProps) => {
    return (
      <ContextProvider {...(props as TProviderProps)}>
        <WrappedComponent {...(props as TComponentProps)} />
      </ContextProvider>
    );
  };
};

export default wrapContext;
