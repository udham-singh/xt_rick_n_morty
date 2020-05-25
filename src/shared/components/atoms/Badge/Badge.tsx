import React, { FunctionComponent } from "react";
import "./badge.scss";

type Props = {
  text: string;
  onClose: Function;
};

export const Badge: FunctionComponent<Props> = ({ text, onClose }: Props) => {
  return (
    <div className="badge">
      <span className="badge__text">{text}</span>
      <span className="badge__icon" onClick={() => onClose()}>
        &#10005;
      </span>
    </div>
  );
};
