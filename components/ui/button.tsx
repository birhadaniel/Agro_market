import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", ...props }, ref) => {
    const variants = {
      default:
        "bg-green-600! hover:bg-green-700 text-white rounded-lg font-medium",
      outline:
        "border border-green-600 text-green-600 hover:bg-green-50! rounded-lg font-medium",
      ghost:
        "text-green-600 hover:bg-green-50 rounded-lg font-medium",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "px-4 py-2 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed",
          variants[variant],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
