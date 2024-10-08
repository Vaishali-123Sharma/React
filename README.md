# React Course Documentation

## Chapter 01 - Inception

[Link to my Code](https://bitbucket.org/namastedev/namaste-react-live/commits/928e6faee91549739adc0c3c97c8f0352a55607e)

### Theory:

- **What is Emmet?**
- **Difference between a Library and Framework?**
- **What is CDN? Why do we use it?**
- **Why is React known as React?**
- **What is `crossorigin` in the script tag?**
- **What is the difference between React and ReactDOM?**
- **What is the difference between `react.development.js` and `react.production.js` files via CDN?**
- **What are async and defer?** - See my [YouTube video](#) ;)

### Coding:

1. **Set up all the tools on your laptop:**
   - VS Code
   - Chrome
   - Chrome Extensions
2. **Create a new Git repo.**
3. **Build your first Hello World program using:**
   - Just HTML
   - JS to manipulate the DOM
   - React
     - Use CDN Links
     - Create an Element
     - Create nested React Elements
     - Use `root.render`
4. **Push code to GitHub (Theory as well as code).**
5. **Learn about Arrow Functions before the next class.**

### References:

- [React createElement API](https://beta.reactjs.org/apis/react/createElement)
- [YouTube Video](https://www.youtube.com/watch?v=IrHmpdORLu8)

---

## Chapter 02 - Assignment - Igniting Our App

# Setting Up Your Own React Create App

## 1. Setup Instructions

To create a new React app, follow these steps:

- Initialize a new npm project:
  ```bash
  npm init
  ```
- Install Parcel as a development dependency:

  ```bash
  npm install -D parcel
  ```

- Install React and ReactDOM:

  ```bash
  npm i react
  npm i react-dom
  ```

- Start your project with Parcel:

  ```bash
  npx parcel index.html
  ```

- Import React and React Dom
  import React from "react";
  import ReactDOM from "react-dom/client";

# Project Setup and Important Notes

- Add type as module in `index.html`:
  `<script type="module" src="app.js"></script>`
- For creating a production build, use:
  `npx parcel build index.html`

**Important points for `package-lock.json`**

1. It gives the exact version used (it locks the version).
2. Never add it to `.gitignore`.
3. SHA integrity keeps the exact version in production that was present in our system.

**Parcel does all these things (Parcel is a bundler):**

1. Uses File Watching algorithm
2. Hot Module Replacement
3. Bundling
4. Minification
5. Cleaning our code
6. Development and Production Builds
7. Super fast build algorithm
8. Image optimization
9. Caching during development
10. Compression
11. Compatible with other browser versions by adding polyfills
12. Manages the port number
13. Consistent hashing algorithm
14. Zero Configuration
15. Tree Shaking (removing unwanted code)

**Transitive Dependency:** One dependency depends on another, which depends on another, and so on.

### Theory Assignment:

- What is `NPM`?
- What is `Parcel/Webpack`? Why do we need it?
- What is `.parcel-cache`?
- What is `npx`?
- What is the difference between `dependencies` and `devDependencies`?
- What is Tree Shaking?
- What is Hot Module Replacement?
- List your favorite 5 superpowers of Parcel and describe any 3 in your own words.
- What is `.gitignore`? What should we add and not add into it?
- What is the difference between `package.json` and `package-lock.json`?
- Why should I not modify `package-lock.json`?
- What is `node_modules`? Is it a good idea to push that to Git?
- What is the `dist` folder?
- What is `browserslist`?

**Read about different bundlers:** Vite, Webpack, Parcel.  
**Read about:** `^` (caret) and `~` (tilde).  
**Read about Script types in HTML** (MDN Docs).

### Project Assignment: In Your Existing Project

1. Initialize `npm` into your repo.
2. Install `react` and `react-dom`.
3. Remove CDN links of React.
4. Install Parcel.
5. Ignite your app with Parcel.
6. Add scripts for “start” and “build” with Parcel commands.
7. Add a `.gitignore` file.
8. Add `browserslist`.
9. Build a production version of your code using `parcel build`.

### References:

- Creating your own create-react-app
- [Parcel Documentation](https://parceljs.org/)
- [Parcel on Production](https://parceljs.org/production/)
- [BrowsersList](https://browserslist.dev/)

---

## Chapter 03 - Laying the Foundation

### Key Concepts:

- **Babel:** Converts modern code into compatible versions (polyfills) and JSX into React elements.
- **Keys:** Used for DOM manipulation; only newly added keys are manipulated.
- **Component Composition:** Using one component inside another.
- **JSX:** (Functional and Class Components, and Elements in JSX)

### Topics:

- JSX
- `React.createElement` vs JSX
- Benefits of JSX
- Behind the Scenes of JSX
- Babel & Parcel's role in JSX
- Components
- Functional Components
- Composing Components

### Assignments:

1. What is JSX?
2. Superpowers of JSX.
3. Role of the `type` attribute in the script tag? What options can I use there?
4. Compare `{TitleComponent}`, `{<TitleComponent/>}`, and `{<TitleComponent></TitleComponent>}` in JSX.

### Coding Assignment:

1. Create a nested header element using `React.createElement` (h1, h2, h3 inside a div with class “title”).
2. Create the same element using JSX.
3. Create a functional component of the same with JSX.
4. Pass attributes into the tag in JSX.
5. Composition of Component (Add a component inside another).
6. Create a Header Component from scratch using Functional Components with JSX:
   - Add a logo on the left.
   - Add a search bar in the middle.
   - Add a user icon on the right.
   - Style with CSS.

### References:

- [Babel](https://babeljs.io/)
- [Attribute Type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attr-type)
- [JS Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [Babel Playground](https://babeljs.io/repl#)
- [React without JSX](https://reactjs.org/docs/react-without-jsx.html)

---

## Chapter 04 - Talk is Cheap, Show Me the Code

## About JSX

- **JSX can only have one parent.**

## React Fragment

- **React Fragment:** It acts like empty divs, written as `React.Fragment` or using shorthand `<> </>`.

## Config Driven UI

- A site that works based on the data passed to it.

## Props

- **Props:** Data or properties passed to components. Whenever we pass any data to a functional component, it is received as props.

## Virtual DOM

- The Virtual DOM is used for the reconciliation algorithm to diff one tree from another.
- It does not rerender the entire tree but only renders the differences.
- When we use unique keys, React can identify new elements added to the DOM.

## React Fiber

- **React Fiber:** A new reconciliation algorithm in React that improves the performance of the rendering process and user interactions.

### Key Concepts:

- **JSX:** Can only have one parent.
- **React Fragment:** Acts like empty divs (`React.Fragment` or `<> </>`).
- **Config Driven UI:** The site works based on the data passed to it.
- **Props:** Data or properties passed into components.
- **Virtual DOM:** Used for the reconciliation algorithm; does not rerender the whole tree, only the diff.
- **React Fiber:** A reconciliation algorithm that improves performance.

### Assignments:

1. Is JSX mandatory for React?
2. Is ES6 mandatory for React?
3. Compare `{TitleComponent}`, `{<TitleComponent/>}`, and `{<TitleComponent></TitleComponent>}` in JSX.
4. How can I write comments in JSX?
5. What are `<React.Fragment></React.Fragment>` and `<>`?
6. What is Virtual DOM?
7. What is Reconciliation in React?
8. What is React Fiber?
9. Why do we need keys in React? When do we need them?
10. Can we use index as keys in React?
11. What are props in React?
12. What is a Config Driven UI?

### Coding Assignment:

**Build a Food Ordering App:**

1. Think of a cool name for your app.
2. Build an AppLayout.
3. Build a Header Component with Logo & Nav Items & Cart.
4. Build a Body Component.
5. Build RestaurantList Component.
6. Build RestaurantCard Component.
7. Use static data initially.
8. Make your card dynamic (pass in props).
9. Use destructuring & spread operator.
10. Render your cards with dynamic restaurant data using `Array.map`.

### References:

- [Code Link](https://bitbucket.org/namastedev/namaste-react-live/src/master/)
- [React without JSX](https://reactjs.org/docs/react-without-jsx.html)
- [Virtual DOM](https://reactjs.org/docs/faq-internals.html)
- [Reconciliation](https://reactjs.org/docs/reconciliation.html)
- [React Fiber Architecture](https://github.com/acdlite/react-fiber-architecture)
- [React Without ES6](https://reactjs.org/docs/react-without-es6.html)
- [Index Keys as Anti-Pattern](https://robinpokorny.com/blog/index-as-a-key-is-an-anti-pattern)

---

## Chapter 05 - Let's get Hooked

- **Default Import and Named Import:** When we have 2 components in the same js file then can export one by default and other by named import by just adding export in front of named one.

- **Named Import:**

  ```javascript
  export const Title = () => {
    return <h1>This is the Title</h1>;
  };
  import { Title as PageTitle } from "./components/Title";
  ```

- **Default Import:**

  ```javascript
  // Title.js
  const Title = () => {
    return <h1>This is the Title</h1>;
  };

  export default Title;
  ```

- **React Uses one way Data Binding:**

- **Hooks :** Hooks are just a normal Function, It has a specific function for it.

- **Use State :** It is a type of Hook
  - We get useState from React
  - useState return an array [variable name, function to update the variable]
  - const [searchText, setSearchText] = useState("KFC"); // To create state variable

### Assignment

- What is the difference between Named Export, Default export, and \* as export?
- What is the importance of the `config.js` file?
- What are React Hooks?
- Why do we need the `useState` Hook?

### Coding Assignment:

- Clean up your code.
- Create a folder structure for your app.
- Make different files for each component.
- Create a config file.
- Use all types of import and export.
- Create a search box in your app.
- Use `useState` to create a variable and bind it to the input box.
- Try to make your search bar work.

### References

- Code Link: [https://bitbucket.org/namastedev/namaste-react-live/src/master/](https://bitbucket.org/namastedev/namaste-react-live/src/master/)

---

# Chapter 08 - Exploring the World

### **useEffect:**

The `useEffect` hook in React is a powerful feature that allows you to perform side effects in functional components.

1. **Runs Once on Render:** It is called only once when the page renders, making it an ideal place to call APIs.
2. **Side Effects:** You can perform operations such as data fetching, setting up subscriptions, or directly manipulating the DOM after rendering.

```javascript
useEffect(() => {
  // Your effect code here

  return () => {
    // Cleanup code here (optional)
  };
}, [dependencies]);
```

# Dependency Array

The second argument to useEffect is an array of dependencies. This tells React when to run the effect:

3. If you provide an empty array ([]), the effect runs only once after the initial render (similar to componentDidMount).
   If you include variables in the array, the effect runs whenever those variables change (similar to componentDidUpdate).

4. Cleanup Function: You can return a cleanup function from your effect. This is useful for cleaning up subscriptions or timers to avoid memory leaks. The cleanup function runs before the component unmounts or before the effect runs again.

### When to Use useEffect

- Fetching Data: When you need to fetch data after the component mounts.
- Subscribing to Events: When you need to set up subscriptions (e.g., WebSocket, event listeners).
- Updating the DOM: When you need to manually manipulate the DOM after rendering.
- Timers: When you need to set intervals or timeouts.

### Assignments:

- What is a Microservice?
- What is Monolith architecture?
- What is the difference between Monolith and Microservice?
- Why do we need a useEffect Hook?
- What is Optional Chaining?
- What is Shimmer UI?
- What is the difference between JS expression and JS statement?
- What is Conditional Rendering, explain with a code example?
- What is CORS?
- What is async and await?
- What is the use of `const json = await data.json();` in getRestaurants()?

### Coding Assignment:

- Play with the useEffect Hook to see when it is called? (before or after render)
- Play with dependency array in useEffect Hook
- Play with the developer console by putting a debugger in render and useEffect
- Call an actual API to get data
- Handle Error in your API call
- Build Shimmer UI when data is not loaded
- Render your UI with actual API data
- Make Search functionality work
- Make a Login Logout button which toggles with a state

---

# Chapter 09 - Finding the path

- Never write useEffect inside for loop.
- Never create useState outside function component

### **Install React Router Dom:**

```javascript
npm  i react-router-dom
```

### **Create a new component About Us:**

### \*_Inside App.js import these:_

```javascript
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

root.render(<RouterProvider router={appRouter} />);
```

### **For creating error Page:**

```javascript
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);
```

In the Error.js file to show proper error messages

```javascript
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>OOPS!</h1>
      <h1>{err.status + " " + err.statusText}</h1>
    </div>
  );
};

export default Error;
```

### **Route to other pages using outlet:**

In the children write all the components that needs to be shown between Header and Footer.

```javascript
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
```

### **Dyanamic Route in React:**

For fetching dyanamic Ids in route use useParams hook of react
Whatever params is passed in url from the link it give us in component.

Restaurant Card receives the Id

```javascript
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { id } = useParams();

  console.log({ id });
  return (
    <div>
      <h1>Restaurant Id : {id}</h1>
      <h2>Restaurant Name</h2>
    </div>
  );
};

export default RestaurantMenu;
```

Id that is passed from here:
{
path: "/restaurant/:id",
element: <RestaurantMenu />,
},

# Assignment

## Theory Questions

1. What are various ways to add images into our App? Explain with code examples.
2. What would happen if we do `console.log(useState())`?
3. How will `useEffect` behave if we don't add a dependency array?
4. What is SPA (Single Page Application)?
5. What is the difference between Client-Side Routing and Server-Side Routing?

## Coding Assignment

1. Add Shimmer Effect without installing a library.
2. Install `react-router-dom`.
3. Create an `appRouter` and provide it to the app.
4. Create a Home, About, and Contact page with Link (use child routes).
5. Make an Error page for routing errors.
6. Create a Restaurant Page with dynamic restaurant ID.
7. (Extra) Create a login page using Formik Library.

## Resources

- **React Router DOM**: [React Router Documentation](https://reactrouter.com/en/main/start/overview)
- **Client-Side Routing**: [Client-Side Routing Explanation](https://reactrouter.com/en/main)
- **Formik**: [Formik Documentation](https://formik.org/)

---

# Chapter 10 - Lets get Classy

- To create a class based component create a class and extend it from React.Component
- To use the inputs passed from the parent use this.props.name and in functional component we write props.name by passing props in function.
- Write everything inside render method for class based component.

```javascript
import React from "react";

class Profile extends React.Component {
  render() {
    return (
      <div>
        <h1>Class based components</h1>
        <h2>Name: {this.props.name}</h2>
      </div>
    );
  }
}

export default Profile;
```

### **States in Class based Component**

### **Super Keyword in React**

In React class-based components, super(props) is used because you're extending a base class (in this case, React.Component), and it's necessary to call the constructor of the parent class (super()) before you can access this in your derived class.

### **Lifecycle Hooks**

1)componentDidMount
Called after render is called. First constructor, then render and after that componentDidMount is called.
Best place to make API Calls.

2)componentDidUpdate
It is called when component is rerendered after api call.

3)componentWillUnmount
It is called when the component is destroyed.

Calling a API In component
1)Create this.state = {}
2)Inside componentDidMount write the logic of fetch api call.
3)Then use this.state.object.param inside the render html.

```javascript
import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    //Create State
    this.state = {
      userInfo: {
        login: "dummyName",
        type: "India",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Vaishali-123Sharma");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>Class based components</h1>
        <img src={this.state.userInfo.avatar_url}></img>
        <h2>Name: {this.state.userInfo.login}</h2>
        <h2>Name: {this.state.userInfo.type}</h2>
        <button
          onClick={() => {
            this.setState({
              count: 1,
            });
          }}
        >
          Set Count
        </button>
        <h2>Count: {count}</h2>
      </div>
    );
  }
}
export default Profile;
```

### **Unmounting in Function Based Component**

To unmount a component in Functional component , write it inside return from useEffect.

The order of Life Cycle Hooks are:
/\*\*

-
- Parent Constructor
- Parent render
- First Child constructor
- First Child render
- Second Child constructor
- Second Child render
-
- DOM UPDATED for children
-
- first Child componentDidMount
- Second Child componentDid
- Parent componentDidMount
-
- \*/

1. **How do you create Nested Routes with react-router-dom configuration?**

   - Nested routes can be created in `react-router-dom` by using the `<Route>` component inside another `<Route>` component. This allows you to render child components within a parent route. The parent route serves as a wrapper, and the child routes can be rendered in specific areas using the `<Outlet>` component.

2. **Read about `createHashRouter` and `createMemoryRouter` from React Router docs.**

   - `createHashRouter`: This router is used for applications where the browser's URL uses the hash portion (`#`) to keep track of the current location. This is especially useful for older browsers or static file servers.
   - `createMemoryRouter`: This router keeps the history of routes in memory (no actual URL changes). It’s useful for testing, or for applications where URL changes aren’t necessary (like React Native or Electron apps).

3. **What is the order of lifecycle method calls in Class-Based Components?**

   - The lifecycle methods in class-based components are called in the following order:
     1. **Mounting**: `constructor()`, `static getDerivedStateFromProps()`, `render()`, `componentDidMount()`
     2. **Updating (state or props change)**: `static getDerivedStateFromProps()`, `shouldComponentUpdate()`, `render()`, `getSnapshotBeforeUpdate()`, `componentDidUpdate()`
     3. **Unmounting**: `componentWillUnmount()`

4. **Why do we use `componentDidMount`?**

   - `componentDidMount` is used to perform side effects after the component has been mounted into the DOM. Common use cases include fetching data from APIs, subscribing to events, or setting up timers.

5. **Why do we use `componentWillUnmount`? Show with an example.**

   - `componentWillUnmount` is used for cleanup tasks before a component is removed from the DOM. Common uses include clearing intervals, canceling network requests, or unsubscribing from events.

   ```js
   class Timer extends React.Component {
     componentDidMount() {
       this.timerID = setInterval(() => {
         console.log("Tick");
       }, 1000);
     }

     componentWillUnmount() {
       clearInterval(this.timerID); // Clear the interval when the component unmounts
     }

     render() {
       return <div>Timer Running</div>;
     }
   }
   ```

## Theory Assignment

1. How do you create Nested Routes react-router-dom configuration?
2. Read about `createHashRouter`, `createMemoryRouter` from React Router docs.
3. What is the order of life cycle method calls in Class Based Components?
4. Why do we use `componentDidMount`?
5. Why do we use `componentWillUnmount`? Show with an example.
6. (Research) Why do we use `super(props)` in the constructor?
7. (Research) Why can't we have the callback function of `useEffect` as async?

## Coding Assignment

1. Create a Class Based Component.
2. Create 2 class-based child components.
3. Pass props from Parent to child.
4. Create a constructor.
5. Create a state variable inside the child component.
6. Use `this.setState` to update it.
7. What if there are multiple state variables?
8. Write a `console.log` for each lifecycle method.
9. Play with the console logs to find out the correct order of their execution.
10. Create an interval inside `componentDidMount`.
11. Use `clearInterval` to fix the issue caused by that interval.
12. **React Life Cycle Method Diagram**: Refer to the link below:
    - [React Life Cycle Methods Diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
13. **Code Link**:
    - [Namaste React Live](https://bitbucket.org/namastedev/namaste-react-live/src/master/)

---

# Chapter 11 - Optimizing our App

## Hooks in React

Hooks are used to increasability of our code and returns some value not JSX.
All the api codes and logic is exported from here.
We use hook to export some logic into the function.

## Using Hooks to create online offline application

```js
import { useEffect, useState } from "react";

const useOnline = () => {
  const [isOnline, setIsOnline] = useState(false);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
    };

    const handleOffline = () => {
      setIsOnline(false);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return isOnline;
};
export default useOnline;
```

## Dyanaic import in React (Lazy Import in place of normal import)

Index.js will be created seperately and instmart.js will be created seperately.
Instead of using:

```js
//Instead of normal import use dyanamic import
import Instamart from "./components/instamart";
//Use this
const instamart = lazy(() => import("./components/instamart"));
```

As the lazy component will be loaded seperately with delay it will be dlayed.
React will know by it by using Suspese as shown below.

```js
import React, { lazy, Suspense } from "react";
// till the time lazy component is notu loaded it will show Shimmer
 {
    path: "/instamart",
    element: (
        <Suspense fallback={<Shimmer/>}>
            <Instamart />
        </Suspense>
    ),
},
```

---

# Chapter 12 - Jo dikhta he wo bikata he

Install Tailwind CSS with Parcel
[Tailwind CSS Setup](https://tailwindcss.com/docs/guides/parcel)

## Theory:

1. **Explore all the ways of writing CSS.**
2. **How do we configure Tailwind?**
3. **In `tailwind.config.js`, what does all the keys mean (content, theme, extend, plugins)?**
4. **Why do we have `.postcssrc` file?**

## Coding:

- Configure Tailwind and try to build your whole app using Tailwind.

## References:

- [Styled Components](https://styled-components.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Bootstrap](https://getbootstrap.com/)
- [Material UI](https://mui.com/)

---

# Chapter 13 - Data is the New Oil

## Props Drilling

passing props from one layer to another and drilling down for passing data.

## Lifting the State UP

Parent wil have control to show and hide the state of its children, child should not have seperate states.

## React Context

To manage state throughout the react application , same as redux.

Create a context and call it inside useContext as shown below to use it through out the application.

```js
import UserContext from "../utils/useContext";
import { useContext } from "react";

const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <span className="p-10 m-10 font-bold">
        This site is developed by {user.name}-{user.email}
      </span>
    </div>
  );
};

export default Footer;
```

In class based components use it like this

```js
import UserContext from "../utils/userContext";

<UserContext.Consumer>
  {({ user }) => {
    return (
      <h4 className="font-bold">
        This is {user.name}-{user.email}
      </h4>
    );
  }}
</UserContext.Consumer>;
```

## Theory:

1. **What is prop drilling?**
2. **What is lifting the state up?**
3. **What is Context Provider and Context Consumer?**
4. **If you don’t pass a value to the provider, does it take the default value?**

## Coding:

- Practice React Context with code examples.
- Try out Nested Contexts.

## References:

- [Lifting State Up](https://reactjs.org/docs/lifting-state-up.html)
- [React Context](https://reactjs.org/docs/context.html)

---

# Chapter 14 - Let's Build our Store

```js
npm i @reduxjs/toolkit
npm i react-redux
```

# Redux in React (Based on Namaste React)

Redux is a **state management library** that is commonly used with React to handle the global state of an application. It provides a predictable way to manage state across large applications, making it easier to share data between components without prop-drilling.

## Key Concepts in Redux

### 1. State Management:

Redux manages the state of your application by storing it in a **single JavaScript object** called the **store**. This central store allows any component to access the state without passing props down through multiple layers.

### 2. Three Core Principles:

Redux is based on three key principles that help make state management more predictable and structured:

1. **Single Source of Truth:**
   - The entire state of the application is stored in a single object, which lives inside the Redux store. This ensures that your app has one consistent version of the state.
2. **State is Read-Only:**
   - The state can only be updated by dispatching **actions**. This makes the state predictable and prevents components from accidentally modifying it.
3. **Changes are Made with Pure Functions:**
   - To update the state, Redux uses **reducers**, which are pure functions. A reducer takes the previous state and an action, and returns the next state. The reducer function ensures that the state updates in a predictable and testable way.

## Redux Workflow

The basic flow of data in Redux follows these steps:

1. **Actions:**

   - Actions are plain JavaScript objects that describe the intention to change the state. An action must have a `type` property, which defines the type of action being performed.

   ```javascript
   const addItem = {
     type: "ADD_ITEM",
     payload: {
       id: 1,
       name: "Apple",
     },
   };
   ```

2. **Reducers:**

- A reducer is a pure function that takes the current state and an action, and returns a new state. Reducers define how the state changes in response to the actions.

```javascript
const initialState = {
  items: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    default:
      return state;
  }
};
```

3. **Store:**

- The Redux store holds the entire state of the application. It is created using the createStore function and is responsible for allowing access to the state, dispatching actions, and registering listeners.

```javascript
import { createStore } from "redux";
const store = createStore(cartReducer);
```

4. **Dispatch:**

- To change the state, you dispatch an action to the store using store.dispatch()

```javascript
store.dispatch({
  type: "ADD_ITEM",
  payload: { id: 2, name: "Banana" },
});
```

# Connecting Redux to React

## `react-redux`

To connect Redux with React, we use the **`react-redux`** library, which provides tools to easily integrate Redux into React components. Here are the key utilities:

### 1. `Provider`

`Provider` is a component that wraps your entire application and makes the Redux store available to all components within your app. Without it, the components cannot access the store.

```javascript
import { Provider } from "react-redux";
import { store } from "./store"; // Your Redux store

const App = () => (
  <Provider store={store}>
    <YourComponent />
  </Provider>
);
```

### 2. `useSelector`

`useSelector` is a hook that allows you to extract data from the Redux store's state. You pass a function to useSelector that receives the entire state and returns the part of the state your component needs.

```javascript
import { useSelector } from "react-redux";

const Cart = () => {
  const items = useSelector((state) => state.items); // Accessing items from the Redux store
  return <div>{items.length} items in cart</div>;
};
```

### 3. `useDispatch`

`useDispatch` is a hook that allows you to dispatch actions to the Redux store from within your React components. This hook gives access to the dispatch function to trigger state changes.

```javascript
import { useDispatch } from "react-redux";

const AddItemButton = () => {
  const dispatch = useDispatch();
  const addItem = () => {
    dispatch({
      type: "ADD_ITEM",
      payload: { id: 3, name: "Grapes" },
    });
  };
  return <button onClick={addItem}>Add Item</button>;
};
```

---

# Chapter 15 - Time for the test

### React Testing Library

React Testing Library builds on top of DOM Testing Library by adding APIs for working with React components.

1)Install React testing liabrary

```javascript
npm i -D jest
npm install --save-dev @testing-library/react @testing-library/dom
```

2)Configure Jest

```javascript
//npx because we want it only once, npm is for everytime
npx jest --init
```

3)Install jest environment js dom

```javascript
npm i -D jest-environment-jsdom
```

4)Create my first test File

```javascript
//Sum.test.js
import { sum } from "../sum";

test("Check Sum of two numbers", () => {
  expect(sum(2, 5)).toBe(5);
});

//Sum.js
export const sum = (a, b) => a + b;
```

5)Configure Jest with Babel

```javascript
npm install --save-dev babel-jest @babel/core @babel/preset-env
```

6)Configure Babel by adding this in .babelrc

```javascript
{
    "presets": [["@babel/preset-env", {"targets": {"node": "current"}}]]
}
```

7)Write your test cases.
8)Add coverage inside gitignore

9)Install Babel prset react so that the testing liabrary understand JSX

```javascript
npm i -D @babel/preset-react
```

10)Configure .babelrc for Preset React

```javascript
{
    "presets": [
        ["@babel/preset-env", {"targets": {"node": "current"}}],
        ["@babel/preset-react",{"runtime":"automatic"}]
    ]
}
```

11)Add Provider and store in the Header test case for jest to understand

```javascript
import Header from "../Header";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../utils/store";

test("Logo should load on Rendering Header", () => {
  const header = render(
    <Provider store={store}>
      <Header />
    </Provider>
  );
});
```

12)Create a dummy function for fetch
global.fetch = jest.fn()

13)Install testing liabrary Jest Dom

```javascript
npm i -D @testing-library/jest-dom
```
