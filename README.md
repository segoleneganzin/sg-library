# SG Library

[in the pipeline, loading ...]

![Static Badge](https://img.shields.io/badge/Made_with-ReactJS-blue)

![Static Badge](https://img.shields.io/badge/Publish_on-npm-red)

<!-- 🖥 [Tester la librairie sur CodeSandBox](https://codesandbox.io/p/devbox/sg-modal-lib-test-kgm332) -->

🔎 [Voir la librairie sur npm](https://www.npmjs.com/package/sg-library)

**sg-library** is a simple and flexible React library for creating and managing many components in your web applications.
It allows you to easily create custom component with themes and configurations.

## Features

- **Easy to use** : Simple library for creating component.
- **Customizable** : Apply different themes (light/dark) and custom theme based on styled component.
- **Lightweight** : Built with minimal dependencies to keep your bundle size small.
- **Tested** : Thoroughly tested with unit tests to ensure reliability and performance.
- **Accessible** : Designed with accessibility in mind, following best practices to ensure usability for all users.
- **Responsive** : Adapts seamlessly to various screen sizes and devices for a consistent user experience.
- **Flexible** : To meet diverse use cases.
- **Easy integration** : Works well with popular frameworks and libraries, making it simple to implement in existing projects.

## Installation

### Prerequisites

- **[NodeJS](https://nodejs.org/fr/)** (^20.11.1)
- **[npm](https://www.npmjs.com/)** (^10.2.4)
- **IDE** (VSCode recommended)

To install the `sg-library` library, you can use npm, pnpm or yarn :

```
npm install sg-library
```

or

```
pnpm install sg-library
```

or

```
yarn add sg-library
```

## Modal component

[See modal component documentation](./docs/modal.md)

## Button component

[See button component documentation](./docs/button.md)

## Custom theme

You can defined, just for one component or for all components (global declaration), custom theme :

```javascript
const customTheme = {
  general: {
    fontSize: '1rem',
    radius: '5px',
    errorColor: 'rgb(181, 38, 7)',
    textColor: 'rgb(255, 255, 255)',
  },
  modal: {
    width: 'fit-content',
    border: 'none',
    backgroundColor: 'rgb(0, 0, 0)',
    overlayBackgroundColor: 'rgba(0, 0, 0, 0.7)',
    boxShadow: `0 20px 30px -10px rgba(0, 0, 0, 0.3), // Stronger shadow effect for dark mode
                0 10px 10px -5px rgba(0, 0, 0, 0.1)`,
  },
  button: {
    border: 'none',
    boxShadow: 'none',
    textColor: 'rgb(247, 235, 235)',
    backgroundColor: 'rgb(74, 75, 75)',
  },
};
```

## Dependencies

### Production Dependencies

- **react**: ^18.3.1
- **react-dom**: ^18.3.1
- **styled-components**: ^6.1.13

### Development Dependencies

- **@eslint/js**: ^9.15.0
- **@testing-library/jest-dom**: ^6.6.3
- **@testing-library/react**: ^16.0.1
- **@types/color**: ^4.2.0
- **@types/jest**: ^29.5.14
- **@types/node**: ^22.9.0
- **@types/react**: ^18.3.12
- **@types/react-dom**: ^18.3.1
- **@types/styled-components**: ^5.1.34
- **@vitejs/plugin-react**: ^4.3.3
- **@vitest/coverage-v8**: ^2.1.5
- **color**: ^4.2.3
- **deepmerge**: ^4.3.1
- **eslint**: ^9.15.0
- **eslint-plugin-react-hooks**: ^5.0.0
- **eslint-plugin-react-refresh**: ^0.4.14
- **glob**: ^11.0.0
- **globals**: ^15.12.0
- **jsdom**: ^25.0.1
- **typescript**: ~5.6.3
- **typescript-eslint**: ^8.15.0
- **vite**: ^5.4.11
- **vite-plugin-dts**: ^4.3.0
- **vitest**: ^2.1.5

## Authors

- **Ségolène Ganzin** - Initial work and main development ([GitHub Profile](https://github.com/segoleneganzin/))
