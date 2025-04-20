import React, { useState } from "react";
import { BreadcrumbProps } from "./Breadcrumb.types";
import { BreadcrumbItem } from "./BreadcrumbItem";
import { breadcrumbVariants } from "./BreadcrumbVariants";
import { DropdownMenu } from "./DropdownMenu"; // Assume you have a Dropdown component

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  separator = "/",
  maxItems = 4,
  collapseAfter = 1,
  className = "",
  color = "default",
  size = "md",
  variant = "expand",
}) => {
  const [expanded, setExpanded] = useState(false);

  const shouldTruncate = items.length > maxItems && !expanded;
  const currentIndex = items.findIndex((item) => item.isCurrent);

  const visibleItems = shouldTruncate
    ? [
        ...items.slice(0, collapseAfter),
        { 
          label: "...", 
          onClick: variant === "expand" ? () => setExpanded(true) : undefined,
          href: undefined,
          ariaLabel: "Show more breadcrumb items",
          className: "cursor-pointer hover:underline",
          isDropdown: variant === "dropdown",
          dropdownItems: variant === "dropdown" ? items.slice(collapseAfter, currentIndex > 0 ? currentIndex : -1) : undefined
        },
        ...(currentIndex > 0 ? items.slice(currentIndex) : items.slice(-1))
      ]
    : items;

  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className={breadcrumbVariants({ color, size })}>
        {visibleItems.map((item, index) => (
          <React.Fragment key={index}>
            {item.isDropdown ? (
              <li className="flex items-center">
                <DropdownMenu 
                  trigger={
                    <BreadcrumbItem
                      item={{
                        label: item.label,
                        className: "cursor-pointer"
                      }}
                      isLast={false}
                      separator={separator}
                      hideSeparator={true}
                    />
                  }
                  items={(item.dropdownItems ?? []).map(dropdownItem => ({
                    label: dropdownItem.label,
                    onClick: dropdownItem.onClick,
                    href: dropdownItem.href
                  }))}
                />
                {!item.isLast && <span className="mx-1 text-gray-400">{separator}</span>}
              </li>
            ) : (
              <BreadcrumbItem
                item={item}
                isLast={index === visibleItems.length - 1}
                separator={separator}
              />
            )}
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
};