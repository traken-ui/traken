// import React, { useState } from "react";
// import type { Meta, StoryObj } from "@storybook/react";
// import { Accordion, AccordionItem } from "../components/accordion/Accordion";

// const meta: Meta<typeof Accordion> = {
//   title: "Components/Accordion",
//   component: Accordion,
//   parameters: {
//     layout: "centered",
//   },
//   tags: ["autodocs"],
//   argTypes: {
//     variant: {
//       control: "select",
//       options: ["light", "shadow", "bordered", "splitted", "animated"],
//       description: "Visual style of the accordion",
//     },
//     selectionMode: {
//       control: "radio",
//       options: ["single", "multiple"],
//       description: "Controls if one or multiple items can be expanded at once",
//     },
//     size: {
//       control: "select",
//       options: ["xs", "sm", "md"],
//       description: "Size of the accordion",
//     },
//     radius: {
//       control: "select",
//       options: ["none", "sm", "md", "lg"],
//       description: "Border radius of the accordion",
//     },
//     isDisabled: {
//       control: "boolean",
//       description: "Disables all accordion items",
//     },
//     disableAnimation: {
//       control: "boolean",
//       description: "Disables all animations",
//     },
//     isCompact: {
//       control: "boolean",
//       description: "Reduces padding and spacing",
//     },
//     hideIndicator: {
//       control: "boolean",
//       description: "Hides the expand/collapse indicator",
//     },
//   },
// };

// export default meta;
// type Story = StoryObj<typeof Accordion>;

// // Base example
// export const Default: Story = {
//   args: {
//     variant: "light",
//     selectionMode: "single",
//     size: "md",
//     radius: "md",
//   },
//   render: (args) => (
//     <Accordion {...args}>
//       <AccordionItem
//         id="item-1"
//         title="What is an accordion component?"
//         description="An accordion is a vertically stacked set of interactive headings that each reveal a section of content. They're commonly used to reduce the need to scroll when presenting multiple sections of content on a single page."
//       />
//       <AccordionItem
//         id="item-2"
//         title="When should I use accordions?"
//         description="Use accordions when you need to save vertical space by hiding content until needed, particularly with a large amount of content that's not all needed at once."
//       />
//       <AccordionItem
//         id="item-3"
//         title="Any accessibility considerations?"
//         description="Ensure accordion headers are properly marked up with buttons and use aria-expanded to indicate the state to screen readers. Our component handles this for you automatically."
//       />
//     </Accordion>
//   ),
// };

// // Example showing all visual variants
// export const AllVariants: Story = {
//   parameters: {
//     controls: { exclude: ["variant"] },
//   },
//   render: () => (
//     <div className="flex flex-col space-y-8">
//       <div>
//         <h3 className="mb-2 text-sm font-medium text-gray-500">
//           Light Variant
//         </h3>
//         <Accordion variant="light">
//           <AccordionItem
//             id="light-1"
//             title="Light Variant Example"
//             description="This is the default light variant with minimal styling."
//           />
//         </Accordion>
//       </div>

//       <div>
//         <h3 className="mb-2 text-sm font-medium text-gray-500">
//           Shadow Variant
//         </h3>
//         <Accordion variant="shadow">
//           <AccordionItem
//             id="shadow-1"
//             title="Shadow Variant Example"
//             description="This variant uses shadow effects for depth."
//           />
//         </Accordion>
//       </div>

//       <div>
//         <h3 className="mb-2 text-sm font-medium text-gray-500">
//           Bordered Variant
//         </h3>
//         <Accordion variant="bordered">
//           <AccordionItem
//             id="bordered-1"
//             title="Bordered Variant Example"
//             description="This variant emphasizes borders for definition."
//           />
//         </Accordion>
//       </div>

//       <div>
//         <h3 className="mb-2 text-sm font-medium text-gray-500">
//           Splitted Variant
//         </h3>
//         <Accordion variant="splitted">
//           <AccordionItem
//             id="splitted-1"
//             title="Splitted Variant Example"
//             description="This variant uses dividers between items."
//           />
//           <AccordionItem
//             id="splitted-2"
//             title="Second Item"
//             description="Notice the divider between these items."
//           />
//         </Accordion>
//       </div>

//       <div>
//         <h3 className="mb-2 text-sm font-medium text-gray-500">
//           Animated Variant
//         </h3>
//         <Accordion variant="animated">
//           <AccordionItem
//             id="animated-1"
//             title="Animated Variant Example"
//             description="This variant includes scale transitions on hover."
//           />
//         </Accordion>
//       </div>
//     </div>
//   ),
// };

// // Example showing different selection modes
// export const SelectionModes: Story = {
//   parameters: {
//     controls: { exclude: ["selectionMode"] },
//   },
//   render: () => (
//     <div className="flex flex-col space-y-8">
//       <div>
//         <h3 className="mb-2 text-sm font-medium text-gray-500">
//           Single Selection Mode
//         </h3>
//         <Accordion selectionMode="single">
//           <AccordionItem
//             id="single-1"
//             title="First Item (Only one can be open)"
//             description="In single selection mode, opening one item will close any previously opened item."
//           />
//           <AccordionItem
//             id="single-2"
//             title="Second Item"
//             description="Try opening this while the first item is open."
//           />
//           <AccordionItem
//             id="single-3"
//             title="Third Item"
//             description="Only one item can be expanded at a time."
//           />
//         </Accordion>
//       </div>

//       <div>
//         <h3 className="mb-2 text-sm font-medium text-gray-500">
//           Multiple Selection Mode
//         </h3>
//         <Accordion selectionMode="multiple">
//           <AccordionItem
//             id="multiple-1"
//             title="First Item (Multiple can be open)"
//             description="In multiple selection mode, multiple items can be open simultaneously."
//           />
//           <AccordionItem
//             id="multiple-2"
//             title="Second Item"
//             description="You can open this without closing other items."
//           />
//           <AccordionItem
//             id="multiple-3"
//             title="Third Item"
//             description="All items can be expanded at once if desired."
//           />
//         </Accordion>
//       </div>
//     </div>
//   ),
// };

// // Example showing different sizes
// export const Sizes: Story = {
//   parameters: {
//     controls: { exclude: ["size"] },
//   },
//   render: () => (
//     <div className="flex flex-col space-y-8">
//       <div>
//         <h3 className="mb-2 text-sm font-medium text-gray-500">
//           Extra Small (xs)
//         </h3>
//         <Accordion size="xs">
//           <AccordionItem
//             id="xs-1"
//             title="XS Size Accordion"
//             description="This accordion uses the extra small (xs) size variant."
//           />
//         </Accordion>
//       </div>

//       <div>
//         <h3 className="mb-2 text-sm font-medium text-gray-500">Small (sm)</h3>
//         <Accordion size="sm">
//           <AccordionItem
//             id="sm-1"
//             title="Small Size Accordion"
//             description="This accordion uses the small (sm) size variant."
//           />
//         </Accordion>
//       </div>

//       <div>
//         <h3 className="mb-2 text-sm font-medium text-gray-500">Medium (md)</h3>
//         <Accordion size="md">
//           <AccordionItem
//             id="md-1"
//             title="Medium Size Accordion"
//             description="This accordion uses the medium (md) size variant, which is the default."
//           />
//         </Accordion>
//       </div>
//     </div>
//   ),
// };

// // Example showing disabled state
// export const DisabledState: Story = {
//   render: () => (
//     <div className="flex flex-col space-y-8">
//       <div>
//         <h3 className="mb-2 text-sm font-medium text-gray-500">
//           Disabled Entire Accordion
//         </h3>
//         <Accordion isDisabled={true}>
//           <AccordionItem
//             id="disabled-accordion-1"
//             title="Disabled Item 1"
//             description="This entire accordion is disabled via the isDisabled prop on the Accordion."
//           />
//           <AccordionItem
//             id="disabled-accordion-2"
//             title="Disabled Item 2"
//             description="All items in this accordion are disabled."
//           />
//         </Accordion>
//       </div>

//       <div>
//         <h3 className="mb-2 text-sm font-medium text-gray-500">
//           Individual Disabled Items
//         </h3>
//         <Accordion>
//           <AccordionItem
//             id="individual-1"
//             title="Regular Item"
//             description="This item is enabled and can be clicked."
//           />
//           <AccordionItem
//             id="individual-2"
//             title="Disabled Item"
//             description="Only this specific item is disabled."
//             disabled={true}
//           />
//           <AccordionItem
//             id="individual-3"
//             title="Regular Item"
//             description="This item is enabled and can be clicked."
//           />
//         </Accordion>
//       </div>
//     </div>
//   ),
// };

import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Accordion, AccordionItem } from "../components/accordion/Accordion";

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["light", "shadow", "bordered", "splitted", "animated"],
      description: "Visual style of the accordion",
    },
    selectionMode: {
      control: "radio",
      options: ["single", "multiple"],
      description: "Controls if one or multiple items can be expanded at once",
    },
    selectionBehavior: {
      control: "select",
      options: [],
      description: "Determines the selection behavior (optional)",
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md"],
      description: "Size of the accordion",
    },
    radius: {
      control: "select",
      options: ["none", "sm", "md", "lg"],
      description: "Border radius of the accordion",
    },
    isDisabled: {
      control: "boolean",
      description: "Disables all accordion items",
    },
    disableAnimation: {
      control: "boolean",
      description: "Disables all animations",
    },
    isCompact: {
      control: "boolean",
      description: "Reduces padding and spacing",
    },
    hideIndicator: {
      control: "boolean",
      description: "Hides the expand/collapse indicator",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

// Base example
export const Default: Story = {
  args: {
    variant: "light",
    selectionMode: "single",
    size: "md",
    radius: "md",
  },
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem
        id="item-1"
        title="What is an accordion component?"
        description="An accordion is a vertically stacked set of interactive headings that each reveal a section of content. They're commonly used to reduce the need to scroll when presenting multiple sections of content on a single page."
      />
      <AccordionItem
        id="item-2"
        title="When should I use accordions?"
        description="Use accordions when you need to save vertical space by hiding content until needed, particularly with a large amount of content that's not all needed at once."
      />
      <AccordionItem
        id="item-3"
        title="Any accessibility considerations?"
        description="Ensure accordion headers are properly marked up with buttons and use aria-expanded to indicate the state to screen readers. Our component handles this for you automatically."
      />
    </Accordion>
  ),
};

// Example showing all visual variants
export const AllVariants: Story = {
  parameters: {
    controls: { exclude: ["variant"] },
  },
  render: () => (
    <div className="flex flex-col space-y-8">
      <div>
        <h3 className="mb-2 text-sm font-medium text-gray-500">
          Light Variant
        </h3>
        <Accordion variant="light">
          <AccordionItem
            id="light-1"
            title="Light Variant Example"
            description="This is the default light variant with minimal styling."
          />
        </Accordion>
      </div>

      <div>
        <h3 className="mb-2 text-sm font-medium text-gray-500">
          Shadow Variant
        </h3>
        <Accordion variant="shadow">
          <AccordionItem
            id="shadow-1"
            title="Shadow Variant Example"
            description="This variant uses shadow effects for depth."
          />
        </Accordion>
      </div>

      <div>
        <h3 className="mb-2 text-sm font-medium text-gray-500">
          Bordered Variant
        </h3>
        <Accordion variant="bordered">
          <AccordionItem
            id="bordered-1"
            title="Bordered Variant Example"
            description="This variant emphasizes borders for definition."
          />
        </Accordion>
      </div>

      <div>
        <h3 className="mb-2 text-sm font-medium text-gray-500">
          Splitted Variant
        </h3>
        <Accordion variant="splitted">
          <AccordionItem
            id="splitted-1"
            title="Splitted Variant Example"
            description="This variant uses dividers between items."
          />
          <AccordionItem
            id="splitted-2"
            title="Second Item"
            description="Notice the divider between these items."
          />
        </Accordion>
      </div>

      <div>
        <h3 className="mb-2 text-sm font-medium text-gray-500">
          Animated Variant
        </h3>
        <Accordion variant="animated">
          <AccordionItem
            id="animated-1"
            title="Animated Variant Example"
            description="This variant includes scale transitions on hover."
          />
        </Accordion>
      </div>
    </div>
  ),
};

// Example showing different selection modes
export const SelectionModes: Story = {
  parameters: {
    controls: { exclude: ["selectionMode"] },
  },
  render: () => (
    <div className="flex flex-col space-y-8">
      <div>
        <h3 className="mb-2 text-sm font-medium text-gray-500">
          Single Selection Mode
        </h3>
        <Accordion selectionMode="single">
          <AccordionItem
            id="single-1"
            title="First Item (Only one can be open)"
            description="In single selection mode, opening one item will close any previously opened item."
          />
          <AccordionItem
            id="single-2"
            title="Second Item"
            description="Try opening this while the first item is open."
          />
          <AccordionItem
            id="single-3"
            title="Third Item"
            description="Only one item can be expanded at a time."
          />
        </Accordion>
      </div>

      <div>
        <h3 className="mb-2 text-sm font-medium text-gray-500">
          Multiple Selection Mode
        </h3>
        <Accordion selectionMode="multiple">
          <AccordionItem
            id="multiple-1"
            title="First Item (Multiple can be open)"
            description="In multiple selection mode, multiple items can be open simultaneously."
          />
          <AccordionItem
            id="multiple-2"
            title="Second Item"
            description="You can open this without closing other items."
          />
          <AccordionItem
            id="multiple-3"
            title="Third Item"
            description="All items can be expanded at once if desired."
          />
        </Accordion>
      </div>
    </div>
  ),
};

// Example showing different sizes
export const Sizes: Story = {
  parameters: {
    controls: { exclude: ["size"] },
  },
  render: () => (
    <div className="flex flex-col space-y-8">
      <div>
        <h3 className="mb-2 text-sm font-medium text-gray-500">
          Extra Small (xs)
        </h3>
        <Accordion size="xs">
          <AccordionItem
            id="xs-1"
            title="XS Size Accordion"
            description="This accordion uses the extra small (xs) size variant."
          />
        </Accordion>
      </div>

      <div>
        <h3 className="mb-2 text-sm font-medium text-gray-500">Small (sm)</h3>
        <Accordion size="sm">
          <AccordionItem
            id="sm-1"
            title="Small Size Accordion"
            description="This accordion uses the small (sm) size variant."
          />
        </Accordion>
      </div>

      <div>
        <h3 className="mb-2 text-sm font-medium text-gray-500">Medium (md)</h3>
        <Accordion size="md">
          <AccordionItem
            id="md-1"
            title="Medium Size Accordion"
            description="This accordion uses the medium (md) size variant, which is the default."
          />
        </Accordion>
      </div>
    </div>
  ),
};

// Example showing different border radius options
export const BorderRadius: Story = {
  parameters: {
    controls: { exclude: ["radius"] },
  },
  render: () => (
    <div className="flex flex-col space-y-8">
      <div>
        <h3 className="mb-2 text-sm font-medium text-gray-500">
          No Border Radius
        </h3>
        <Accordion radius="none">
          <AccordionItem
            id="radius-none"
            title="No Border Radius"
            description="This accordion has no border radius (squared corners)."
          />
        </Accordion>
      </div>

      <div>
        <h3 className="mb-2 text-sm font-medium text-gray-500">
          Small Border Radius
        </h3>
        <Accordion radius="sm">
          <AccordionItem
            id="radius-sm"
            title="Small Border Radius"
            description="This accordion has a small border radius."
          />
        </Accordion>
      </div>

      <div>
        <h3 className="mb-2 text-sm font-medium text-gray-500">
          Medium Border Radius
        </h3>
        <Accordion radius="md">
          <AccordionItem
            id="radius-md"
            title="Medium Border Radius"
            description="This accordion has a medium border radius (default)."
          />
        </Accordion>
      </div>

      <div>
        <h3 className="mb-2 text-sm font-medium text-gray-500">
          Large Border Radius
        </h3>
        <Accordion radius="lg">
          <AccordionItem
            id="radius-lg"
            title="Large Border Radius"
            description="This accordion has a large border radius."
          />
        </Accordion>
      </div>
    </div>
  ),
};

// Example showing disabled state
export const DisabledState: Story = {
  render: () => (
    <div className="flex flex-col space-y-8">
      <div>
        <h3 className="mb-2 text-sm font-medium text-gray-500">
          Disabled Entire Accordion
        </h3>
        <Accordion isDisabled={true}>
          <AccordionItem
            id="disabled-accordion-1"
            title="Disabled Item 1"
            description="This entire accordion is disabled via the isDisabled prop on the Accordion."
          />
          <AccordionItem
            id="disabled-accordion-2"
            title="Disabled Item 2"
            description="All items in this accordion are disabled."
          />
        </Accordion>
      </div>

      <div>
        <h3 className="mb-2 text-sm font-medium text-gray-500">
          Individual Disabled Items
        </h3>
        <Accordion>
          <AccordionItem
            id="individual-1"
            title="Regular Item"
            description="This item is enabled and can be clicked."
          />
          <AccordionItem
            id="individual-2"
            title="Disabled Item"
            description="Only this specific item is disabled."
            disabled={true}
          />
          <AccordionItem
            id="individual-3"
            title="Regular Item"
            description="This item is enabled and can be clicked."
          />
        </Accordion>
      </div>
    </div>
  ),
};

// Example showing compact mode
export const CompactMode: Story = {
  render: () => (
    <div className="flex flex-col space-y-8">
      <div>
        <h3 className="mb-2 text-sm font-medium text-gray-500">
          Standard Spacing
        </h3>
        <Accordion>
          <AccordionItem
            id="standard-1"
            title="Standard Spacing Item"
            description="This accordion uses the default spacing."
          />
          <AccordionItem
            id="standard-2"
            title="Another Item"
            description="Notice the standard amount of padding and spacing between items."
          />
        </Accordion>
      </div>

      <div>
        <h3 className="mb-2 text-sm font-medium text-gray-500">
          Compact Spacing
        </h3>
        <Accordion isCompact={true}>
          <AccordionItem
            id="compact-1"
            title="Compact Spacing Item"
            description="This accordion uses compact spacing for a more dense UI."
          />
          <AccordionItem
            id="compact-2"
            title="Another Item"
            description="Notice the reduced padding and spacing between items."
          />
        </Accordion>
      </div>
    </div>
  ),
};

// Example showing animation toggling
export const AnimationControls: Story = {
  render: () => (
    <div className="flex flex-col space-y-8">
      <div>
        <h3 className="mb-2 text-sm font-medium text-gray-500">
          With Animations (Default)
        </h3>
        <Accordion>
          <AccordionItem
            id="animated-item-1"
            title="Animated Item"
            description="This accordion has the default animations enabled."
          />
          <AccordionItem
            id="animated-item-2"
            title="Another Animated Item"
            description="Notice the smooth transitions when expanding and collapsing."
          />
        </Accordion>
      </div>

      <div>
        <h3 className="mb-2 text-sm font-medium text-gray-500">
          Without Animations
        </h3>
        <Accordion disableAnimation={true}>
          <AccordionItem
            id="non-animated-item-1"
            title="Non-Animated Item"
            description="This accordion has animations disabled."
          />
          <AccordionItem
            id="non-animated-item-2"
            title="Another Non-Animated Item"
            description="Notice the immediate expansion and collapse without transitions."
          />
        </Accordion>
      </div>
    </div>
  ),
};

// Example showing different item border options
export const ItemBorders: Story = {
  render: () => (
    <div className="flex flex-col space-y-8">
      <div>
        <h3 className="mb-2 text-sm font-medium text-gray-500">
          Default Item Borders
        </h3>
        <Accordion>
          <AccordionItem
            id="default-border-1"
            title="Default Border"
            description="This item uses the default border style."
            itemBorder="default"
          />
          <AccordionItem
            id="default-border-2"
            title="Default Border"
            description="Notice the border at the top of each item."
            itemBorder="default"
          />
        </Accordion>
      </div>

      <div>
        <h3 className="mb-2 text-sm font-medium text-gray-500">
          No Item Borders
        </h3>
        <Accordion>
          <AccordionItem
            id="no-border-1"
            title="No Border"
            description="This item has no border."
            itemBorder="none"
          />
          <AccordionItem
            id="no-border-2"
            title="No Border"
            description="Notice the absence of borders between items."
            itemBorder="none"
          />
        </Accordion>
      </div>

      <div>
        <h3 className="mb-2 text-sm font-medium text-gray-500">
          Rounded Item Borders
        </h3>
        <Accordion>
          <AccordionItem
            id="rounded-border-1"
            title="Rounded Border"
            description="This item has a rounded border."
            itemBorder="rounded"
          />
          <AccordionItem
            id="rounded-border-2"
            title="Rounded Border"
            description="Each item has its own fully rounded border."
            itemBorder="rounded"
          />
        </Accordion>
      </div>
    </div>
  ),
};
