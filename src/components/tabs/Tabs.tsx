import * as React from "react";
import { ReactElement, ReactNode } from "react";
import { cn } from "../../lib/utils";
import { tabsVariants } from "./Tabsvariants";


const colorStyles: Record<string, string> = {
  default: "bg-gray-200",
  primary: "bg-blue-500",
  secondary: "bg-green-500",
  success: "bg-teal-500",
  warning: "bg-yellow-500",
  danger: "bg-red-500",
};

export interface TabsProps<T extends { key: React.Key; title: string }> {
  variant?: "solid" | "bordered" | "light" | "underlined";
  color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
  size?: "sm" | "md" | "lg";
  radius?: "none" | "sm" | "md" | "lg" | "full";
  fullWidth?: boolean;
  items: Iterable<T>;
  disabledKeys?: React.Key[];
  selectedKey?: React.Key;
  defaultSelectedKey?: React.Key;
  isDisabled?: boolean;

  destroyInactiveTabPanel?: boolean;
  classNames?: Partial<
    Record<"base" | "tabList" | "tab" | "tabContent" | "cursor" | "panel" | "tabWrapper", string>
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
  fullWidth = false,
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
  const [activeKey, setActiveKey] = React.useState<React.Key | undefined>(defaultSelectedKey);

  const handleTabClick = (key: React.Key) => {
    if (disabledKeys.includes(key) || isDisabled) return;
    setActiveKey(key);
  };

  return (
    <div className={cn("w-full p-4 ", classNames?.base)}>
      <div
        className={cn(
          "flex gap-1 p-1 rounded w-fit bg-slate-300 ",
          isVertical ? "flex-col" : "flex-row",
          classNames?.tabList
        )}
      >
        {Array.from(items).map((item) => (
          <button 
            key={item.key}
            disabled={isDisabled || disabledKeys.includes(item.key)}
            onClick={() => handleTabClick(item.key)}
            className={cn(
              tabsVariants({ variant, color, size, radius, fullWidth }),
              activeKey === item.key
                ? `${colorStyles[color]} text-white opacity-100` 
                : "bg-transparent text-black opacity-70", 
              classNames?.tab
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

Tabs.displayName = "Tabs";

