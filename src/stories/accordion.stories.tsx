import React from 'react';
import { StoryObj,Meta } from '@storybook/react/*';
import { Accordion,AccordionItem } from '../components/accordion/Accordion';

import { ComponentProps } from 'react';

type StoryProps = ComponentProps<typeof Accordion> & {
    accordionTitle?: string;
    itemTitle1?: string;
    itemDescription1?: string;
    itemTitle2?: string;
    itemDescription2?: string;
    itemTitle3?: string;
    itemDescription3?: string;
};

const meta: Meta<StoryProps> = {
    title: 'Components/Accordion',
    tags: ["autodocs"],
    component: Accordion,
    subcomponents: { AccordionItem },
    argTypes: {
        variant: {
            control: 'select',
            options: ["light", "shadow", "bordered", "splitted"],
            description: 'Visual appearance of the accordion container',
        },
        selectionMode: {
            control: 'select',
            options: ["none", "single", "multiple"],
            description: 'Behavior of item selection (none, single, multiple)',
        },
        size: {
            control: 'select',
            options: ["sm", "md", "lg"],
            description: 'Overall size of the accordion',
        },
        radius: {
            control: 'select',
            options: ["none", "sm", "md", "lg", "full"],
            description: 'Rounded corners of the accordion',
        },
        isDisabled: {
            control: 'boolean',
            description: 'Whether the entire accordion is disabled',
        },
        hideIndicator: {
            control: 'boolean',
            description: 'Whether to hide the expand/collapse indicator',
        },
        disableAnimation: {
            control: 'boolean',
            description: 'Whether to disable the expand/collapse animation',
        },
        isCompact: {
            control: 'boolean',
            description: 'Whether to use a compact layout',
        },
        accordionTitle: {
            control: 'text',
            description: 'Optional title for the accordion (not part of the component itself)',
        },
    },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
    args: {
        accordionTitle: 'Default Accordion',
        variant: 'light',
        selectionMode: 'none',
        size: 'md',
        radius: 'md',
        isDisabled: false,
    },
    render:(args)=>(
        <Accordion
                    variant={args.variant}
                    selectionMode={args.selectionMode}
                    size={args.size}
                    radius={args.radius}
                    isDisabled={args.isDisabled}
                    hideIndicator={args.hideIndicator}
                    disableAnimation={args.disableAnimation}
                    isCompact={args.isCompact}
                    onActiveItemsChange={args.onActiveItemsChange}
                >
                    <AccordionItem
                        id="item-1"
                        title={args.itemTitle1 || "Section 1"}
                        description={args.itemDescription1 || "Content for Section 1"}
                    />
                    <AccordionItem
                        id="item-2"
                        title={args.itemTitle2 || "Section 2"}
                        description={args.itemDescription2 || "Content for Section 2"}
                    />
                    <AccordionItem
                        id="item-3"
                        title={args.itemTitle3 || "Section 3"}
                        description={args.itemDescription3 || "Content for Section 3"}
                    />
                </Accordion>
    )
};
