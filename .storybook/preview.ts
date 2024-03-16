import type { Preview } from "@storybook/react";
import { themes } from "@storybook/theming";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    darkMode: {
      dark: { ...themes.dark, appBg: "black" },
      light: { ...themes.normal, appBg: "white" },
      darkClass: "theme--dark",
      lightClass: "theme--light",
    },
  },
};

export default preview;
