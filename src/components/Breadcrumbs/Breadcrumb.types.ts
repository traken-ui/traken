
export interface BreadcrumbProps {
  items: BreadcrumbItemType[];
  separator?: string | React.ReactNode;
  maxItems?: number;
  collapseAfter?: number;
  className?: string;
  color?: "default" | "primary" | "secondary" | 'success' | 'danger' | 'warning'; 
  size?: "sm" | "md" | "lg";
}

export type BreadcrumbItem = {
    label: string;
    href?: string;
    icon?: React.ReactNode;
    isCurrent?: boolean;
  };

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
