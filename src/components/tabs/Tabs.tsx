import React from "react";
import { ReactNode, useContext, createContext } from "react";
import { cn } from "../../lib/utils";
import { tabsVariants } from "./Tabsvariants";

interface TabsContextType {
  activeKey: React.Key | undefined;
  setActiveKey: (key: React.Key) => void;
  disabledKeys: React.Key[];
  isDisabled: boolean;
  variant: "solid" | "bordered" | "light" | "underlined";
  color: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
  size: "sm" | "md" | "lg";
  radius: "none" | "sm" | "md" | "lg" | "full";
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
}

const TabsContext = createContext<TabsContextType | undefined>(undefined);

export interface TabProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  title?: string;
  disabled?: boolean;
  tabKey?: React.Key;
  className?: string;
  hidden?: boolean;
}

export const Tab: React.FC<TabProps> = ({
  children,
  tabKey,
  className,
  hidden = false,
}) => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("Tab must be used within a Tabs component");
  }

  return (
    <div key={tabKey} hidden={hidden} className={cn(className)}>
      {children}
    </div>
  );
};

Tab.displayName = "Tab";

export interface TabsProps {
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
  defaultSelectedKey?: React.Key;
  disabledKeys?: React.Key[];
  selectedKey?: React.Key;
  isDisabled?: boolean;
  destroyInactiveTabPanel?: boolean;
  isVertical?: boolean;
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
  children: ReactNode;
  onChange?: (key: React.Key) => void;
}

export const Tabs: React.FC<TabsProps> = ({
  variant = "solid",
  color = "default",
  size = "md",
  radius = "md",
  disabledKeys = [],
  selectedKey: controlledKey,
  defaultSelectedKey,
  isDisabled = false,
  destroyInactiveTabPanel = false,
  classNames,
  isVertical = false,
  children,
  onChange,
}) => {
  const tabElements = React.Children.toArray(children).filter(
    (child) => React.isValidElement(child) && child.type === Tab,
  ) as React.ReactElement<TabProps>[];

  const tabsWithKeys = tabElements.map((tab, index) => {
    const key = tab.props.tabKey || `tab-${index}`;
    return {
      ...tab,
      key,
      props: {
        ...tab.props,
        tabKey: key,
      },
    };
  });

  const [internalActiveKey, setInternalActiveKey] = React.useState<
    React.Key | undefined
  >(
    defaultSelectedKey ||
      (tabsWithKeys.length > 0 ? tabsWithKeys[0].props.tabKey : undefined),
  );

  const activeKey =
    controlledKey !== undefined ? controlledKey : internalActiveKey;

  const handleTabClick = (key: React.Key) => {
    if (disabledKeys.includes(key) || isDisabled) return;

    if (controlledKey === undefined) {
      setInternalActiveKey(key);
    }

    onChange?.(key);
  };

  const contextValue: TabsContextType = {
    activeKey,
    setActiveKey: handleTabClick,
    disabledKeys,
    isDisabled,
    variant,
    color,
    size,
    radius,
    classNames,
  };

  return (
    <TabsContext.Provider value={contextValue}>
      <div className={cn("w-full p-4", classNames?.base)}>
        <div
          className={cn(
            "flex w-fit gap-1 rounded p-1",
            variant !== "underlined" && "bg-slate-300",
            isVertical ? "flex-col" : "flex-row",
            classNames?.tabList,
          )}
        >
          {tabsWithKeys.map((tab) => {
            const isTabDisabled =
              disabledKeys.includes(tab.props.tabKey) || tab.props.disabled;

            return (
              <button
                key={tab.props.tabKey}
                disabled={isDisabled || isTabDisabled}
                onClick={() => handleTabClick(tab.props.tabKey)}
                className={cn(
                  tabsVariants({ variant, color, size, radius }),
                  activeKey === tab.props.tabKey
                    ? variant === "underlined"
                      ? "border-b-2 font-medium"
                      : variant === "light"
                        ? "bg-opacity-20 font-medium"
                        : "text-white opacity-900"
                    : "bg-transparent text-black opacity-70",
                  variant === "underlined" &&
                    activeKey === tab.props.tabKey &&
                    getUnderlineColor(color),
                  variant === "light" &&
                    activeKey === tab.props.tabKey &&
                    getLightBgColor(color),
                  classNames?.tab,
                )}
              >
                <span className={classNames?.tabContent}>
                  {tab.props.title || tab.props.children}
                </span>
              </button>
            );
          })}
        </div>

        <div className={cn("mt-4", classNames?.panel)}>
          {tabsWithKeys.map((tab) => {
            const isActive = tab.props.tabKey === activeKey;
            if (!isActive && destroyInactiveTabPanel) return null;

            return (
              <Tab
                key={tab.props.tabKey}
                tabKey={tab.props.tabKey}
                title={tab.props.title}
                disabled={tab.props.disabled}
                className={tab.props.className}
                hidden={!isActive}
              >
                {tab.props.children}
              </Tab>
            );
          })}
        </div>
      </div>
    </TabsContext.Provider>
  );
};

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

function getLightBgColor(color: string) {
  switch (color) {
    case "primary":
      return "bg-primary text-primary bg-opacity-20";
    case "secondary":
      return "bg-secondary text-secondary bg-opacity-20";
    case "success":
      return "bg-success text-success bg-opacity-20";
    case "warning":
      return "bg-warning text-warning bg-opacity-20";
    case "danger":
      return "bg-danger text-danger bg-opacity-20";
    default:
      return "bg-base text-base bg-opacity-20";
  }
}

Tabs.displayName = "Tabs";
