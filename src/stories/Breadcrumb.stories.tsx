import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Breadcrumb } from '../components/Breadcrumbs/Breadcrumb';
import { HomeIcon, ChevronRightIcon, SlashIcon } from '../components/Breadcrumbs/icons'; 

const meta: Meta<typeof Breadcrumb> = {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
  argTypes: {
    separator: {
      control: { type: 'select' },
      options: ['>', '/', '→', '•'],
    },
    maxItems: {
      control: { type: 'number', min: 2, max: 10 },
    },
    collapseAfter: {
      control: { type: 'number', min: 1, max: 5 },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Breadcrumb>;

// Mock items for stories
const baseItems = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Electronics', href: '/products/electronics' },
  { label: 'Smartphones', isCurrent: true },
];

const longPathItems = [
  { label: 'Home', href: '/' },
  { label: 'Library', href: '/library' },
  { label: 'Documents', href: '/library/docs' },
  { label: 'Projects', href: '/library/docs/projects' },
  { label: 'Client Work', href: '/library/docs/projects/clients' },
  { label: 'Acme Corp', isCurrent: true },
];

// --- Stories ---

export const Default: Story = {
  args: {
    items: baseItems,
    separator: '>',
  },
};

export const SlashSeparator: Story = {
  args: {
    items: baseItems,
    separator: '/',
  },
  name: 'With Slash (/) Separator',
};

export const ArrowSeparator: Story = {
  args: {
    items: baseItems,
    separator: '→',
  },
  name: 'With Arrow (→) Separator',
};

export const WithIcons: Story = {
  args: {
    items: [
      { label: 'Home', href: '/', icon: <HomeIcon /> },
      { label: 'Dashboard', href: '/dashboard' },
      { label: 'Settings', isCurrent: true, icon: <SlashIcon /> },
    ],
    separator: <ChevronRightIcon />,
  },
  name: 'With Icons',
};

export const Truncated: Story = {
  args: {
    items: longPathItems,
    maxItems: 4,
    collapseAfter: 1,
  },
  name: 'Truncated (Collapsed)',
};

export const Expanded: Story = {
  args: {
    items: longPathItems,
    maxItems: 4,
    collapseAfter: 1,
  },
  render: (args) => {
    // Simulate expanded state
    const [expanded, setExpanded] = React.useState(true);
    return (
      <div>
        <button 
          onClick={() => setExpanded(!expanded)}
          className="mb-4 text-sm text-blue-600"
        >
          {expanded ? 'Collapse' : 'Expand'} Breadcrumb
        </button>
        <Breadcrumb {...args} />
      </div>
    );
  },
  name: 'Expandable (Interactive)',
};

export const Responsive: Story = {
  args: {
    items: longPathItems,
    maxItems: 3,
    collapseAfter: 1,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  name: 'Responsive (Mobile)',
};