import * as React from "react";
import "./index.less";

export default function Svg(props) {
  const { icon = "wrong", className = "", style = {} } = props;
  return (
    <svg
      onClick={props.onClick ? props.onClick : () => {}}
      style={style}
      className={`svg-icon-set ${className ? className : ""}`}
      aria-hidden="true"
    >
      <use xlinkHref={`#hackathon_${icon}`} />
    </svg>
  );
}
