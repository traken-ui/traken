import React from "react";

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
            className="text-blue-600 hover:underline"
            aria-current={item.isCurrent ? "page" : undefined}
          >
            {item.label}
          </a>
          <span className="mx-2">{separator}</span>
        </>
      ) : (
        <span className="text-gray-500" aria-current="page">
          {item.label}
        </span>
      )}
    </li>
  );
};