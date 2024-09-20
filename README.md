Chapter 01 - Inception
[Link to my Code](https://bitbucket.org/namastedev/namaste-react-live/commits/928e6faee91549739adc0c3c97c8f0352a55607e)

Theory -
● What is Emmet?
● Difference between a Library and Framework?
● What is CDN? Why do we use it?
● Why is React known as React?
● What is crossorigin in script tag?
● What is diference between React and ReactDOM
● What is difference between react.development.js and react.production.js files via CDN?
● What is async and defer? - see my Youtube video ;)

Coding -
● Set up all the tools in your laptop
○ VS Code
○ Chrome
○ Extensions of Chrome
● Create a new Git repo
● Build your first Hello World program using,
○ Using just HTML
○ Using JS to manipulate the DOM
○ Using React
■ use CDN Links
■ Create an Element
■ Create nested React Elements
■ Use root.render
● Push code to Github (Theory as well as code)
● Learn about Arrow Functions before the next class
References: -  
https://beta.reactjs.org/apis/react/createElement -  
https://www.youtube.com/watch?v=IrHmpdORLu8

.......................................................................................................

Chapter 2:
1)Setup our own React Create App
● npm init
● npm install -D parcel
● npm i react
● npm i react-dom
● npx parcel index.html

2)Import React and React Dom
import React from "react";
import ReactDOM from "react-dom/client";

3)Add type as module in index.html <script type="module" src="app.js"></script>
4)For creating production build using : npx parcel build index.html

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

Transitive Dependency: One dependency depends on one and that depends on another and so on.
