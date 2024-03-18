import type { Meta, StoryObj } from "@storybook/react";
import { Heading } from "..";

const meta = {
  title: "Typography/Heading/H6",
  component: Heading.H6,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {
    as: { table: { disable: true } },
  },
} satisfies Meta<typeof Heading.H6>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "This is H6",
  },
};
