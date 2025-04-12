import { cva } from "class-variance-authority";

export const carouselVariants = cva(
  "relative overflow-hidden", 
  {
    variants: {
      transitionEffect: {
        slide: "transition-transform duration-500 ease-in-out",
        fade: "transition-opacity duration-500 ease-in-out",
        none: "",
      },
      navigation: {
        inside: "absolute inset-0 flex items-center justify-between p-4",
        outside: "relative flex items-center justify-between mt-4",
        none: "hidden",
      },
      navigationStyle: {
        arrows: "absolute top-1/2 -translate-y-1/2 flex items-center justify-between w-full px-4 text-white z-20",
        none: "hidden",
      },
      indicatorPosition: {
        dots: "absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2",
        bars: "absolute bottom-4 left-0 w-full flex space-x-1",
        none: "hidden",
        numbers: "flex space-x-2 justify-center mt-4",
      },
      indicatorStyle: {
        dots: "flex space-x-2", 
        bars: "flex space-x-1", 
        numbers: "flex items-center space-x-2", 
        none: "",
      },
      size: {
        sm: "h-40 w-full",
        md: "h-64 w-full",
        lg: "h-96 w-full",
        xl: "h-128 w-full", 
        auto: "h-auto w-full",   
        screenMd: "h-[50vh] w-full md:w-1/2", 
        full: "h-screen w-screen",
        fullWidth: "w-full",
        fullHeight: "h-screen",
      },
      radius: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
      },
      autoplayEnabled: {
        true: "",
        false: "",
      },
      loopEnabled: {
        true: "",
        false: "",
      },
      visualStyle: {
        basic: "",
        elegant: "shadow-md border border-gray-200 rounded-md",
        minimalist: "border-b border-gray-300",
      },
    },
    defaultVariants: {
      transitionEffect: "slide",
      navigation: "inside",
      navigationStyle: "arrows",
      indicatorPosition: "dots",
      indicatorStyle: "dots",
      size: "auto",
      radius: "md",
      autoplayEnabled: false,
      loopEnabled: false,
      visualStyle: "basic",
    },
  },
);
