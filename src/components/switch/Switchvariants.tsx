import { cva } from "class-variance-authority";

export const toggleVariants = cva(
  "relative object-center flex items-center cursor-pointer transition-all duration-300 ease-in-out",
  {
    variants: {
      size: {
        sm: "w-10 h-5",
        md: "w-12 h-6",
        lg: "w-14 h-7",
        xl : "w-16 h-8",
        
      },
      checked: {
        true: "bg-blue-500",
        false: "bg-gray-300",
      },
      color:{

        base : "bg-gray-500",
        primary:"bg-blue-500",
        secondary:"bg-purple-500",
        success:"bg-green-500",
        warning:"bg-yellow-500",
        danger:"bg-red-500",
        transperent:"bg-transparent"

      }

    },
    compoundVariants:[

        {checked:false, color:"base", className:"bg-gray-500 dark:bg-gray-700"},
        {checked:false, color:"primary", className:"bg-blue-500 dark:bg-gray-700"},
        {checked:false, color:"secondary", className:"bg-purple-500 dark:bg-gray-700"},
        {checked:false, color:"success", className:"bg-green-500 dark:bg-gray-700"},
        {checked:false, color:"warning", className:"bg-yellow-500 dark:bg-gray-700"},
        {checked:false, color:"danger", className:"bg-red-500 dark:bg-gray-700"},
        {checked:false, color:"transperent", className:"bg-transparent border border-red-500 dark:border-red-300"},
        {checked:true, color:"transperent", className:"bg-transparent border border-green-500 dark:border-green-300"}

    ],
    defaultVariants: {
      size: "md",
      checked: false,
      color:"primary"
    },
  }
);


{/* <div className="group peer ring-0 bg-gradient-to-r from-rose-400 to-red-900  rounded-full outline-none duration-700 after:duration-300 w-24 h-12  shadow-md peer-checked:bg-gradient-to-r peer-checked:from-emerald-500 peer-checked:to-emerald-900 peer-focus:outline-none  after:content-[''] after:rounded-full after:absolute after:bg-gray-50 after:outline-none after:h-10 after:w-10 after:top-1 after:left-1  peer-checked:after:translate-x-12 peer-hover:after:scale-95"> */}