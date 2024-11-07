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

  return (
    <div>
      <button onClick={toggleModal}>Open Modal</button>
      <Modal
        isOpen={isModalOpen}
        toggleModal={toggleModal}
        title='Title' /* Optionnal, default to null */
        btnText='close' /* Optionnal, default to null */
        escapeClose={false} /* Optionnal, default to true */
        overlayClickClose={false} /* Optionnal, default to true */
        showClose={false} /* Optionnal, default to true */
        fadeDuration={300} /* Optionnal, default to 0 */
        styleTheme='dark' /* Optionnal, default to light */
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
| **`customTheme`** | object | no | {} | Allows overriding or extending default styles for general and modal themes. Accepts `general` and `modal` objects to apply custom styles on top of the chosen theme. |
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
