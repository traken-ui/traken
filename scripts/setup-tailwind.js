#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = process.cwd();
const tailwindConfigJsPath = path.join(projectRoot, 'tailwind.config.js');
const tailwindConfigTsPath = path.join(projectRoot, 'tailwind.config.ts');
const CONTENT_PATH_TO_ADD =
  './node_modules/@traken/react/**/*.{js,ts,jsx,tsx,mdx}';

const pluginPath = '@traken/react';

const pluginImport = `import {trakenPlugin} from '${pluginPath}';`;

// Define the plugin usage
const pluginUsage = `trakenPlugin`;

async function updateTailwindConfig(configPath) {
  let configContent = await fs.promises.readFile(configPath, 'utf8');

  // Add plugin import at the top if it's not already there
  if (!configContent.includes('trakenPlugin')) {
    configContent = `${pluginImport}\n${configContent}`;
  }

  // Add content path if not present
  if (!configContent.includes(CONTENT_PATH_TO_ADD)) {
    configContent = configContent.replace(
      /(content:\s*\[[^\]]*)/m,
      `$1\n    '${CONTENT_PATH_TO_ADD}'`
    );
  }

  // Add the plugin to the plugins array if not already present
  const pluginsArrayPattern = /plugins:\s*\[([\s\S]*?)\]/m;
  const match = configContent.match(pluginsArrayPattern);

  if (match) {
    const pluginsArray = match[1].trim();
    if (!pluginsArray.includes('trakenPlugin')) {
      const updatedPluginsArray = pluginsArray
        ? `${pluginsArray}, ${pluginUsage}`
        : pluginUsage;
      configContent = configContent.replace(
        pluginsArrayPattern,
        `plugins: [\n    ${updatedPluginsArray}\n  ]`
      );
    }
  } else {
    // Add a new plugins array if it doesn't exist
    configContent = configContent
      .replace(/module\.exports\s*=\s*{([^}]*)}/m, (match, p1) => {
        return `module.exports = {\n${p1.trim() ? p1 + ',' : ''}\n  plugins: [\n    ${pluginUsage}\n  ],\n}`;
      })
      .replace(/export default\s*{([^}]*)}/m, (match, p1) => {
        return `export default {\n${p1.trim() ? p1 + ',' : ''}\n  plugins: [\n    ${pluginUsage}\n  ],\n}`;
      });
  }

  await fs.promises.writeFile(configPath, configContent, 'utf8');
  console.log(
    `Updated ${configPath} with content paths and added custom plugin.`
  );
}

async function main() {
  try {
    if (fs.existsSync(tailwindConfigJsPath)) {
      await updateTailwindConfig(tailwindConfigJsPath);
    } else if (fs.existsSync(tailwindConfigTsPath)) {
      await updateTailwindConfig(tailwindConfigTsPath);
    } else {
      console.error(
        'tailwind.config.js or tailwind.config.ts not found in the project root.'
      );
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

main();
