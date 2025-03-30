# TrakenUI

A modern UI component library built with React and Tailwind CSS.

## Installation

```bash
npm install trakenui
```

## Setup

### 1. Run the setup script to update your Tailwind configuration:

```bash
npx traken-setup-tailwind
```

### 2. Import the CSS in your main application file:

```js
// In your main app file (e.g., App.jsx, _app.js, etc.)
import 'trakenui/dist/styles.css';
```

### 3. Use the components:

```jsx
import { Button } from 'trakenui';

function App() {
  return (
    <div>
      <Button variant="primary">Click Me</Button>
    </div>
  );
}
```

## Available Components

- Button
- [Other components...]

## Theme Customization

TrakenUI uses a plugin system to extend Tailwind's capabilities. The plugin automatically adds color variables and utilities.

You can customize the theme by extending the Tailwind config:

```js
// tailwind.config.js
module.exports = {
  // ...other config
  theme: {
    extend: {
      colors: {
        primary: {
          // Override primary colors
          500: '#yourCustomColor',
          // ...other shades
        },
        // Override other color sets...
      },
    },
  },
};
```