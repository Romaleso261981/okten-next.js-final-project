import React from "react";

import s from "./ImageContainer.module.css";

type ImageContainerProps = {
  children: React.ReactNode;
};

const ImageContainer: React.FC<ImageContainerProps> = ({ children }) => {
  return <div className={s.container}>{children}</div>;
};

export default ImageContainer;
