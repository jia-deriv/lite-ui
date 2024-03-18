import type { Preview } from "@storybook/react";
import { withThemeByClassName } from "@storybook/addon-themes";
import "./styles.scss";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    withThemeByClassName({
      themes: {
        light: "theme--light",
        dark: "theme--dark",
      },
      defaultTheme: "light",
      parentSelector: "body",
    }),
  ],
};

export default preview;
