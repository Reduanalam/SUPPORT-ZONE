 
  1. What is JSX, and why is it used?

JSX is a syntax extension that lets you write HTML-like markup directly inside JavaScript.

 Why it is used: 
  Makes UI code readable — structure and logic live together
  Allows embedding any JS expression inside `{}`
  Errors are caught at compile time
  Makes composing components natural and intuitive

 
  2. What is the difference between State and Props?

In React, props and state are both used to manage data. Props (short for properties) are used to pass data from a parent component to a child component. They are read-only, meaning the receiving component cannot modify them. 
 On the other hand, state is used to manage data within a component itself. State is mutable and can be updated using a state setter function. When state changes, the component re-renders automatically to reflect the updated data in the UI. 

3. What is the useState hook, and how does it work?

The useState hook is a built-in feature in React that allows functional components to manage state.  The useState hook takes an initial value as an argument and returns an array containing the current state value and a function to update that state. When the state updating function is called, React updates the state and re-renders the component to display the new value. This makes useState a simple and powerful way to handle dynamic data in functional components.

4. How can you share state between components in React?

State can be shared between components in React by lifting the state up to their closest common parent component. In this approach, the parent component holds the shared state and passes it down to child components through props. This ensures that multiple components can access and update the same data in a controlled way. For larger applications, developers may use the Context API to share global data without passing props manually through every level. In more complex projects, state management libraries like Redux can be used to manage and share application-wide state efficiently.

5. How is event handling done in React?

Event handling in React is done using functions that respond to user actions such as clicks, form submissions, or input changes. React uses camelCase naming for events, such as onClick, onChange, and onSubmit. Instead of using traditional HTML event attributes, React attaches event handlers directly to JSX elements and passes a function reference to them. When the event occurs, the specified function executes. React also uses a system called Synthetic Events to ensure consistent behavior across different browsers. This approach makes event handling in React simple, organized, and efficient.

 

 