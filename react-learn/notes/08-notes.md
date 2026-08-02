# React `useState` & `onClick`

[Code](../05-bg-changer/src/App.jsx)

## `useState()`

```jsx
const [color, setColor] = useState("olive");
```

- `color` → Current state value.
- `setColor` → State setter function.
- `"olive"` → Initial state (used only on the first render).

---

## Initial Render

```jsx
style={{ backgroundColor: color }}
```

- Initially, `color = "olive"`.
- Therefore, the page background is **olive**.
- Calling `setColor()` updates the state and React re-renders the component with the new color.

---

## `onClick`

`onClick` expects a **function**, not the result of a function call.

### ❌ Wrong

```jsx
onClick={setColor("red")}
```

- Executes immediately during rendering.
- State changes before the user clicks.

### ✅ Correct

```jsx
onClick={() => setColor("red")}
```

- Passes a function to `onClick`.
- React executes it only when the button is clicked.

---

## Why Arrow Function?

The arrow function delays the execution of `setColor()` until the click event occurs.

```
Render
   ↓
Store function
   ↓
User clicks
   ↓
Function executes
   ↓
setColor("red")
   ↓
State updates
   ↓
Component re-renders
```

---

## React Re-render Flow

```
Button Click
      ↓
setColor("red")
      ↓
State Changes
      ↓
React Re-renders Component
      ↓
UI Updates
```

---

## Key Points

- `useState()` stores component state.
- Initial state is used only during the first render.
- `setState` (e.g., `setColor`) updates the state and triggers a re-render.
- `onClick` must receive a function.
- Use an arrow function when passing arguments to an event handler.