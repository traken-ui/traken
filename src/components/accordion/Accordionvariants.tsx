// import { cva } from "class-variance-authority";

// export const accordionVariants = cva("space-y-2", {
//   variants: {
//     // variant: {
//     //   light: "bg-white text-black border border-gray-300 shadow-sm",
//     //   shadow: "bg-white text-black shadow-lg border border-gray-200",
//     //   bordered: "border border-gray-400 bg-white text-black",
//     //   splitted: "divide-y divide-gray-300 bg-white text-black",
//     // },
//     variant: {
//       light:
//         "bg-white text-black border border-gray-300 shadow-sm transition-all duration-300 ease-in-out hover:shadow-md",
//       shadow:
//         "bg-white text-black shadow-lg border border-gray-200 transition-all duration-300 ease-in-out hover:shadow-xl",
//       bordered:
//         "border border-gray-400 bg-white text-black transition-all duration-300 ease-in-out hover:border-gray-500",
//       splitted:
//         "divide-y divide-gray-300 bg-white text-black transition-all duration-300 ease-in-out hover:bg-gray-50",
//       animated:
//         "bg-white text-black border border-gray-300 shadow-sm transition-all duration-500 transform hover:scale-[1.01]",
//     },
//     selectionMode: {
//       single: "max-h-[500px] overflow-auto",
//       multiple: "overflow-auto space-y-1",
//     },
//     // size: {
//     //   sm: "w-full max-w-xs text-sm px-3 py-2",
//     //   md: "w-full max-w-md text-base px-4 py-3",
//     //   lg: "w-full max-w-lg text-lg px-5 py-4",
//     // },
//     size: {
//       // Now includes text size, padding and width in each option
//       xs: "w-full max-w-xs text-xs px-2 py-1",
//       sm: "w-full max-w-sm text-sm px-3 py-2",
//       md: "w-full max-w-md text-base px-4 py-3",
//       // lg: "w-full max-w-lg text-lg px-5 py-4",
//       // xl: "w-full max-w-xl text-xl px-6 py-5",
//       // Specialized options
//       // compact: "w-full max-w-md text-sm px-2 py-1",
//       // wide: "w-full max-w-2xl text-base px-4 py-3",
//       // full: "w-full text-base px-4 py-3",
//       // auto: "w-auto text-base px-4 py-3",
//       // minimal: "w-full text-sm p-0",
//     },
//     radius: {
//       none: "rounded-none",
//       sm: "rounded-sm",
//       md: "rounded-md",
//       lg: "rounded-lg",
//     },
//     isDisabled: {
//       true: "opacity-50 pointer-events-none cursor-not-allowed",
//       false: "opacity-100 pointer-events-auto",
//     },
//     hideIndicator: {
//       true: "hidden",
//       false: "block",
//     },
//     disableAnimation: {
//       true: "transition-none",
//       false: "transition-all duration-300 ease-in-out",
//     },
//     isCompact: {
//       true: "py-1 px-2 text-sm space-y-1",
//       false: "py-3 px-4 text-base space-y-2",
//     },
//     // AccordionItem Specific Variants (Prefixed to avoid naming conflicts)
//     itemExpanded: {
//       // true: "bg-gray-100 shadow-md",
//       // false: "bg-white shadow-sm",
//       true: "bg-gray-100 shadow-md transition-all duration-300 ease-in-out w-full",
//       false:
//         "bg-white shadow-sm transition-all duration-300 ease-in-out w-full",
//     },
//     itemBorder: {
//       // none: "border-none",
//       // default: "border-t border-gray-300",
//       // rounded: "rounded-md border border-gray-300",
//       none: "border-none w-full",
//       default: "border-t border-gray-300 w-full",
//       rounded: "rounded-md border border-gray-300 w-full",
//     },
//     itemPadding: {
//       sm: "p-2",
//       md: "p-4",
//       lg: "p-6",
//     },
//     itemColor: {
//       // light: "text-gray-900",
//       // dark: "text-white bg-gray-900",
//       // primary: "text-primary-700 bg-primary-100",
//       // secondary: "text-secondary-700 bg-secondary-100",
//       light: "text-gray-900",
//       dark: "text-white bg-gray-900",
//       primary: "text-primary-700 bg-primary-100",
//       secondary: "text-secondary-700 bg-secondary-100",
//       gradient:
//         "bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-800 transition-colors duration-500",
//       slate: "text-slate-100 bg-slate-800",
//       navy: "text-blue-100 bg-blue-900",
//       emerald: "text-emerald-100 bg-emerald-900",
//       violet: "text-violet-100 bg-violet-900",
//       darkGradient:
//         "bg-gradient-to-r from-gray-900 to-slate-800 text-gray-100 transition-colors duration-500",
//       cyberpunk:
//         "bg-gradient-to-r from-purple-900 to-indigo-900 text-cyan-300 transition-colors duration-500",
//     },
//     itemIsDisabled: {
//       true: "opacity-50 pointer-events-none cursor-not-allowed",
//       false: "opacity-100 pointer-events-auto",
//     },
//     itemDisableAnimation: {
//       true: "transition-none",
//       false: "transition-all duration-300 ease-in-out",
//     },
//   },
//   defaultVariants: {
//     variant: "light",
//     selectionMode: "single",
//     size: "md",
//     radius: "md",
//     isDisabled: false,
//     hideIndicator: false,
//     disableAnimation: false,
//     isCompact: false,
//     itemExpanded: false,
//     itemBorder: "default",
//     itemPadding: "md",
//     itemColor: "light",
//     itemIsDisabled: false,
//     itemDisableAnimation: false,
//   },
// });




import { cva } from "class-variance-authority";

export const accordionVariants = cva("space-y-2", {
  variants: {
    variant: {
      light:
        "bg-white text-black border border-gray-300 shadow-sm transition-all duration-300 ease-in-out hover:shadow-md",
      shadow:
        "bg-white text-black shadow-lg border border-gray-200 transition-all duration-300 ease-in-out hover:shadow-xl",
      bordered:
        "border border-gray-400 bg-white text-black transition-all duration-300 ease-in-out hover:border-gray-500",
      splitted:
        "divide-y divide-gray-300 bg-white text-black transition-all duration-300 ease-in-out hover:bg-gray-50",
      animated:
        "bg-white text-black border border-gray-300 shadow-sm transition-all duration-500 transform hover:scale-[1.01]",
    },
    selectionMode: {
      single: "max-h-[500px] overflow-auto",
      multiple: "overflow-auto space-y-1",
    },
    size: {
      // Now includes text size, padding and width in each option
      xs: "w-full max-w-xs text-xs px-2 py-1",
      sm: "w-full max-w-sm text-sm px-3 py-2",
      md: "w-full max-w-md text-base px-4 py-3",
    },
    radius: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
    },
    isDisabled: {
      true: "opacity-50 pointer-events-none cursor-not-allowed",
      false: "opacity-100 pointer-events-auto",
    },
    hideIndicator: {
      true: "hidden",
      false: "block",
    },
    disableAnimation: {
      true: "transition-none",
      false: "transition-all duration-300 ease-in-out",
    },
    isCompact: {
      true: "py-1 px-2 text-sm space-y-1",
      false: "py-3 px-4 text-base space-y-2",
    },
    itemExpanded: {
      true: "bg-gray-100 shadow-md transition-all duration-300 ease-in-out w-full",
      false:
        "bg-white shadow-sm transition-all duration-300 ease-in-out w-full",
    },
    itemBorder: {
      none: "border-none w-full",
      default: "border-t border-gray-300 w-full",
      rounded: "rounded-md border border-gray-300 w-full",
    },
    itemPadding: {
      sm: "p-2",
      md: "p-4",
      lg: "p-6",
    },
    itemColor: {
      light: "text-gray-900",
      dark: "text-white bg-gray-900",
      primary: "text-primary-700 bg-primary-100",
      secondary: "text-secondary-700 bg-secondary-100",
      gradient:
        "bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-800 transition-colors duration-500",
      slate: "text-slate-100 bg-slate-800",
      navy: "text-blue-100 bg-blue-900",
      emerald: "text-emerald-100 bg-emerald-900",
      violet: "text-violet-100 bg-violet-900",
      darkGradient:
        "bg-gradient-to-r from-gray-900 to-slate-800 text-gray-100 transition-colors duration-500",
      cyberpunk:
        "bg-gradient-to-r from-purple-900 to-indigo-900 text-cyan-300 transition-colors duration-500",
    },
    itemIsDisabled: {
      true: "opacity-50 pointer-events-none cursor-not-allowed",
      false: "opacity-100 pointer-events-auto",
    },
    itemDisableAnimation: {
      true: "transition-none",
      false: "transition-all duration-300 ease-in-out",
    },
  },
  defaultVariants: {
    variant: "light",
    selectionMode: "single",
    size: "md",
    radius: "md",
    isDisabled: false,
    hideIndicator: false,
    disableAnimation: false,
    isCompact: false,
    itemExpanded: false,
    itemBorder: "default",
    itemPadding: "md",
    itemColor: "light",
    itemIsDisabled: false,
    itemDisableAnimation: false,
  },
});
