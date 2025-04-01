import type { StorybookConfig } from '@storybook/react-vite';
import path from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';


const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
    "@storybook/experimental-addon-test"
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  },
  docs:{
    autodocs: "tag"
  },
  // viteFinal: async (config) => {
  //   // Customize the Vite configuration here
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