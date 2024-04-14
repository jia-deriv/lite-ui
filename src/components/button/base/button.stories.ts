import type { Meta, StoryObj } from "@storybook/react";
import Base from ".";

const meta = {
  title: "Button/Basic",
  component: Base,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: ["sm", "md", "lg", "xl"],
      control: { type: "radio" },
    },
    rounded: {
      options: ["sm", "md", "lg", "xl", "full"],
      control: { type: "radio" },
    },
  },
} satisfies Meta<typeof Base>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Click Me",
  },
};
