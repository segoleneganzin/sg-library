### Usage

Here's a basic example of how to use the `Modal` component in your React application :

```javascript
import { useState } from 'react';
import { Modal } from 'sg-library';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prevIsOpen) => !prevIsOpen);
  };

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

  return (
    <div>
      <button onClick={toggleModal}>Open Modal</button>
      <Modal
        isOpen={isModalOpen}
        toggleModal={toggleModal}
        escapeClose={false} /* Optionnal, default to true */
        overlayClickClose={false} /* Optionnal, default to true */
        showClose={false} /* Optionnal, default to true */
        title='Title' /* Optionnal, default to null */
        btnText='close' /* Optionnal, default to null */
        fadeDuration={300} /* Optionnal, default to 0 */
        theme='dark' /* Optionnal, default to light */
        customTheme={customTheme}
      >
        <p>This is the content inside the modal!</p>
      </Modal>
    </div>
  );
};

export default App;
```

### Props

The `Modal` component accepts the following props :
| Name | Type | Required | Default value | Description |
| --- | --- | --- | --- | --- |
| **`isOpen`** | boolean | yes | / | Indicates whether the modal is open or closed |
| **`toggleModal`** | function | yes | / | Function to toggle the modal's visibility |
| **`children`** | React.ReactNode | yes | / | The content to be displayed inside the modal |
| **`escapeClose`** | boolean | no | true | Allows the user to close the modal by pressing `ESC` |
| **`overlayClickClose`** | boolean | no | true | Allows the user to close the modal by clicking the overlay |
| **`showClose`** | boolean | no | true | Shows a (X) icon/link in the top-right corner |
| **`title`** | string | no | null | The title of the modal, displayed on top if provided. If no provided, it's not displayed. |
| **`btnText`** | string | no | null | The text for the additionnal bottom to close the modal, if provided. If no btnText provided, no button is displayed. |
| **`theme`** | string | no | light | Optional theme for the modal (e.g., `'light'`, `'dark'`). |
| **`customTheme`** | object | no | {} | Allows overriding or extending default styles for themes. Accepts `general`, `modal`, `button` objects to apply custom styles. |
| **`fadeDuration`** | number | no | 0 | Number of milliseconds the fade transition takes |

### Styling

The library includes default styles that are customizable with customTheme prop,

You can also override these styles in your project by applying additional styles.

Css className :

- sg-library\_\_modal
- sg-library\_\_modal-dialog
- sg-library\_\_modal-close-cross
- sg-library\_\_modal-title
- sg-library\_\_modal-children
- sg-library\_\_modal-btn

<!-- Light theme :
![Light theme screenshot](./src/assets/lightTheme.png)
Dark theme :
![Dark theme screenshot](./src/assets/darkTheme.png) -->
