"use client";

import { Rating } from "@mantine/core";
import { FC, useState } from "react";

type StarsRatingComponentProps = {
  reating: number;
};

export const StarsRatingComponent: FC<StarsRatingComponentProps> = ({
  reating
}) => {
  const [value, setValue] = useState(reating);
  return <Rating value={value / 2} onChange={setValue} readOnly />;
};
