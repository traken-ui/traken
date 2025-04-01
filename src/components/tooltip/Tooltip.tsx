import React, { useState } from "react";
import { cn } from "../../lib/utils";
import { tooltipVariants } from "./TooltipVariants";

interface TooltipProps {
    children: React.ReactNode;
    text: string;
    position?: "top" | "bottom" | "left" | "right";
}

const Tooltip: React.FC<TooltipProps> = ({
    text,
    position = "top",
    children,
}) => {
    const [visible, setVisible] = useState(false);

    return (
        <div
            className="relative flex items-center"
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
        >
            {children}
            {visible && (
                <div className={cn(tooltipVariants({ position }))}>{text}</div>
            )}
        </div>
    );
};

export default Tooltip;
