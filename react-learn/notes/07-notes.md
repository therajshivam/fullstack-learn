# React State Batching & Functional Updates (Important Interview Question)

## Theory

React **does not update the state immediately** after every `setState`/`setCounter` call. Instead, it **batches (groups) multiple state updates** occurring in the same event and processes them together for better performance.

Because of batching, all `setCounter(counter + 1)` calls inside the same function use the **same `counter` value** from the current render.

---

## Example 1: Normal State Update

```jsx
const addValue = () => {
  setCounter(counter + 1);
  setCounter(counter + 1);
  setCounter(counter + 1);
  setCounter(counter + 1);
};
```

Suppose:

```js
counter = 15;
```

React sees:

```jsx
setCounter(16);
setCounter(16);
setCounter(16);
setCounter(16);
```

Since all updates are identical, React batches them and applies only the final state.

**Final Counter = 16 (+1)**

---

## Example 2: Functional Update

```jsx
const addValue = () => {
  setCounter(prev => prev + 1);
  setCounter(prev => prev + 1);
  setCounter(prev => prev + 1);
  setCounter(prev => prev + 1);
};
```

Here, React passes the **latest updated state** to each updater function.

Execution:

```
15 → 16
16 → 17
17 → 18
18 → 19
```

**Final Counter = 19 (+4)**

---

## Why Functional Update Works

```jsx
// setCounter((prev) => {return prev + 1});
setCounter(prev => prev + 1);
```

The function passed to `setCounter` is called an **updater function** (functional update).

Instead of using the old `counter` value, React provides the **latest state (`prev`)** after each update, so every update builds on the previous one.

---

## When to Use Functional Updates

Use the functional form whenever the new state depends on the previous state.

Examples:

- Counter increment/decrement
- Toggle values
- Updating arrays
- Updating objects
- Multiple consecutive state updates

---

## Interview Answer (30 sec)

React batches multiple state updates for performance. When using `setCounter(counter + 1)`, every call uses the same `counter` value from the current render, so multiple calls become duplicate updates and the counter increases only once.

Using the functional form `setCounter(prev => prev + 1)` solves this because each updater function receives the latest state. React executes them sequentially, so four updates increase the counter by four.

---

## Key Takeaway

❌

```jsx
setCounter(counter + 1);
```

Uses the **current render's state**.

✅

```jsx
setCounter(prev => prev + 1);
```

Uses the **latest updated state**.

**Rule:** Whenever the next state depends on the previous state, always use the functional update form.