import React from "react";
import CartContextProvider from "./CartProvider";
import ApolloClientProvider from "./ApolloClientProvider";
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
