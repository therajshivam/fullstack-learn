# Virtual DOM, Fibre and Reconciliation

Virtual DOM should be learn even if its not use in modern react.

We will discuss about the `.createRoot()`

[Link of React Fibre Architecture Article](https://github.com/acdlite/react-fiber-architecture)

`.createRoot()` this method, behind the scene it creates a dom like structure like browser dom.  
Because it compares the main DOM with its DOM, and update only those changes which are updated on UI.  
Whereas what the browser do? Browser removes the whole DOM and repaint the DOM again. This is called page reload. Loading shows the whole web structure is again creating on reload.  
But what happens in the Virtual DOM? - Here whole the DOM can retraced like tree like structure and only the changes values get replace and update.  

Now suppose what if some elements are dependent on network? - Here ui updatation going back to back in a less time if network updates. Here we can think, if there is a feature that few minutes we can wait so we can get only the final update, ignoring the intermediate update.

How can this happen that UI dont get immediate update and by putting any algorithm optimise the update?  

---

## React Fibre
React Fibre is implementation of React's core algorithm. React behind the hood uses fibre algorithm for updating the virtual dom.

The goal of React Fiber is to increase its suitability for areas like animation, layout, and gestures. Its headline feature is incremental rendering: the ability to split rendering work into chunks and spread it out over multiple frames.

Other key features include the ability to pause, abort, or reuse work as new updates come in; the ability to assign priority to different types of updates; and new concurrency primitives.

Hydration process : Hydration is the process where React attaches JavaScript behavior to HTML that has already been rendered on the server.

## What is reconciliation?
*reconciliation*  
The algorithm React uses to diffentiate one tree with another to determine which parts need to be changed.  

*update*  
A change in the data used to render a React app. Usually the result of `setState`. Eventually results in a re-render.

The central idea of React's API is to think of updates as if they cause the entire app to re-render. This allows the developer to reason declaratively, rather than worry about how to efficiently transition the app from any particular state to another (A to B, B to C, C to A, and so on).

**imp**  
**Reconciliation is the algorithm behind what is popularly understood as the "virtual DOM."**   

A high-level description goes something like this: when you render a React application, a tree of nodes that describes the app is generated and saved in memory. (JSX Object tree).

This tree is then flushed to the rendering environment — for example, in the case of a browser application, it's translated to a set of DOM operations. When the app is updated (usually via `setState`), a new tree is generated. The new tree is diffed with the previous tree to compute which operations are needed to update the rendered app.

The key points are:
- Different component types are assumed to generate substantially different trees. React will not attempt to diff them, but rather replace the old tree completely.

- **Diffing of lists is performed using keys. Keys should be "stable, predictable, and unique."**

### Scheduling
*scheduling*  
the process of determining when work should be performed.

*work*  
any computations that must be performed. Work is usually the result of an update (e.g. setState).

The key points are:
- In a UI, it's not necessary for every update to be applied immediately; in fact, doing so can be wasteful, causing frames to drop and degrading the user experience.

- Different types of updates have different priorities — an animation update needs to complete more quickly than, say, an update from a data store.

- A push-based approach requires the app (you, the programmer) to decide how to schedule work. A pull-based approach allows the framework (React) to be smart and make those decisions for you.

## Fibre Overview
Functionality : 
- pause work and come back to it later.
- assign priority to different types of work.
- reuse previously completed work.
- abort work if it's no longer needed.
