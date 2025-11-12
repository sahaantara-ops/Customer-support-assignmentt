# What is JSX, and why is it used?
Ans:JSX (JavaScript XML) is a syntax extension for JavaScript used in React.
# Why is is used:
Declarative UI building: You can describe how the UI should look (ticket cards, navbar, banner) in a way that feels natural, like writing HTML.

Integration with JavaScript: You can embed dynamic values (like ticketItems.map(...)) directly inside the markup. This is crucial for rendering tickets from JSON data.

Readability & maintainability: Instead of juggling separate HTML templates and JS logic, JSX combines them, making components easier to understand and debug.

# What is the difference between State and Props?
Ans:
Definition: State is data that is managed inside a component. It can change over time, usually in response to user actions or events.

Definition: Props (short for “properties”) are read-only values passed from a parent component to a child component.

# What is the useState hook, and how does it work?
Ans:
useState is a React Hook that lets you add state (dynamic data) to functional components.

Without it, functional components are “stateless” — they just render UI.

# How can you share state between components in React?
Ans:
Sharing State Between Components in React
In React, state belongs to the component where it is defined. But often, multiple components need access to the same piece of data — for example, My Banner needs to show ticket counts, while my TaskCard needs to update those counts when a ticket is resolved.

Then the process:
Lift state up: Place the state in the closest common parent component of the components that need it.

Pass the state down as props to child components.

Pass functions (callbacks) as props so children can update the parent’s state.

# How is event handling done in React?

Event handling in React is the way you respond to user actions (like clicks, typing, or form submissions). Instead of using traditional HTML event attributes (onclick, onchange), React uses camelCase event props and passes functions as values.