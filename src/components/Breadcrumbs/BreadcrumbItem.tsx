import React from "react";
import { breadcrumbItemVariants } from "./BreadcrumbVariants";

export interface BreadcrumbItemType {
  label: string;
  href?: string;
  onClick?: () => void;
  isCurrent?: boolean;
  icon?: React.ReactNode;
}

export interface BreadcrumbItemProps {
  item: BreadcrumbItemType;
  isLast: boolean;
  separator: string | React.ReactNode;
}

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
            className={breadcrumbItemVariants({ active: false })}
          >
            {item.icon && <span className="mr-1">{item.icon}</span>}
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