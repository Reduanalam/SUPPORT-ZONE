# 🎯 Customer Support Zone

A React-based **Customer Support Zone** designed to display customer tickets, track progress, and mark them as resolved. Built with **React 18**, **Vanilla CSS**, and **React-Toastify**.

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
# → Open http://localhost:5173

# Build for production
npm run build
```

---

## 📁 Project Structure

```
support-zone/
├── index.html
├── vite.config.js
├── package.json
├── README.md
└── src/
    ├── main.jsx                   # React DOM entry
    ├── App.jsx                    # Root — all shared state lives here
    ├── components/
    │   ├── Navbar.jsx             # Sticky navbar with logo + links + CTA
    │   ├── Banner.jsx             # Two gradient stat cards (In Progress / Resolved)
    │   ├── TicketCard.jsx         # Individual ticket card component
    │   ├── TaskStatusPanel.jsx    # Right-side task tracker
    │   └── Footer.jsx             # Dark footer with columns
    ├── data/
    │   └── tickets.js             # 10 JSON ticket objects
    └── styles/
        ├── index.css              # CSS variables + global reset
        ├── App.css                # Layout
        ├── Navbar.css
        ├── Banner.css
        ├── TicketCard.css
        ├── TaskStatusPanel.css
        └── Footer.css
```

---

## 🧰 Tech Stack

- **React 18** + **JSX**
- **Vite** (build tool)
- **Vanilla CSS** with custom properties
- **React-Toastify** (replaces all browser alerts)

---

## ❓ React Questions

---

### 1. What is JSX, and why is it used?

**JSX** (JavaScript XML) is a syntax extension that lets you write HTML-like markup directly inside JavaScript.

```jsx
// JSX
const card = <div className="card"><h3>{ticket.title}</h3></div>;

// What Babel compiles it to:
const card = React.createElement("div", { className: "card" },
  React.createElement("h3", null, ticket.title)
);
```

**Why it is used:**
- Makes UI code readable — structure and logic live together
- Allows embedding any JS expression inside `{}`
- Errors are caught at compile time
- Makes composing components natural and intuitive

---

### 2. What is the difference between State and Props?

| | **Props** | **State** |
|---|---|---|
| Owned by | Parent component | The component itself |
| Mutable? | ❌ Read-only | ✅ Via setter function |
| Purpose | Pass data into component | Track changing internal data |
| Re-render | Yes, when parent re-renders | Yes, when setter is called |

```jsx
// PROPS — Banner receives counts, cannot modify them
function Banner({ inProgressCount, resolvedCount }) {
  return <span>{inProgressCount}</span>; // read-only
}

// STATE — App owns and updates the counts
function App() {
  const [inProgress, setInProgress] = useState([]);
  setInProgress(prev => [...prev, ticket]); // triggers re-render
}
```

---

### 3. What is the `useState` hook, and how does it work?

`useState` lets function components hold local state.

```jsx
const [value, setValue] = useState(initialValue);
```

- `value` — current state value
- `setValue` — updates the value and triggers a re-render
- `initialValue` — used only on the first render

React keeps a hidden list of state slots per component. When `setValue` is called, React updates that slot and re-runs the component function with the new value.

```jsx
// From App.jsx in this project
const [tickets,    setTickets]    = useState(INITIAL_TICKETS);
const [inProgress, setInProgress] = useState([]);
const [resolved,   setResolved]   = useState([]);

// Completing a ticket updates all three slices:
const handleComplete = (ticket) => {
  setInProgress(prev => prev.filter(t => t.id !== ticket.id)); // remove
  setResolved(prev => [ticket, ...prev]);                       // add
  setTickets(prev => prev.filter(t => t.id !== ticket.id));    // remove
  // React batches these → single re-render
};
```

---

### 4. How can you share state between components in React?

**① Lift State Up** ← used in this project

Place shared state in the nearest common ancestor and pass it down as props + callbacks.

```
App (owns tickets[], inProgress[], resolved[])
 ├── Banner          ← reads inProgressCount, resolvedCount (props)
 ├── TicketCard      ← calls onClick callback (triggers state change)
 └── TaskStatusPanel ← reads inProgress[], calls onComplete callback
```

**② Context API** — for deeply nested components

```jsx
const TicketContext = React.createContext();
// Wrap tree in <TicketContext.Provider value={...}>
// Any child reads with useContext(TicketContext)
```

**③ External stores** — Redux, Zustand, Jotai for large apps

---

### 5. How is event handling done in React?

```jsx
// HTML (avoid)
<button onclick="handleClick()">

// React ✅ — camelCase, pass function reference
<button onClick={handleClick}>

// With argument
<button onClick={() => handleComplete(ticket)}>
```

Key rules:
- Event names are **camelCase**: `onClick`, `onChange`, `onSubmit`, `onKeyDown`
- Pass a **function reference**, not a string
- React uses **Synthetic Events** — cross-browser wrappers

```jsx
// Keyboard accessibility (from TicketCard.jsx)
<div
  role="button"
  tabIndex={0}
  onClick={() => onClick(ticket)}
  onKeyDown={e => e.key === "Enter" && onClick(ticket)}
/>

// useCallback prevents re-creating handlers every render
const handleComplete = useCallback((ticket) => {
  setInProgress(prev => prev.filter(t => t.id !== ticket.id));
}, []);
```

---

## 📌 Suggested Git Commits

```bash
git commit -m "init: scaffold React + Vite project"
git commit -m "feat: add Navbar with logo, links, and New Ticket button"
git commit -m "feat: add Banner with purple/green gradient stat cards"
git commit -m "feat: add TicketCard grid with priority and status badges"
git commit -m "feat: add TaskStatusPanel with In Progress and Resolved tabs"
git commit -m "feat: wire App state and integrate React-Toastify"
git commit -m "feat: add Footer and complete responsive CSS"
```

---

## 🔗 Submission

- **Live Link:** YOUR_DEPLOYED_URL_HERE
- **GitHub Repository:** YOUR_REPO_URL_HERE
