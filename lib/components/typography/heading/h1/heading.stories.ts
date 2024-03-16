import type { Meta, StoryObj } from "@storybook/react";
import { Heading } from "..";

const meta = {
  title: "Typography/Heading/H1",
  component: Heading.H1,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof Heading.H1>;

export default meta;
type Story = StoryObj<typeof meta>;

export const H1: Story = {
  args: {
    children: "This is H1",
  },
};
