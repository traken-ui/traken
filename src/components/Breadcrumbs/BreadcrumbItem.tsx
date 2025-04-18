import React from "react";
import { breadcrumbItemVariants } from "./BreadcrumbVariants";
import { BreadcrumbItemProps } from "./Breadcrumb.types";


export const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({
  item,
  isLast,
  separator,
}) => {
  return (
    <li className="flex items-center">
      {!isLast ? (
        <>
          <a
            href={item.href}
            onClick={item.onClick}
            className={`${breadcrumbItemVariants({ active: false })} flex items-center`}
          >
            {item.icon && 
              <span className="mr-1.5 flex items-center h-full">
                {item.icon}
              </span>
            }
            {item.label}
          </a>
          <span className="mx-1 text-gray-400">{separator}</span>
        </>
      ) : (
        <span className={breadcrumbItemVariants({ active: true })}>
          {item.icon && <span className="mr-1">{item.icon}</span>}
          {item.label}
        </span>
      )}
    </li>
  );
};