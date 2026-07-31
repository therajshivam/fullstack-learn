## Why was react created?
Phantom message problem in Facebook.   
Sync wasnt between State and UI.

React is a library.    
React makes a single page application (SPA), Page does not reload. For this page manipulation is done using router.

## Topics to learn in react : 
- core of React (state, ui manipulation. JSX)
- component reusability
- Reusing of component (Props)
- How to propogate change (hooks)

## Additional Add ons to React :
- Router (React doesnt have router) -> React-Router-Dom
- State management (React doesnt have state management) -> Redux, Redux toolkit, Zustang, context API
- Class based component -> legacy code.
- BAAS Apps (firebase, supabase)

## After React :
- Learn Backend
- React is not a complete solution in most case (no SEO, browser render of JS, no routing)  
- Framework (Nextjs, Gatsby, Remix)

## React Overview : 
Library is **REACT**.   
With this we got more attachment : **REACT-DOM** and **REACT NATIVE**.  
For Websites - REACT and REACT-DOM.  
For Mobile Apps - REACT and REACT-NATIVE.


## Create React Project :
npx -> Node Package Executor
### 1. From create-react-app Utility
create project -> npx create-react-app filename   

This is a very bulky utility, adds unnecessary files. Packages size are big.  
Therefore recommend to use **Vite** or **Parcel**. These are bundler utilities. 

Go to package.json -> it is the entry point. 

run the project -> npm run start 

npm run start -> runs the build command which will go for production. It will create a build folder. This folder contains static assets, javascript. Build folder is serve to users not src folder. 

Create-react-app is not a good way to create react project as it takes too time and its bulky. Hence use Vite.

#### Folder Structure

- **src:** folder is the main workspace where almost all the codes are written. main componets are only **App.js** and **index.js**. Codes are written in the App.js and then its imported in the index.js.


### 2. Vite Bundler
Create React project through Vite.  
create project -> npm create vite@latest

In package.json -> devDependencies are use for development, doesnot go in the production. 

Node modules are not present here. To install it -> npm i.

npm run dev -> to start the project. 

#### Folder Structure

- **src:** It have **App.jsx** and **main.jsx**.
