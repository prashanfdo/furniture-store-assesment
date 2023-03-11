import { render, RenderOptions } from "@testing-library/react";
import fs from "fs";
import React, { FC, ReactElement } from "react";

import { BrowserRouter } from "react-router-dom";
import user from "@testing-library/user-event";

const wrapper: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, "wrapper">) => {
  const view = render(ui, { wrapper, ...options });

  const style = document.createElement("style");
  style.innerHTML = fs.readFileSync("src/index.out.css", "utf8");
  document.head.appendChild(style);

  return view;
};
export * from "@testing-library/react";

export { faker } from "@faker-js/faker";
export * from "./generate-data";

export { customRender as render };
export { user };
