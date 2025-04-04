import React, { useState } from "react";
import { BreadcrumbProps } from "./Breadcrumb.types";
import { BreadcrumbItem } from "./BreadcrumbItem";

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  separator = ">",
  maxItems = 4,
  collapseAfter = 1,
  className = "",
}) => {
  const [expanded, setExpanded] = useState(false);

  const shouldTruncate = items.length > maxItems && !expanded;
  const currentIndex = items.findIndex((item) => item.isCurrent);

  const visibleItems = shouldTruncate
    ? [
        ...items.slice(0, collapseAfter),
        { label: "...", onClick: () => setExpanded(true) },
        ...items.slice(currentIndex - 1),
      ]
    : items;

  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-2">
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