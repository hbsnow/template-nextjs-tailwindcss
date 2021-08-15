import React, {
  ComponentPropsWithoutRef,
  forwardRef,
  PropsWithChildren,
} from "react";

import { classnames } from "tailwindcss-classnames";

import style from "./index.module.css";

export type Props = Readonly<
  PropsWithChildren<Omit<ComponentPropsWithoutRef<"button">, "className">>
>;

export const Button = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  return (
    <button
      ref={ref}
      className={`${classnames("bg-blue-800")} ${style.button}`}
      data-testid="button"
      {...props}
    />
  );
});
Button.displayName = "Button";
