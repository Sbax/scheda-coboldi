import React from "react";
import buttonStyles from "./button.module.scss";

export default function Button({
  children,
  primary,
  secondary,
  className,
  ...props
}) {
  return (
    <div>
      <button
        {...props}
        className={`${buttonStyles.button}
        ${primary ? buttonStyles.primary : ""}
        ${secondary ? buttonStyles.secondary : ""}
        ${className} 
      `}
      >
        {children}
      </button>
    </div>
  );
}
