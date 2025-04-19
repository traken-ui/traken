import React, { useState } from "react";
import { BreadcrumbProps } from "./Breadcrumb.types";
import { BreadcrumbItem } from "./BreadcrumbItem";
import { breadcrumbVariants } from "./BreadcrumbVariants";

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  separator = "/",
  maxItems = 4,
  collapseAfter = 1,
  className = "",
  color = "default",
  size = "md",
}) => {
  const [expanded, setExpanded] = useState(false);

  const shouldTruncate = items.length > maxItems && !expanded;
  const currentIndex = items.findIndex((item) => item.isCurrent);

  const visibleItems = shouldTruncate
    ? [
        ...items.slice(0, collapseAfter),
        { 
          label: "...", 
          onClick: () => setExpanded(true),
          ariaLabel: "Show more breadcrumb items"
        },
        ...(currentIndex > 0 ? items.slice(currentIndex) : items.slice(-1))
      ]
    : items;

  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className={breadcrumbVariants({ color, size })}>
        {visibleItems.map((item, index) => (
          <BreadcrumbItem
            key={index}
            item={item}
            isLast={index === visibleItems.length - 1}
            separator={separator}
          />
        ))}
      </ol>
    </nav>
  );
};