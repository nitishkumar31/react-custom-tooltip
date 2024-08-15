# React Custom Tooltip

A simple and customizable React component for creating tooltips.

## Features

- **Easy to use:** Just wrap your component with the `Tooltip` component and pass the tooltip text as a prop.
- **Customizable:** You can customize the position, style, and animation of the tooltip using props.
- **Accessible:** The tooltip is accessible using the keyboard and screen readers.

## Installation

You can install the package using npm or yarn:

### Using npm
```bash
npm install react-custom-tooltip
```
### Using yarn
```bash
yarn add react-custom-tooltip
```

## Usage

Once installed, you can start using the `Tooltip` component in your React project:

```js
import React from "react";
import Tooltip from "./components/Tooltip";

function App() {
    return (
        <div>
        <Tooltip text="This is a tooltip">
            <button>Hover over me</button>
        </Tooltip>
        </div>
    );
}

export default App;
```

## Development

If you're working on the development of this project with `Vite.js`, follow these steps to set up your environment:

### Prerequisites

Ensure you have Node.js and npm or yarn installed on your machine.

## Setting Up the Project

1. **Clone the repository:**

   ```bash
   git clone https://github.com/nitishkumar31/react-custom-tooltip.git
   cd react-custom-tooltip
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

4. **Run the development server:**

   - Vite.js provides a fast development server. Start it using:

     ```bash
     npm run dev
     ```
     or
     ```bash
     yarn dev
     ```

This will start the development server, and you can access your app at `http://localhost:5173`.

## Building for Production

To build the project for production, use the following command:

```bash
npm run build
```
or
```bash
yarn build
```

This will generate a dist folder with your compiled application.

## Running Tests

If you have tests configured, you can run them using:

```bash
npm run test
```
or
```bash
yarn test
```

## Contributing

We welcome contributions to this project! Here’s how you can get involved:

### How to Contribute

1. **Fork the Repository:**

   - Click the "Fork" button at the top-right corner of this repository’s GitHub page to create your own copy of the repository.

2. **Clone Your Fork:**

   - Clone your forked repository to your local machine:

     ```bash
     git clone https://github.com/nitishkumar31/react-custom-tooltip.git
     cd react-custom-tooltip
     ```

3. **Create a Branch:**

   - Create a new branch for your changes:

     ```bash
     git checkout -b your-feature-branch
     ```

4. **Make Changes:**

   - Make the necessary changes to the codebase. Ensure you follow the project’s coding style and guidelines.

5. **Commit Your Changes:**

   - Stage and commit your changes with a meaningful commit message:

     ```bash
     git add .
     git commit -m "Add a descriptive commit message"
     ```

6. **Push Your Changes:**

   - Push your changes to your forked repository:

     ```bash
     git push origin your-feature-branch
     ```

7. **Create a Pull Request:**
   - Go to the original repository’s GitHub page and open a pull request from your branch. Provide a clear description of the changes you made and why they are beneficial.

### Code of Conduct

Please adhere to our [Code of Conduct](CODE_OF_CONDUCT.md) when participating in this project. Treat others with respect and communicate clearly.

### Reporting Issues

If you find a bug or have a feature request, please open an issue on our [Issues page](https://github.com/nitishkumar31/react-custom-tooltip/issues). Provide as much detail as possible, including steps to reproduce the issue.

### Getting Help

If you need help or have questions about contributing, feel free to reach out via GitHub discussions or open an issue.

Thank you for contributing to this project!
