import { render, RenderOptions, renderHook, RenderHookOptions } from "@testing-library/react";
import fs from "fs";
import React, { FC, ReactElement } from "react";

import user from "@testing-library/user-event";
import { ProvidersForTests } from "providers";

type GraphQlMocks = React.ComponentProps<typeof ProvidersForTests>["mocks"];

type WrapperProps = {
  children: React.ReactNode;
  mocks?: GraphQlMocks;
};
const Wrapper: FC<WrapperProps> = ({ children, mocks }: WrapperProps) => {
  return <ProvidersForTests mocks={mocks}>{children}</ProvidersForTests>;
};
const wrapper =
  (mocks: GraphQlMocks) =>
  ({ children }: { children: React.ReactNode }) =>
    <Wrapper mocks={mocks}>{children}</Wrapper>;

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, "wrapper"> & { gqlMocks: GraphQlMocks }) => {
  const view = render(ui, { wrapper: wrapper(options?.gqlMocks), ...options });

  const style = document.createElement("style");
  style.innerHTML = fs.readFileSync("src/index.out.css", "utf8");
  document.head.appendChild(style);

  return view;
};

export const customRenderHook = <T, R>(
  callback: (props: T) => R,
  options?: Omit<RenderHookOptions<T>, "wrapper"> & { gqlMocks: GraphQlMocks },
): R => {
  return renderHook(callback, { ...options, wrapper: wrapper(options?.gqlMocks) }).result.current;
};

export { faker } from "@faker-js/faker";
export * from "@testing-library/react";
export * from "./generate-data";
export { customRender as render };
export { customRenderHook as renderHook };
export { user };
