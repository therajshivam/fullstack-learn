# Create own react library

It is just a basic implentation, to understand how react works under the hood.

What we done so far :

1. We created a custom own react like file. [here](../02-customReact/)

- [here](../02-customReact/customReact.js) We created our custom react element.  
  Here we created a container variable in which we have get the #root div with `querySelector()`.  
  Then created a Render function : Which will takes the elements and inject in the container.  
  Now we have to understand how the react elements are made. So we created a custom render function, with two methods. (1st was basic approach, repetation of setAttribute for every function. 2nd was modular approach, where we make a loop for setAttribute).  
  For this custom render, we have expected to take elements in this way:
  ```javascript
  const reactElement = {
    type: "a",
    props: {
      href: "https://google.com",
      target: "\_blank",
    },
    children: "Click me to visit google",
  };
  ```

2. Then we went in vite react folder [here](../01vitereact/).  
   Here we went into [main.jsx](../01vitereact/src/main.jsx). 
   - We observed that App.jsx is just a method, so can we make another method in main.jsx. So we made a method named myApp.jsx and we see how the method is executed in react render method. (We can execute with `<myApp />` or `myApp` not with `myApp()`). 
   - Then we experiment by observing that react is taking the jsx and parse it into a tree structure object of dom, so can we do the same with our custom element object. But our custom object does not run. Because react have its own rules. 
   - Then we observed that if we give element in jsx like this, then react is rendering it.:
    ```jsx
    const AnotherElement = (
    <a href="https://google.com" target='_blank'></a>
    )
    ```
    - Here, we understood that our custom object element cant run as its not according to the react rules.
    - Then use a method `React.createElement()`. It get bydefault inject by babble (transcripter). Using this method created a object like react suggested. 
    ```jsx
    const reactElement = React.createElement(
      'a',
      {href : 'https://google.com', target : '_blank'},
      'click me to visit google',
      anotherVariable,
    )
    ```
    - first is 'a' - element.
    - second is attributes inside an object.
    - third is text.
    - last is evaluated expression (variables).
    
## Evaluated Expression
```jsx
function App() {
  const username = "chai aur code";

  return (
    <>
      <h1>Chai aur react vite {username}</h1>
      <Chai />
    </>
  );
}
```

- `{username}` -> expression/ evaluated expression (use to pass variable)
- here we dont write js, we write the final output of js.
- why cant we write js in this evalutated expression. because when react make dom tree object, variable is injected at the last, there is rule of object, we cant write js operation there, hence after evalution value is injected.
