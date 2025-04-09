import { cn } from "../../lib/utils";
import React, { InputHTMLAttributes } from "react";
import { checkboxLabelVariants, checkboxVariants } from './CheckboxVariants';

type NativeInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size">;
export interface CheckboxProps extends NativeInputProps {
    className?: string;
    disabled?: boolean;
    color?: "base" | "primary" | "secondary" | "success" | "warning" | "danger";
    rounded?: "sm" | "md" | "lg"|"xl" | "full" | "none" 
    size?: "sm" | "md" | "lg" | "xl";
    label?:string;
    strike?:boolean;
}

const Checkbox = ({
    strike,
    id,
    label,
    size,
    className,
    color,
    rounded,
    disabled,
    ...props
}: CheckboxProps) => {
    const inputRef = React.useRef<HTMLInputElement>(null);
    return (
      <div className="flex items-center z-10 bg-transparent select-none">
        <input
        type="checkbox"
          id={id}
          disabled={disabled}
          className={cn(
            checkboxVariants({
              size,
              rounded,
              color,
              disabled,
            }),
            className,
          )}
          ref={inputRef}
          {...props}
        />
        <label
          htmlFor={id}
          className={cn(
            checkboxLabelVariants({
              size,
              strike,
              disabled,
            }),
          )}
        >
          {label}
        </label>
      </div>
    );
};
Checkbox.displayName = "Input";
export default Checkbox;
