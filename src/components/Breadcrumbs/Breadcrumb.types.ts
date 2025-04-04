
export type BreadcrumbItem = {
    label: string;
    href?: string;
    icon?: React.ReactNode;
    isCurrent?: boolean;
  };
  
//   export type BreadcrumbProps = {
//     items: BreadcrumbItem[];
//     separator?: React.ReactNode;
//     maxItems?: number; // For truncation
//     collapseAfter?: number; // Items to show before truncation
//     className?: string;
//   };

  import { BreadcrumbItemType } from "./BreadcrumbItem";

  export interface BreadcrumbProps {
    items: BreadcrumbItemType[];
    separator?: string | React.ReactNode;
    maxItems?: number;
    collapseAfter?: number;
    className?: string;
  }