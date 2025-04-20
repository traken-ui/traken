import React from "react";
import { breadcrumbItemVariants } from "./BreadcrumbVariants";
import { BreadcrumbItemProps } from "./Breadcrumb.types";


export const BreadcrumbItem: React.FC<BreadcrumbItemProps & { hideSeparator?: boolean }> = ({
  item,
  isLast,
  separator,
  hideSeparator = false,
}) => {
  return (
    <li className="flex items-center">
      {!isLast ? (
        <>
          <a
            href={item.href}
            onClick={item.onClick}
            className={`${breadcrumbItemVariants({ active: false })} ${item.className || ''} flex items-center`}
            aria-label={item.ariaLabel}
          >
            {item.icon && 
              <span className="mr-1.5 flex items-center h-full">
                {item.icon}
              </span>
            }
            {item.label}
          </a>
          {!hideSeparator && <span className="mx-1 text-gray-400">{separator}</span>}
        </>
      ) : (
        <span className={`${breadcrumbItemVariants({ active: true })} ${item.className || ''}`}>
          {item.icon && <span className="mr-1">{item.icon}</span>}
          {item.label}
        </span>
      )}
    </li>
  );
};