import type { Meta, StoryObj } from "@storybook/react";
import { Bookmark } from "../components/Bookmark/Bookmark";

const meta: Meta<typeof Bookmark> = {
  title: "Dechert/Bookmark",
  component: Bookmark,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Bookmark>;

export const Basic: Story = {
  args: {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet hendrerit sapien. Curabitur pellentesque auctor orci, ut pellentesque leo.",
  },
};

export const WithLink: Story = {
  args: {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet hendrerit sapien. Curabitur pellentesque auctor orci, ut pellentesque leo.",
    link: "www.google.com",
  },
};

export const WithTag: Story = {
  args: {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet hendrerit sapien. Curabitur pellentesque auctor orci, ut pellentesque leo.",
    tag: "None / Not Applicable",
  },
};

export const WithLinkAndTag: Story = {
  args: {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet hendrerit sapien. Curabitur pellentesque auctor orci, ut pellentesque leo.",
    link: "www.google.com",
    tag: "None / Not Applicable",
  },
};
