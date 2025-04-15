import React from "react";
import { cn } from "../../lib/utils";
import { loaderVariants } from "./LoaderVariants";
import styles from "./styles/Loader.module.css";

export interface LoaderProps {
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
  color?: "base" | "primary" | "secondary" | "success" | "warning" | "danger";
  type?:
    | "spinner"
    | "dots"
    | "neon"
    | "line"
    | "logo"
    | "square"
    | "letters"
    | "bird";
  className?: string;
  label?: string;
  labelColor?: string;
  text?: string;
}

const Loader: React.FC<LoaderProps> = ({
  size = "md",
  color = "base",
  type = "spinner",
  className,
  label,
  labelColor,
  text = "TRAKEN UI",
}) => {
  const letterSizeMap = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-4xl",
    xl: "text-6xl",
    "2xl": "text-7xl",
    "3xl": "text-8xl",
    "4xl": "text-9xl",
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className={cn(loaderVariants({ size, color, type }), className)}>
        {type === "spinner" && <div className={styles.loaderSpinner} />}

        {type === "dots" && (
          <div className={styles.dotSpinner}>
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className={cn(
                  styles.dot,
                  `animate-dot-fade bg-current opacity-0`,
                )}
                style={{
                  animationDelay: `${i * 0.1}s`,
                  transform: `rotate(${i * 45}deg) translateX(10px)`,
                }}
              />
            ))}
          </div>
        )}

        {type === "neon" && <div className={styles.neonLoader} />}

        {type === "line" && (
          <div className={styles.lineLoader}>
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={cn(styles.line, "bg-current")}
                style={{ animationDelay: `${i * 0.15}s` }}
              />
            ))}
          </div>
        )}

        {type === "logo" && (
          <div className={styles.logoLoader}>
            <svg
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.logoSvg}
            >
              <path
                d="M30,50 L70,50 M50,30 L50,70"
                strokeLinecap="round"
                strokeWidth="8"
                className={styles.logoPath}
              />
              <circle cx="50" cy="50" r="35" className={styles.logoCircle} />
            </svg>
          </div>
        )}

        {type === "square" && (
          <div className={styles.squareLoader}>
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className={styles.square}
                style={{
                  animationDelay: `${i * 0.2}s`,
                  borderColor: "currentColor",
                }}
              />
            ))}
          </div>
        )}

        {type === "letters" && (
          <div
            className={cn(styles.lettersLoader, letterSizeMap[size || "md"])}
          >
            {text.split("").map((letter, index) => (
              <span
                key={index}
                className={styles.letter}
                style={{
                  animationDelay: `${index * 0.1 + 0.1}s`,
                }}
              >
                {letter}
              </span>
            ))}
          </div>
        )}

        {type === "bird" && (
          <div className={styles.birdLoader}>
            <div className={styles.bird}>
              <div className={styles.birdBody}></div>
              <div className={styles.birdWing1}></div>
              <div className={styles.birdWing2}></div>
            </div>
            <div className={styles.birdTrail}>
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className={styles.birdDot}
                  style={{ animationDelay: `${i * 0.15}s` }}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {label && (
        <span
          className={cn(
            "mt-2 text-sm font-medium",
            labelColor || `text-${color}`,
          )}
        >
          {label}
        </span>
      )}
    </div>
  );
};

export default Loader;
