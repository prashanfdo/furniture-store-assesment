import React from "react";
import { CartContextProvider } from "./CartContext";
import ApolloClientProvider from "helpers/apollo-client";
import { RouterProvider, RouterProviderProps } from "react-router-dom";

type ProvidersProps = {
  router: RouterProviderProps["router"];
};
export default function Providers({ router }: ProvidersProps) {
  return (
    <ApolloClientProvider>
      <CartContextProvider>
        <RouterProvider router={router} />
      </CartContextProvider>
    </ApolloClientProvider>
  );
}
