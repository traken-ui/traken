import React, {
  useState,
  useRef,
  useEffect,
  createContext,
  useContext,
  ReactNode,
  KeyboardEvent,
  ReactElement,
  isValidElement,
  ComponentProps,
} from "react";
import { SelectVariantProps, selectVariants } from "./selectVariants";
import { cn } from "../../lib/utils"; // your utility for merging classNames

type OptionType = {
  value: string;
  children: ReactNode;
  disabled?: boolean;
};

type SelectContextType = {
  selectedValues: string[];
  selectOption: (value: string, display: ReactNode) => void;
  multi: boolean;
};

const SelectContext = createContext<SelectContextType | null>(null);

function Option({ value, children, disabled = false }: OptionType) {
  const context = useContext(SelectContext);
  if (!context) throw new Error("Option must be used inside Select");

  const { selectedValues, selectOption, multi } = context;
  const isSelected = selectedValues.includes(value);

  const handleClick = () => {
    if (!disabled) selectOption(value, children);
  };

  return (
    <div
      className={cn(
        "flex cursor-pointer items-center justify-between px-4 py-2",
        disabled
          ? "cursor-not-allowed"
          : "",
        isSelected && "font-semibold",
      )}
      onClick={handleClick}
      data-value={value}
      data-disabled={disabled}
    >
      {children}
      {isSelected && !multi && <span className="">✔</span>}
    </div>
  );
}

type SelectProps = {
  children: ReactNode;
  multi?: boolean;
  onChange?: (values: string[]) => void;
} & ComponentProps<"div"> &
  SelectVariantProps;

function Select({
  children,
  multi = false,
  onChange,
  variant,
  color,
  size,
  rounded,
  fullWidth,
  isDisabled,
  ...props
}: SelectProps) {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const [selectedDisplays, setSelectedDisplays] = useState<ReactNode[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilter] = useState("");
  const [focusIndex, setFocusIndex] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const allOptionsRef = useRef<HTMLDivElement[]>([]);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  const handleSelect = (value: string, display: ReactNode) => {
    if (multi) {
      const isSelected = selectedValues.includes(value);
      const newValues = isSelected
        ? selectedValues.filter((v) => v !== value)
        : [...selectedValues, value];

      const newDisplays = isSelected
        ? selectedDisplays.filter((_, i) => selectedValues[i] !== value)
        : [...selectedDisplays, display];

      setSelectedValues(newValues);
      setSelectedDisplays(newDisplays);
      onChange?.(newValues);
    } else {
      setSelectedValues([value]);
      setSelectedDisplays([display]);
      setIsOpen(false);
      onChange?.([value]);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (!isOpen) return;

    const options = allOptionsRef.current.filter((el) => {
      return el && !el.dataset.disabled;
    });

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setFocusIndex((prev) => (prev + 1) % options.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setFocusIndex((prev) => (prev === 0 ? options.length - 1 : prev - 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      const el = options[focusIndex];
      if (el) el.click();
    } else if (e.key === "Escape") {
      setIsOpen(false);
    }
  };

  const renderValue = () => {
    if (selectedDisplays.length === 0) return "Select an option";
    if (multi) {
      return (
        <div className="flex flex-wrap gap-1">
          {selectedDisplays.map((disp, idx) => (
            <span
              key={idx}
              className="rounded px-2 py-1 text-xs"
            >
              {disp}
            </span>
          ))}
        </div>
      );
    }
    return selectedDisplays[0];
  };

  const clonedChildren = React.Children.map(children, (child) => {
    if (!isValidElement(child)) return child;

    if (child.type === SelectGroup) {
      //@ts-ignore
      const groupOptions = React.Children.map(child.props.children, (opt) => {
        if (isValidElement(opt)) {
          return React.cloneElement(opt as ReactElement, {
            //@ts-ignore
            ref: (el: HTMLDivElement) => el && allOptionsRef.current.push(el),
          });
        }
        return null;
      });

      return React.cloneElement(child as ReactElement, {
        //@ts-ignore
        children: groupOptions,
      });
    }

    if (child.type === Option) {
      return React.cloneElement(child as ReactElement, {
        //@ts-ignore
        ref: (el: HTMLDivElement) => el && allOptionsRef.current.push(el),
      });
    }

    return child;
  });

  const filteredChildren = React.Children.map(clonedChildren, (child) => {
    if (!isValidElement(child)) return null;

    if (child.type === SelectGroup) {
      //@ts-ignore
      const groupOptions = React.Children.toArray(child.props.children).filter(
        (opt) =>
          isValidElement(opt) &&
          //@ts-ignore
          String(opt.props.children)
            .toLowerCase()
            .includes(filter.toLowerCase()),
      );

      return groupOptions.length > 0
        ? React.cloneElement(child as ReactElement, {
            //@ts-ignore
            children: groupOptions,
          })
        : null;
    }
    //@ts-ignore
    return String(child.props.children)
      .toLowerCase()
      .includes(filter.toLowerCase())
      ? child
      : null;
  });

  useEffect(() => {
    allOptionsRef.current = [];
    setFocusIndex(0);
  }, [isOpen, filter]);

  return (
    <SelectContext.Provider
      value={{
        selectedValues,
        selectOption: handleSelect,
        multi,
      }}
    >
      <div
        className={cn(
          selectVariants({
            variant,
            color,
            size,
            rounded,
            fullWidth,
            isDisabled,
          }),
          props.className,
        )}
        ref={ref}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        {...props}
      >
        <div className="relative">
          <div
            className="flex cursor-pointer items-center justify-between p-2"
            onClick={toggleOpen}
          >
            <span className={cn(
          selectVariants({
            color,
          }),`w-full border-none`,
          props.className,
        )}>
              {renderValue()}
            </span>
            <svg
              className={cn(
                "h-5 w-5 transition-transform duration-200",
                isOpen && "rotate-180",
              )}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>

          {isOpen && (
            <div className="absolute left-0 top-full z-50 mt-1 max-h-60 w-full overflow-auto rounded-md border shadow">
              <div className="p-2">
                <input
                  className="w-full rounded border px-2 py-1 text-sm"
                  placeholder="Search..."
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                />
              </div>
              {filteredChildren}
            </div>
          )}
        </div>
      </div>
    </SelectContext.Provider>
  );
}

type SelectGroupProps = {
  label: string;
  children: ReactNode;
};

function SelectGroup({ label, children }: SelectGroupProps) {
  return (
    <div className="py-1">
      <div className="px-4 py-1 uppercase">{label}</div>
      {children}
    </div>
  );
}

export { Select, Option, SelectGroup };
