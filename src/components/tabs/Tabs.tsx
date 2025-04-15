import * as React from "react";
import { ReactElement, ReactNode } from "react";
import { cn } from "../../lib/utils";
import { tabsVariants } from "./Tabsvariants";

export interface TabsProps<T extends { key: React.Key; title: string }> {
  variant?: "solid" | "bordered" | "light" | "underlined";

  color?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger";
  size?: "sm" | "md" | "lg";
  radius?: "none" | "sm" | "md" | "lg" | "full";
  items: Iterable<T>;
  disabledKeys?: React.Key[];
  selectedKey?: React.Key;
  defaultSelectedKey?: React.Key;
  isDisabled?: boolean;
  destroyInactiveTabPanel?: boolean;
  classNames?: Partial<
    Record<
      | "base"
      | "tabList"
      | "tab"
      | "tabContent"
      | "cursor"
      | "panel"
      | "tabWrapper",
      string
    >
  >;
  placement?: "top" | "bottom" | "start" | "end";
  isVertical?: boolean;
  children: ReactNode | ((item: T) => ReactElement);
}

export function Tabs<T extends { key: React.Key; title: string }>({
  variant = "solid",
  color = "default",
  size = "md",
  radius = "md",
  items,
  disabledKeys = [],
  selectedKey: _selectedKey,
  defaultSelectedKey,
  isDisabled = false,
  destroyInactiveTabPanel = false,
  classNames,
  isVertical = false,
  children,
}: TabsProps<T>) {
  const [activeKey, setActiveKey] = React.useState<React.Key | undefined>(
    defaultSelectedKey,
  );

  const handleTabClick = (key: React.Key) => {
    if (disabledKeys.includes(key) || isDisabled) return;
    setActiveKey(key);
  };

  return (
    <div className={cn("w-full p-4", classNames?.base)}>
      <div
        className={cn(
          "flex w-fit gap-1 rounded p-1",
          variant !== "underlined" && "bg-slate-300",
          isVertical ? "flex-col" : "flex-row",
          classNames?.tabList,
        )}
      >
        {Array.from(items).map((item) => (
          <button
            key={item.key}
            disabled={isDisabled || disabledKeys.includes(item.key)}
            onClick={() => handleTabClick(item.key)}
            className={cn(
              tabsVariants({ variant, color, size, radius }),
              activeKey === item.key
                ? variant === "underlined"
                  ? "border-b-2 font-medium"
                  : variant === "light"
                    ? "bg-opacity-20 font-medium"
                    : "text-white opacity-900"
                : "bg-transparent text-black opacity-70",
              variant === "underlined" &&
                activeKey === item.key &&
                getUnderlineColor(color),
              variant === "light" &&
                activeKey === item.key &&
                getLightBgColor(color),
              classNames?.tab,
            )}
          >
            <span className={classNames?.tabContent}>{item.title}</span>
          </button>
        ))}
      </div>

      <div className={cn("mt-4", classNames?.panel)}>
        {Array.from(items).map((item) => {
          const isActive = item.key === activeKey;
          if (!isActive && destroyInactiveTabPanel) return null;
          return (
            <div key={item.key} hidden={!isActive}>
              {typeof children === "function" ? children(item) : children}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Handling underline variant for the component
function getUnderlineColor(color: string) {
  switch (color) {
    case "primary":
      return "border-primary bg-transparent";
    case "secondary":
      return "border-secondary bg-transparent";
    case "success":
      return "border-success bg-transparent";
    case "warning":
      return "border-warning bg-transparent";
    case "danger":
      return "border-danger bg-transparent";
    default:
      return "border-base bg-transparent";
  }
}

// Handling light variant for the componet
function getLightBgColor(color: string) {
  switch (color) {
    case "primary":
      return "bg-primary text-primary bg-opacity-20";
    case "secondary":
      return "bg-secondary text-secondary  bg-opacity-20";
    case "success":
      return "bg-success text-success  bg-opacity-20";
    case "warning":
      return "bg-warning text-warning  bg-opacity-20";
    case "danger":
      return "bg-danger text-danger  bg-opacity-20";
    default:
      return "bg-base text-base  bg-opacity-20";
  }
}

Tabs.displayName = "Tabs";
