### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
    React is a JavaScript library for building user interfaces. It's used to create interactive and dynamic web applications. You would use React when you want to build reusable UI components, efficiently update and render data in real-time, and maintain a single-page application's state.

- What is Babel?
     Babel is a JavaScript compiler that allows you to write modern JavaScript code and convert it into an older version of JavaScript that's compatible with most browsers.

- What is JSX?
    JSX is a syntax extension for JavaScript that allows you to write HTML-like code within your JavaScript code. It's commonly used in React to define the structure and appearance of UI components.

- How is a Component created in React?
    A React component is created by defining a JavaScript function or class that extends React.Component.

- What are some difference between state and props?
    Props (short for properties) are used to pass data from parent to child components, while state is used to manage data that can change within a component. Props are read-only and are passed down, while state is mutable and can be changed within the component.

- What does "downward data flow" refer to in React?
    Downward data flow refers to the practice of passing data from parent components to child components through props.

- What is a controlled component?
    A controlled component is a React component whose form elements (like input fields) are controlled by React's state. It allows you to manage and respond to user input easily.

- What is an uncontrolled component?
    An uncontrolled component is a React component where form elements are not controlled by React's state. Instead, they rely on the DOM for their values. They are less common in React applications.

- What is the purpose of the `key` prop when rendering a list of components?
    The key prop is used when rendering a list of components to give each component a unique identifier.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
    Using an array index as a key prop is a poor choice because it can lead to issues when the list order changes or when items are added or removed. It may result in incorrect rendering and loss of component state.

- Describe useEffect.  What use cases is it used for in React components?
    useEffect is a React hook used for handling side effects in functional components

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
    useRef is a React hook used to create mutable ref objects. Changes to a ref value do not cause a component to re-render.

- When would you use a ref? When wouldn't you use one?
     You would use a ref when you need to access or interact with a DOM element directly, manage focus, or store mutable values without causing re-renders. You wouldn't typically use refs for managing component state.

- What is a custom hook in React? When would you want to write one?
    A custom hook is a reusable function in React that encapsulates logic and state management to be shared across multiple components.
