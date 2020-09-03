import React from "react";
import { StoreZhiTalkContextProvider } from "../context/index";

export const ContextStore = ({ children }) => {
  return <StoreZhiTalkContextProvider>{children}</StoreZhiTalkContextProvider>;
};
