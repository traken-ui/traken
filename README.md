---
# Traken UI Documentation

Welcome to the **Traken UI** documentation! Follow this guide to integrate Traken UI into your project effortlessly.

## Requirements

Before using Traken UI, ensure your project meets the following requirements:

- **React**: Version 18 or later
- **Tailwind CSS**: Version 4.1 or later
- **Modern JavaScript Environment**: Ensure ES6+ support

## Quick Installation

Install Traken UI in your project with a single command:

```bash
npm i @traken-ui/react
```

## Setup Guide

### 1. Import Required CSS

To ensure proper styling, import the Traken UI CSS files into your global stylesheet. Add the following lines to your `global.css` or main application CSS file:

```css
@import "@traken-ui/react/dist/traken-theme.css";
@import "@traken-ui/react/dist/esm/index.css";
@import "tailwindcss";
```

### 2. Start Using Components

Once the CSS is imported, you can start using Traken UI components in your application. For example, add a button to your app as follows:

```jsx
// Import the Button component from Traken UI
import { Button } from "@traken-ui/react";

function App() {
  return (
    <div>
      <Button variant="primary">Click Me</Button>
    </div>
  );
}

export default App;
```

## Features

- **Ease of Use**: Pre-designed components that integrate seamlessly with your project
- **Customizable**: Fully supports Tailwind CSS for maximum flexibility
- **Modern Design**: Responsive and aesthetic components built for today's web

## Contributing

We welcome contributions to Traken UI! If you'd like to help improve the library, feel free to:

1. Fork the repository
2. Make your changes
3. Submit a pull request

For detailed contribution guidelines, please refer to our [CONTRIBUTING.md](CONTRIBUTING.md).

## Support

If you encounter any issues or have questions, feel free to:

- Open an issue on [GitHub](https://github.com/your-repo/traken-ui)
- Reach out to us via [email@example.com](mailto:email@example.com)

## License

Traken UI is licensed under the [MIT License](LICENSE).

---

Happy coding with Traken UI!
