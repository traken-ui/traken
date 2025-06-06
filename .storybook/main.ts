import type { StorybookConfig } from '@storybook/react-vite';
import path from 'path';


const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions"
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  },
  docs:{
    autodocs: "tag"
  },
  // viteFinal: async (config) => {
  //   config.plugins?.push(
  //       // Add any custom Vite plugins here
  //       tsconfigPaths({
  //           projects: [
  //               path.resolve(path.dirname(__dirname), "../tsconfig.json"),
  //           ],
  //       }),
  //   );
  //   return config;
  // }
};
export default config;