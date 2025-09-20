import React, { TextareaHTMLAttributes, ReactNode, forwardRef } from "react";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  label?: string;
  placeholder?: string;
  height?: "s" | "m";
  error?: boolean;
  errorMessage?: ReactNode;
  description?: ReactNode;
  radius?: "none" | "top" | "right" | "bottom" | "left" | "top-left" | "top-right" | "bottom-right" | "bottom-left";
  className?: string;
  style?: React.CSSProperties;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ id, label, placeholder, error, errorMessage, description, className, style, ...props }, ref) => {
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        {label && <label htmlFor={id}>{label}</label>}
        <textarea
          id={id}
          ref={ref}
          placeholder={placeholder}
          className={className}
          style={{
            padding: "1rem",
            fontSize: "1rem",
            borderRadius: "0.5rem",
            border: error ? "1px solid red" : "1px solid #ccc",
            background: "#fff",
            resize: "vertical",
            ...style
          }}
          {...props}
        />
        {description && <small>{description}</small>}
        {error && errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
      </div>
    );
  }
);

export { TextArea };
