import React, { useState, useEffect, useCallback, useRef } from "react";
import { VariantProps } from "class-variance-authority";
import { accordionVariants } from "./Accordionvariants";
import { cn } from "../../lib/utils";

interface AccordionProps extends VariantProps<typeof accordionVariants> {
  children:
    | React.ReactElement<AccordionItemProps>
    | React.ReactElement<AccordionItemProps>[];
  className?: string;
  onActiveItemsChange?: (activeItems: string[]) => void;
}


interface AccordionItemProps {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
  expanded?: boolean;
  disabled?: boolean;
  onClick?: (itemId: string, expanded: boolean) => void;
  itemExpanded?: boolean;
  itemBorder?: "none" | "default" | "rounded";
  itemIsDisabled?: boolean;
  itemDisableAnimation?: boolean;
}

const AccordionItemComponent: React.FC<AccordionItemProps> = ({
  id,
  title,
  description,
  icon,
  className,
  expanded: controlledExpanded,
  disabled = false,
  itemBorder = "default",
  itemDisableAnimation = false,
  onClick,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(controlledExpanded || false);
  const contentRef = useRef<HTMLDivElement>(null);
  const isControlled = controlledExpanded !== undefined;

  useEffect(() => {
    if (isControlled) {
      setIsOpen(controlledExpanded);
    }
  }, [controlledExpanded, isControlled]);

  const handleToggle = () => {
    if (!disabled) {
      if (!isControlled) {
        setIsOpen((prev) => !prev);
      }
      onClick?.(id, !isOpen);
    }
  };

  return (
    <div
      className={cn(
        accordionVariants({
          itemExpanded: isOpen,
          itemIsDisabled: disabled,
          itemDisableAnimation,
        }),
        className,
      )}
      {...props}
    >
      <button
        onClick={handleToggle}
        className="flex w-full items-center justify-between py-2 font-medium"
        aria-expanded={!!isOpen}
        disabled={disabled}
      >
        <h3 className="text-lg">{title}</h3>
        <span className="text-xl transition-transform duration-300">
          {icon ? icon : isOpen ? "−" : "+"}
        </span>
      </button>

      <div
        className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
          isOpen ? "min-h-fit" : "max-h-0"
        }`}
      >
        <p className="pt-2 text-sm text-gray-300">{description}</p>
      </div>
    </div>
  );
};

const Accordion: React.FC<AccordionProps> = ({
  children,
  variant = "light",
  selectionMode = "single",
  selectionBehavior,
  size = "md",
  radius = "md",
  isDisabled = false,
  hideIndicator = false,
  disableAnimation = false,
  isCompact = false,
  className,
  onActiveItemsChange,
  ...props
}) => {
  const [activeItems, setActiveItems] = useState<string[]>([]);

  const handleItemClick = useCallback(
    (itemId: string, expanded: boolean) => {
      if (selectionMode === "single") {
        setActiveItems(expanded ? [itemId] : []);
      } else if (selectionMode === "multiple") {
        setActiveItems((prevActive) =>
          expanded
            ? [...prevActive, itemId]
            : prevActive.filter((id) => id !== itemId),
        );
      }
    },
    [selectionMode],
  );

  useEffect(() => {
    if (onActiveItemsChange) {
      onActiveItemsChange(activeItems);
    }
  }, [activeItems, onActiveItemsChange]);

  return (
    <div
      className={cn(
        accordionVariants({
          variant,
          selectionMode,
          selectionBehavior,
          size,
          radius,
          isDisabled,
          hideIndicator,
          disableAnimation,
          isCompact,
        }),
        className,
      )}
      {...props}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            expanded:
              selectionMode === "single"
                ? activeItems[0] === child.props.id
                : selectionMode === "multiple"
                  ? activeItems.includes(child.props.id)
                  : undefined,
            disabled: isDisabled || child.props.disabled,
            onClick: handleItemClick,
            itemDisableAnimation:
              disableAnimation || child.props.itemDisableAnimation,
            itemBorder: child.props.itemBorder,
          });
        }
        return child;
      })}
    </div>
  );
};

export { Accordion, AccordionItemComponent as AccordionItem };
