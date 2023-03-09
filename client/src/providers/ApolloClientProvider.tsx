import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

type ApolloClientProviderProps = {
  children: React.ReactNode;
};
export default function ApolloClientProvider({ children }: ApolloClientProviderProps) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
