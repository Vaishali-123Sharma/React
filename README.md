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

# React Concepts

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

# Chapter 08 - Exploring the world

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
