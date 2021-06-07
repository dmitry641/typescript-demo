import React from "react";

export enum CardVariant {
  outlined = "outlined",
  primary = "primary",
}

interface CardProps {
  width?: string;
  height?: string;
  variant: CardVariant;
  onClick: (num: number) => void;
  // children?: React.ReactChild | React.ReactNode;
}

// { width, height }: CardProps
const Card: React.FC<CardProps> = ({
  width,
  height,
  variant,
  onClick,
  children,
}) => {
  return (
    <div
      style={{
        width,
        height,
        border: variant === CardVariant.outlined ? "1px solid gray" : "none",
        background: variant === CardVariant.primary ? "lightgray" : "",
      }}
      onClick={() => onClick(Math.random())}
    >
      <div>{children}</div>
    </div>
  );
};

export default Card;
