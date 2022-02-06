import { ComponentPropsWithoutRef, forwardRef, PropsWithChildren } from "react";

import { classnames, backgroundColor } from "tailwindcss-classnames";

import style from "./index.module.css";

export type Props = Readonly<
  PropsWithChildren<Omit<ComponentPropsWithoutRef<"button">, "className">>
>;

const buttonStyle = `${classnames(backgroundColor("bg-blue-800"))} ${
  style.button
}`;

export const Button = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  return (
    <button ref={ref} className={buttonStyle} data-testid="button" {...props} />
  );
});
Button.displayName = "Button";
