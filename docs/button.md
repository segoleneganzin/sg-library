### Usage

Here's a basic example of how to use the `Button` component in your React application :

```javascript
import { useState } from 'react';
import { Modal } from 'sg-library';

const App = () => {
  const handleClickButton = () => {
    alert('You have clicked the button');
  };

  const customTheme = {
    general: {
      fontSize: '1rem',
      radius: '5px',
      errorColor: 'rgb(181, 38, 7)',
      textColor: 'rgb(255, 255, 255)',
    },
    button: {
      border: 'none',
      boxShadow: 'none',
      textColor: 'rgb(247, 235, 235)',
      backgroundColor: 'rgb(74, 75, 75)',
    },
  };

  return (
    <div>
      <Button
        handleClick={toggleModal}
        classname='home__btn' /* Optionnal */
        content='Click'
        ariaLabel='Open alert' /* Optionnal */
        theme='dark' /* Optionnal, default to light */
        customTheme={customTheme} /* Optionnal */
      />
    </div>
  );
};

export default App;
```

### Props

The `Button` component accepts the following props :
| Name | Type | Required | Default value | Description |
| --- | --- | --- | --- | --- |
| **`handleClick`** | function | yes | / | Function to execute on click |
| **`classname`** | string | no | null | The optionnally additionnal classname. |
| **`content`** | string or React.ReactNode | yes | / | The content to be displayed inside the modal |
| **`ariaLabel`** | string | no | '' | Allows the user to improve accessibility if content isn't explicit |
| **`theme`** | string | no | light | Optional theme for the modal (e.g., `'light'`, `'dark'`). |
| **`customTheme`** | object | no | {} | Allows overriding or extending default styles for themes. Accepts `general`, `modal`, `button` objects to apply custom styles.|

### Styling

The library includes default styles that are customizable with customTheme prop,

You can also override these styles in your project by applying additional styles.

Css className :

- sg-library\_\_btn

<!-- Light theme :
![Light theme screenshot](./src/assets/lightTheme.png)
Dark theme :
![Dark theme screenshot](./src/assets/darkTheme.png) -->
