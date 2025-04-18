import React, {
    useState,
    useEffect,
    useRef,
    createContext,
    useContext,
} from "react";
import { cn } from "../../lib/utils";
import { modalVariants } from "./ModalVariants";
import "./styles/index.css"

type ModalContextType = {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
    variant: "popup" | "drawer" | "dialog";
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

interface ModalProps {
    children: React.ReactNode;
    color?: "base" | "primary" | "secondary" | "success" | "warning" | "danger" |"subtle" | "transparent";
    size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full";
    radius?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "full";
    shadow?: "none" | "sm" | "md" | "lg" | "xl";
    isOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    variant?: "popup" | "drawer" | "dialog";
    position?: "center" | "top" | "right" | "bottom" | "left";
    overlayColor?: "dark" | "light" | "none";
    animation?: "scale" | "fade" | "slide" | "none";
}

function Modal({
    children,
    color = "base",
    size = "md",
    radius = "md",
    shadow = "lg",
    isOpen: externalIsOpen,
    onOpenChange,
    variant = "popup",
    position = "center",
    overlayColor = "dark",
    animation = "scale",
}: ModalProps) {
    const [isOpen, setIsOpen] = useState(externalIsOpen || false);
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (externalIsOpen !== undefined) {
            setIsOpen(externalIsOpen);
        }
    }, [externalIsOpen]);

    const handleOpenChange = (open: boolean) => {
        setIsOpen(open);
        if (onOpenChange) {
            onOpenChange(open);
        }
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                modalRef.current &&
                !modalRef.current.contains(event.target as Node)
            ) {
                handleOpenChange(false);
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    useEffect(() => {
        const handleEscKey = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                handleOpenChange(false);
            }
        };

        if (isOpen) {
            document.addEventListener("keydown", handleEscKey);
        }

        return () => {
            document.removeEventListener("keydown", handleEscKey);
        };
    }, [isOpen]);

    const positionClasses = {
        center: "items-center justify-center",
        top: "items-start justify-center pt-16",
        right: "items-center justify-end pr-16",
        bottom: "items-end justify-center pb-16",
        left: "items-center justify-start pl-16",
    };

    const overlayClasses = {
        dark: "bg-black/50",
        light: "bg-white/30",
        none: "",
    };

    const variantClasses = {
        popup: "",
        drawer:
            position === "right"
                ? "h-full right-0 fixed"
                : position === "left"
                  ? "h-full left-0 fixed"
                  : position === "top"
                    ? "w-full top-0 fixed"
                    : position === "bottom"
                      ? "w-full bottom-0 fixed"
                      : "",
        dialog: "border border-gray-300",
    };

    if (!isOpen) return null;

    return (
        <ModalContext.Provider
            value={{ isOpen, setIsOpen: handleOpenChange, variant }}
        >
            <div
                className={cn(
                    "fixed inset-0 z-50 flex transition-all duration-300 ease-in-out",
                    positionClasses[position],
                    overlayClasses[overlayColor],
                )}
            >
                <div
                    ref={modalRef}
                    className={cn(
                        modalVariants({
                            color,
                            size,
                            radius,
                            shadow,
                            animation,
                        }),
                        variantClasses[variant],
                        "animate-fade-in-up max-h-[90vh] overflow-auto",
                    )}
                >
                    {children}
                </div>
            </div>
        </ModalContext.Provider>
    );
}


function useModalContext() {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error(
            "Modal components must be used within a Modal component",
        );
    }
    return context;
}

interface ModalTriggerProps {
    children: React.ReactNode;
    className?: string;
}

function ModalTrigger({ children, className }: ModalTriggerProps) {
    const { setIsOpen } = useModalContext();

    return (
        <div
            className={cn("cursor-pointer", className)}
            onClick={() => setIsOpen(true)}
        >
            {children}
        </div>
    );
}

interface ModalCloseProps {
    children?: React.ReactNode;
    className?: string;
}

function ModalClose({ children, className }: ModalCloseProps) {
    const { setIsOpen } = useModalContext();

    return (
        <div
            className={cn("cursor-pointer", className)}
            onClick={() => setIsOpen(false)}
        >
            {children || (
                <button className="rounded-full p-1 hover:bg-gray-100">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            )}
        </div>
    );
}

interface ModalContentProps {
    children: React.ReactNode;
    className?: string;
}

function ModalContent({ children, className }: ModalContentProps) {
    const { variant } = useModalContext();

    return (
        <div
            className={cn(
                "relative",
                variant === "popup"
                    ? "p-4"
                    : variant === "drawer"
                      ? "p-6"
                      : "p-5",
                className,
            )}
        >
            {children}
        </div>
    );
}

interface ModalHeaderProps {
    children: React.ReactNode;
    className?: string;
    showCloseButton?: boolean;
}

function ModalHeader({
    children,
    className,
    showCloseButton = true,
}: ModalHeaderProps) {
    return (
        <div
            className={cn("mb-4 flex items-center justify-between", className)}
        >
            <div className="text-lg font-semibold">{children}</div>
            {showCloseButton && <ModalClose />}
        </div>
    );
}

interface ModalBodyProps {
    children: React.ReactNode;
    className?: string;
}

function ModalBody({ children, className }: ModalBodyProps) {
    return <div className={cn("py-2", className)}>{children}</div>;
}

interface ModalFooterProps {
    children: React.ReactNode;
    className?: string;
}

function ModalFooter({ children, className }: ModalFooterProps) {
    return (
        <div
            className={cn(
                "mt-6 flex items-center justify-end gap-2 border-t pt-4",
                className,
            )}
        >
            {children}
        </div>
    );
}

export {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    ModalTrigger,
    ModalClose,
};
