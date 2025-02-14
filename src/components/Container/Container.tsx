import React, { FC } from "react";

import s from "./container.module.css";

type ContainerProps = {
  children: React.ReactNode;
};

export const Container: FC<ContainerProps> = ({ children }) => {
  return <div className={s.wrapper}>{children}</div>;
};
