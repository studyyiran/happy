import React from "react";
import { StoreAjaxPageContextProvider } from "./main/context/index";

export const ContextStore = ({ children }) => {
  return (
    <StoreAjaxPageContextProvider>{children}</StoreAjaxPageContextProvider>
  );
};
