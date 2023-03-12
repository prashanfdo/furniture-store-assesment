import { MockedProvider as MockedApolloClientProvider } from "@apollo/client/testing";
import React from "react";
import { RouterProvider, RouterProviderProps, MemoryRouter } from "react-router-dom";
import ApolloClientProvider from "./ApolloClientProvider";
import CartContextProvider from "./CartProvider";
import { HelmetProvider } from "react-helmet-async";

const helmetContext = {};

type ProvidersProps = {
  router: RouterProviderProps["router"];
};
export const Providers: React.FC<ProvidersProps> = ({ router }: ProvidersProps) => {
  return (
    <ApolloClientProvider>
      <CartContextProvider>
        <HelmetProvider context={helmetContext}>
          <RouterProvider router={router} />
        </HelmetProvider>
      </CartContextProvider>
    </ApolloClientProvider>
  );
};

type ProvidersForTestsProps = {
  children: React.ReactNode;
  mocks: React.ComponentProps<typeof MockedApolloClientProvider>["mocks"];
  initialRoute?: string;
};
export const ProvidersForTests: React.FC<ProvidersForTestsProps> = ({
  children,
  mocks,
  initialRoute,
}: ProvidersForTestsProps) => {
  return (
    <MockedApolloClientProvider mocks={mocks || []}>
      <CartContextProvider>
        <HelmetProvider context={helmetContext}>
          <MemoryRouter initialEntries={initialRoute ? [initialRoute] : undefined}>{children}</MemoryRouter>
        </HelmetProvider>
      </CartContextProvider>
    </MockedApolloClientProvider>
  );
};

export default Providers;
