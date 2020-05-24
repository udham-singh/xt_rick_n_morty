import React, {
  MouseEvent,
  FunctionComponent,
  ReactElement,
  ButtonHTMLAttributes,
} from "react";
import "../../../../styles/buttons.scss";

type Props = {
  onClick(e: MouseEvent<HTMLElement>): void;
  value: string | number | Element | ReactElement;
} & Partial<DefaultProps & ButtonHTMLAttributes<any>>;

type DefaultProps = Readonly<typeof defaultProps>;

const defaultProps = {
  color: "blue" as "default" | "blue" | "green" | "red",
  type: "button" as "button" | "submit",
};

const resolveColorTheme = (color: DefaultProps["color"]) => {
  const btnThemes = {
    default: "btn",
    blue: "btn btn--primary",
    green: "btn btn--success",
    red: "btn btn--error",
  };
  return btnThemes[color];
};

export const Button: FunctionComponent<Props> = (props: Props) => {
  const { onClick: handleOnClick, type, color, value, ...otherProps } = props;
  return (
    <button
      type={type}
      className={resolveColorTheme(color!)}
      onClick={handleOnClick}
      {...otherProps}
    >
      {value}
    </button>
  );
};

Button.defaultProps = defaultProps;
