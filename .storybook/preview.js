import { BrowserRouter } from "react-router-dom";
import { themes } from "@storybook/theming";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkModel: {
    dark: { ...themes.dark, appBag: "black" },
    light: { ...themes.normal, appBag: "red" },
  },
};
// Line in here
export const decorators = [
  (Story) => (
    <BrowserRouter>
      <Story />
    </BrowserRouter>
  ),
];
