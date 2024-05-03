export const questionsData = [
  {
    question: "What is JSX?",
    options: [
      "A JavaScript extension for building UI components",
      "A CSS preprocessor",
      "A templating engine for Python",
      "A query language for JSON",
    ],
    answer: 0,
  },
  {
    question: "What does React.useState() hook do?",
    options: [
      "Fetches data from an API",
      "Allows you to add state to functional components",
      "Applies styles to HTML elements",
      "Creates a new React component",
    ],
    answer: 1,
  },
  {
    question: "What is the purpose of the useEffect() hook?",
    options: [
      "To add event listeners to the document",
      "To perform side effects in functional components",
      "To create animations",
      "To manage routing in React applications",
    ],
    answer: 1,
  },
  {
    question: "What is the role of props in React components?",
    options: [
      "To store component's internal state",
      "To manage routing in React applications",
      "To pass data from parent to child components",
      "To handle asynchronous operations",
    ],
    answer: 2,
  },
  {
    question:
      "Which function is used to render a React component into the DOM?",
    options: [
      "ReactDOM.render()",
      "React.renderComponent()",
      "React.render()",
      "ReactDOM.renderComponent()",
    ],
    answer: 0,
  },
  {
    question: "What is the function of the key prop in React?",
    options: [
      "To set the initial state of a component",
      "To uniquely identify elements in a list",
      "To define the structure of a component",
      "To handle events in a component",
    ],
    answer: 1,
  },
  {
    question: "What is the purpose of the useState hook?",
    options: [
      "To fetch data from an API",
      "To manage state in functional components",
      "To handle user events",
      "To create new React components",
    ],
    answer: 1,
  },
  {
    question: "How do you import the useState hook in a functional component?",
    options: [
      "import useState from 'react'",
      "import { useState } from 'react'",
      "import React.useState from 'react'",
      "import react, { useState } from 'react'",
    ],
    answer: 1,
  },
  {
    question: "When does the useEffect hook run?",
    options: [
      "After every render",
      "Before the component is mounted",
      "After the component is mounted",
      "Only when state changes",
    ],
    answer: 0,
  },
  {
    question: "How do you conditionally apply effects with the useEffect hook?",
    options: [
      "By using if-else statements inside useEffect",
      "By returning a cleanup function from useEffect",
      "By passing a second argument to useEffect",
      "By using async/await inside useEffect",
    ],
    answer: 2,
  },
  {
    question: "What is the purpose of the useCallback hook?",
    options: [
      "To perform side effects in functional components",
      "To memoize functions for performance optimization",
      "To manage state in functional components",
      "To handle user events",
    ],
    answer: 1,
  },
  {
    question:
      "How do you import the useCallback hook in a functional component?",
    options: [
      "import useCallback from 'react'",
      "import { useCallback } from 'react'",
      "import React.useCallback from 'react'",
      "import react, { useCallback } from 'react'",
    ],
    answer: 1,
  },
  {
    question: "What is the purpose of the useContext hook?",
    options: [
      "To create context providers",
      "To manage state in functional components",
      "To consume values from React context",
      "To handle user events",
    ],
    answer: 2,
  },
  {
    question: "What is the purpose of the useRef hook?",
    options: [
      "To create a reference to a DOM element",
      "To manage state in functional components",
      "To handle user events",
      "To create context providers",
    ],
    answer: 0,
  },
  {
    question: "What is React Router?",
    options: [
      "A state management library for React",
      "A routing library for React",
      "A testing library for React components",
      "A form validation library for React",
    ],
    answer: 1,
  },
  {
    question: "Which component is used to define routes in React Router?",
    options: ["<Route>", "<Link>", "<Switch>", "<Router>"],
    answer: 0,
  },
  {
    question:
      "What is the purpose of the 'exact' prop in React Router's <Route> component?",
    options: [
      "To specify that the route is only accessible when authenticated",
      "To specify that the route matches exactly and not partially",
      "To specify the default route",
      "To specify that the route should not render",
    ],
    answer: 1,
  },
  {
    question:
      "How do you create a link to navigate between routes in React Router?",
    options: [
      "<a href='/path'>Link Text</a>",
      "<Link to='/path'>Link Text</Link>",
      "<Route path='/path'>Link Text</Route>",
      "<NavLink path='/path'>Link Text</NavLink>",
    ],
    answer: 1,
  },
  {
    question: "What is the purpose of the <Switch> component in React Router?",
    options: [
      "To create a list of navigation links",
      "To switch between different themes in a React app",
      "To group <Route> components and render the first one that matches the URL",
      "To toggle between different states in a React component",
    ],
    answer: 2,
  },
  {
    question: "How do you access URL parameters in React Router?",
    options: [
      "Using the useParams() hook",
      "Using the useQuery() hook",
      "Accessing the props.location object",
      "Using the useHistory() hook",
    ],
    answer: 0,
  },
  {
    question: "What is the purpose of the useHistory() hook in React Router?",
    options: [
      "To fetch data from an API",
      "To handle user events",
      "To navigate programmatically",
      "To manage state in functional components",
    ],
    answer: 2,
  },
  {
    question: "How do you implement nested routes in React Router?",
    options: [
      "By using multiple <Route> components",
      "By using the <NestedRoute> component",
      "By using <Switch> component",
      "By using a separate Router for each nested route",
    ],
    answer: 3,
  },
  {
    question:
      "What is the purpose of the withRouter() higher-order component in React Router?",
    options: [
      "To create authenticated routes",
      "To render routes conditionally",
      "To provide access to history, location, and match props",
      "To optimize routing performance",
    ],
    answer: 2,
  },
  {
    question: "How do you handle 404 (not found) pages in React Router?",
    options: [
      "By using a special <NotFound> component",
      "By using the <Switch> component and placing the <Route> with 'path' as '*' at the end",
      "By redirecting to a specific route",
      "By using the <Route> component with 'path' as '/404'",
    ],
    answer: 1,
  },
];
