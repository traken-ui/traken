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

interface AccordionItemProps extends VariantProps<typeof accordionVariants> {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
  expanded?: boolean;
  disabled?: boolean;
  onClick?: (itemId: string, expanded: boolean) => void;
}

const AccordionItemComponent: React.FC<AccordionItemProps> = ({
  id,
  title,
  description,
  icon,
  className,
  expanded: controlledExpanded,
  disabled = false,
  itemPadding = "md",
  itemColor = "light",
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
          itemPadding,
          itemColor,
          itemBorder,
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
        <span className="text-xl">{icon ? icon : isOpen ? "−" : "+"}</span>
      </button>

      <div
        className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
          isOpen ? "min-h-fit" : "max-h-0"
        }`}
      >
        <p className="pt-2 text-sm text-gray-700">{description}</p>
      </div>
    </div>
  );
};

const Accordion: React.FC<AccordionProps> = ({
  children,
  variant = "light",
  selectionMode = "single",
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
            itemBorder: child.props.itemBorder,
            itemPadding: child.props.itemPadding,
            itemColor: child.props.itemColor,
            itemDisableAnimation:
              disableAnimation || child.props.disableAnimation,
          });
        }
        return child;
      })}
    </div>
  );
};

export { Accordion, AccordionItemComponent as AccordionItem };

// import React, { useState, useEffect, useCallback, useRef } from "react";
// import { VariantProps, cva } from "class-variance-authority";
// import { accordionVariants } from "./Accordionvariants";
// import { cn } from "../../lib/utils";

// // Add accordionRootStyles
// export const accordionRootStyles = cva("", {
//   variants: {
//     size: {
//       xs: "w-full max-w-xs",
//       sm: "w-full max-w-sm",
//       md: "w-full max-w-md",
//       lg: "w-full max-w-lg",
//       xl: "w-full max-w-xl",
//       compact: "w-full max-w-md",
//       wide: "w-full max-w-2xl",
//       full: "w-full",
//       auto: "w-auto",
//       minimal: "w-full",
//     },
//   },
//   defaultVariants: {
//     size: "md",
//   },
// });

// // Add accordionItemStyles
// export const accordionItemStyles = cva("", {
//   variants: {
//     size: {
//       xs: "w-full",
//       sm: "w-full",
//       md: "w-full",
//       lg: "w-full",
//       xl: "w-full",
//       compact: "w-full",
//       wide: "w-full",
//       full: "w-full",
//       auto: "w-full",
//       minimal: "w-full",
//     },
//   },
//   defaultVariants: {
//     size: "md",
//   },
// });

// interface AccordionProps
//   extends VariantProps<typeof accordionVariants>,
//     VariantProps<typeof accordionRootStyles> {
//   children:
//     | React.ReactElement<AccordionItemProps>
//     | React.ReactElement<AccordionItemProps>[];
//   className?: string;
//   onActiveItemsChange?: (activeItems: string[]) => void;
// }

// interface AccordionItemProps
//   extends VariantProps<typeof accordionVariants>,
//     VariantProps<typeof accordionItemStyles> {
//   id: string;
//   title: string;
//   description: string;
//   icon?: React.ReactNode;
//   className?: string;
//   expanded?: boolean;
//   disabled?: boolean;
//   onClick?: (itemId: string, expanded: boolean) => void;
// }

// const AccordionItemComponent: React.FC<AccordionItemProps> = ({
//   id,
//   title,
//   description,
//   icon,
//   className,
//   expanded: controlledExpanded,
//   disabled = false,
//   itemPadding = "md",
//   itemColor = "light",
//   itemBorder = "default",
//   itemDisableAnimation = false,
//   size,
//   onClick,
//   ...props
// }) => {
//   const [isOpen, setIsOpen] = useState(controlledExpanded || false);
//   const contentRef = useRef<HTMLDivElement>(null);
//   const isControlled = controlledExpanded !== undefined;

//   useEffect(() => {
//     if (isControlled) {
//       setIsOpen(controlledExpanded);
//     }
//   }, [controlledExpanded, isControlled]);

//   const handleToggle = () => {
//     if (!disabled) {
//       if (!isControlled) {
//         setIsOpen((prev) => !prev);
//       }
//       onClick?.(id, !isOpen);
//     }
//   };

//   // Apply item styles based on size
//   const itemClasses = accordionItemStyles({ size });

//   return (
//     <div
//       className={cn(
//         itemClasses,
//         accordionVariants({
//           itemExpanded: isOpen,
//           itemPadding,
//           itemColor,
//           itemBorder,
//           itemIsDisabled: disabled,
//           itemDisableAnimation,
//         }),
//         className,
//       )}
//       {...props}
//     >
//       <button
//         onClick={handleToggle}
//         className="flex w-full items-center justify-between py-2 font-medium"
//         aria-expanded={!!isOpen}
//         disabled={disabled}
//       >
//         <h3 className="text-lg">{title}</h3>
//         <span className="text-xl">{icon ? icon : isOpen ? "−" : "+"}</span>
//       </button>

//       <div
//         className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
//           isOpen ? "min-h-fit" : "max-h-0"
//         }`}
//       >
//         <p className="pt-2 text-sm text-gray-700">{description}</p>
//       </div>
//     </div>
//   );
// };

// const Accordion: React.FC<AccordionProps> = ({
//   children,
//   variant = "light",
//   selectionMode = "none",
//   size = "md",
//   radius = "md",
//   isDisabled = false,
//   hideIndicator = false,
//   disableAnimation = false,
//   isCompact = false,
//   className,
//   onActiveItemsChange,
//   ...props
// }) => {
//   const [activeItems, setActiveItems] = useState<string[]>([]);

//   const handleItemClick = useCallback(
//     (itemId: string, expanded: boolean) => {
//       if (selectionMode === "single") {
//         setActiveItems(expanded ? [itemId] : []);
//       } else if (selectionMode === "multiple") {
//         setActiveItems((prevActive) =>
//           expanded
//             ? [...prevActive, itemId]
//             : prevActive.filter((id) => id !== itemId),
//         );
//       }
//     },
//     [selectionMode],
//   );

//   useEffect(() => {
//     if (onActiveItemsChange) {
//       onActiveItemsChange(activeItems);
//     }
//   }, [activeItems, onActiveItemsChange]);

//   // Apply root styles based on size
//   const rootClasses = accordionRootStyles({ size });

//   return (
//     <div
//       className={cn(
//         rootClasses,
//         accordionVariants({
//           variant,
//           selectionMode,
//           size,
//           radius,
//           isDisabled,
//           hideIndicator,
//           disableAnimation,
//           isCompact,
//         }),
//         className,
//       )}
//       {...props}
//     >
//       {React.Children.map(children, (child) => {
//         if (React.isValidElement(child)) {
//           return React.cloneElement(child, {
//             expanded:
//               selectionMode === "single"
//                 ? activeItems[0] === child.props.id
//                 : selectionMode === "multiple"
//                   ? activeItems.includes(child.props.id)
//                   : undefined,
//             disabled: isDisabled || child.props.disabled,
//             onClick: handleItemClick,
//             itemBorder: child.props.itemBorder,
//             itemPadding: child.props.itemPadding,
//             itemColor: child.props.itemColor,
//             itemDisableAnimation:
//               disableAnimation || child.props.disableAnimation,
//             size: size, // Pass the size prop to accordion items
//           });
//         }
//         return child;
//       })}
//     </div>
//   );
// };

// export { Accordion, AccordionItemComponent as AccordionItem };
