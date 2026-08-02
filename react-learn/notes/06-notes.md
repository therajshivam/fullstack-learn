# Components & Props

## Component
- A reusable piece of UI.
- A JavaScript function that returns JSX.

```jsx
function Card() {
  return <h1>Hello</h1>;
}
```

Use as:

```jsx
<Card />
```

---

## Why Components?
- Reuse UI
- Avoid duplicate code
- Easier maintenance
- Better code organization

---

## Props (Properties)
- Read-only data passed from **Parent → Child**.
- Makes components dynamic and reusable.

```jsx
<Card username="Hitesh" />
```

---

## Receiving Props

### Using props object

```jsx
function Card(props) {
  return <h1>{props.username}</h1>;
}
```

### Using destructuring (Recommended)

```jsx
function Card({ username }) {
  return <h1>{username}</h1>;
}
```

---

## Passing Props

### String

```jsx
<Card username="Hitesh" />
```

### Variable

```jsx
<Card username={name} />
```

### Object

```jsx
<Card user={userObj} />
```

### Array

```jsx
<Card items={arr} />
```

---

## Multiple Props

```jsx
<Card
  username="Hitesh"
  btnText="Visit Me"
/>
```

---

## Default Props

```jsx
function Card({
  btnText = "Visit Me"
}) {}
```

If `btnText` isn't passed, `"Visit Me"` is used.

---

## Props are Read-only

❌ Don't modify props inside the child component.

Props are only used to display or process data.

---

## Naming Convention

Component names must start with a **capital letter**.

✅

```jsx
function Card() {}
```

❌

```jsx
function card() {}
```

---

## Data Flow

```
Parent Component
        │
   passes props
        ▼
Child Component
```

One-way data flow (**Parent → Child**).

---

## Key Points

- Components = Reusable UI.
- Props = Read-only data.
- Props make components reusable.
- Use destructuring for cleaner code.
- Use default values to avoid `undefined`.
- Pass JavaScript values using `{}`.