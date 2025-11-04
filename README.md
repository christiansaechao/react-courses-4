# This is the repository of all of the projects related to Intro to React

- Week 1
    - JSX and rendering elements
    - Functional Components
    - Props & children
    - Conditional rendering 
    - Rendering a list with .map()
    - Using filter and reduce inside jsx
    - Keys in React
- Week 2 Hooks, State, Events
    - useState basics
    - Handling events (onClick, onChange)
    - Controlled inputs vs uncontrolled inputs
    - useEffect (fetching, cleanup, dependencies)
    - useRef (storing value, DOM access)
    - Custom Hooks (extracting logic into reusable functions)
- Week 3
    - Context API (provider, useContext)
    - Zustand
    - Redux
    - React Router: nested routes, params, redirects
    - Protected Routes (auth-based)
- Week 4
    - Anything we couldn't get to in the other weeks
    - Plan/Start Final project

## Resources

[How Does React Actually Work? React.js Deep Dive](https://www.youtube.com/watch?v=7YhdqIR2Yzo&t=328s&ab_channel=PhilipFabianek)

[Understanding React's UI Rendering Process](https://www.youtube.com/watch?v=i793Qm6kv3U)

[ALL React Hooks Explained in 12 Minutes](https://www.youtube.com/watch?v=LOH1l-MP_9k&ab_channel=CodeBootcamp)

[tailwind installation docs](https://tailwindcss.com/docs/installation/using-vite)

Quick start guide:

- Initialize a new React app using the command [npm create vite@latest](https://vite.dev/guide/) inside of the homework directory
    - if you run `npm create vite@latest .` it'll create your project in the current folder
    - in your terminal select these options: Framework: `React`, Variant: `Javascript`
    - Put no for the rollout question by vite, it's experimental still
    - cd into the new directory through your terminal
    - Run `npm install` to install all the dependency packages
    - To see your project working, use the command `npm run dev`