import React from "react";
import clsx from "clsx";

type ContainerTag =
  | "section"
  | "div"
  | "main"
  | "header"
  | "footer"
  | "article"
  | "aside"
  | "nav";

type BoundedProps = {
  as?: ContainerTag;
  className?: string;
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLElement>;

export function Bounded({
  as = "section",
  className,
  children,
  ...rest
}: BoundedProps) {
  return React.createElement(
    as,
    {
      className: clsx("px-4 first:pt-10 md:px-6", className),
      ...(rest as object),
    },
    React.createElement(
      "div",
      { className: "mx-auto flex w-full max-w-7xl flex-col items-center" },
      children,
    ),
  );
}
