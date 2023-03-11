import { MockedProvider as MockedApolloClientProvider } from "@apollo/client/testing";
import React from "react";
import { BrowserRouter, RouterProvider, RouterProviderProps } from "react-router-dom";
import ApolloClientProvider from "./ApolloClientProvider";
import CartContextProvider from "./CartProvider";

type ProvidersProps = {
  router: RouterProviderProps["router"];
};
export const Providers: React.FC<ProvidersProps> = ({ router }: ProvidersProps) => {
  return (
    <ApolloClientProvider>
      <CartContextProvider>
        <RouterProvider router={router} />
      </CartContextProvider>
    </ApolloClientProvider>
  );
};

type ProvidersForTestsProps = {
  children: React.ReactNode;
  mocks: React.ComponentProps<typeof MockedApolloClientProvider>["mocks"];
};
export const ProvidersForTests: React.FC<ProvidersForTestsProps> = ({ children, mocks }: ProvidersForTestsProps) => {
  return (
    <MockedApolloClientProvider mocks={mocks || []}>
      <CartContextProvider>
        <BrowserRouter>{children}</BrowserRouter>
      </CartContextProvider>
    </MockedApolloClientProvider>
  );
};

export default Providers;
