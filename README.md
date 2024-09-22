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
  npm install -D parcel

- Install React and ReactDOM:
  npm i react
  npm i react-dom

- Start your project with Parcel:
  npx parcel index.html

- Import React and React Dom
  import React from "react";
  import ReactDOM from "react-dom/client";

- Add type as module in index.html <script type="module" src="app.js"></script>
- For creating production build using : npx parcel build index.html

Important points for package.lock.json
1)It gives the exact version used (It locks the version)
2)Never add it in gitignore
3)sha integrity keeps the exact version on production that was present in our system

Parcel does what all things (Parcel is a bundler)
1)Use File Watching algorithm
2)Hot Module Replacement
3)Bundling
4)Minification
5)Cleaning our code
6)Dev and Production Build
7)Super fast build algorithm
8)Image optimization
9)Caching while development
10)Compression
11)Compatible with other version of browsers by adding polyfills
12)Manages the port number
13)Consistent hashing algorithm
14)Zero Config
15)Tree Shaking(removing unwanted code)

Transitive Dependency: One dependency depends on one and that depends on another and so on.

**Please Note:** Write the answers and code on your own while completing your assignments. This practice will help you develop muscle memory and reinforce your understanding of concepts. ✌

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
  export const Title = () => {
  return <h1>This is the Title</h1>;
  };
  import { Title as PageTitle } from './components/Title';

- **Default Import:**
  // Title.js
  const Title = () => {
  return <h1>This is the Title</h1>;
  };

export default Title;

- **React Uses one way Data Binding:**

- **Hooks :** Hooks are just a normal Function, It has a specific function for it.

- **Use State :** It is a type of Hook
  - We get useState from React
  - useState return an array [variable name, function to update the variable]
  - const [searchText, setSearchText] = useState("KFC"); // To create state variable
