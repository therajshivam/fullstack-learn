# React Flow

## How Javascript is inject in the HTML?

### 1. How is it happening in create-react-app?

In create-react-app, `index.html` is located inside the public folder. This is the only HTML page we have. It is the main page which will load in browser. Hence react is called as SPA (Single Page Application).

#### How SPA is working?

In react, only the `index.html` page gets load in the browser. In one HTML file all the work happens.  
DOM foundation remains the same in this situation too, as all the elements which comes inside a page like images, elements tags, etc comes from the DOM manipulation. Going from one page to another, only DOM is getting manipulated, as whole new elements gets rendered.

```html
<body>
  <noscript>You need to enable JavaScript to run this app.</noscript>
  <div id="root"></div>
</body>
```

In this HTML body:

- `noscript` tag to alert browser, if it does not have js enabled to enable it.
- It have an empty `div` with an id 'root'.
- But here no javascript script tag is enabled.

In _src_ folder we have two files - **main.js** and **App.js**.

`index.js` : It is the main entry point of react.

```javascript
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
```

Two libraries are imported here - React and React-Dom, to manipulate the Web DOM. React is core foundational libraries which take all the references. React-DOM is its implementation on Web.

A variable name `root` is declared.

`ReactDOM` : Website have its own DOM, but react creates its own DOM, which is called virtual DOM. It compares virtual DOM with the main DOM, and checks what are difference in the DOM. Then it only changes only those elements which are different.

`.createRoot()` : It is a method inside the `ReactDOM`.

After it we are holding the div of the index.html using getElementById.

Then on div, `<App />` is getting rendered by `.render()` method.

Using the jsx, custom tags are getting build like `<App />`.

`<App />`: This is coming from `App.js` file.

```javascript
function App() {
  return <h1>Chai Aur React</h1>;
}

export default App;
```

It is a simply function written. Where a function is written and here HTML can be returned. Then this function is exported to the index.js.

So in index.js, this HTML is getting rendered.

#### One important thing:

In the index.html, there is no script tag to inject the javascript in the index.html. It happens by the `react-scripts` dependency available in the package.json.

### 2. How is it happening in vite react app?

Here, index.html is in the root directory.

Vite doesnot have `react-scripts` dependency. Here, script tag is added into the index.html itself, to inject the javascript codes.

Here, main.jsx is the entry point of the react. Here, it is the same file as index.js of create-react-app. In this file, only difference is no root variable is declared, here directly render method is attached to the React-DOM.

## Creating a Component

Simple file is created, For basic react, it can be done in .js extention while in the Vite, it must be a .jsx file.

In the file, a function is created, where HTML is returned. Then this function is exported , and its imported in the App.js or App.jsx. Here, in App function, the component function is used, as a html custom element. But in this return only one html tag can be returned. Hence, <></> fragments can be done to wrap all the html elements inside it.

## Learnings :

1. While making components in create-react-app or vite; naming convention of function should be start from capital letter. Otherwise throws error.

2. Keep component file name also in capital as its a good practice.

3. Some libraries like Vite will force to keep component file name extention as jsx.(If html is returned from that file).

4. <></> it is called fragments. In App.jsx or App.js while returning, only one html tag can be return else it will throw error, to tackle this we wrap all those inside a div tag which is also called as fragments.

5. HTML is called SPA because it have only one html file. In the same page it is rendering, dom is adding and removing on the same page.
