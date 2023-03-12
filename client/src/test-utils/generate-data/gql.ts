import { OperationVariables, QueryResult } from "@apollo/client";

export function createGqlResult<TData, TVars extends OperationVariables>(
  gqlResult: Partial<QueryResult<TData, TVars>>,
): QueryResult<TData, TVars> {
  return {
    ...gqlResult,
  } as QueryResult<TData, TVars>;
}
