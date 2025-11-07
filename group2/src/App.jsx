import { useState } from "react";
import { LandingPage } from "./pages/Landing/LandingPage";
import { UserCard } from "./components/day-2/UserCard";
import "./App.css";
import axios from "axios";

// const [variable, setVariable] = useState(optional: initial value);

/**
  1. Get data from an API
  2. Store data in memory (useState)
  3. Map over data, create a component to display them
  4. Add filters (use useState to keep track of which filter you're using) [use filter and reduce method if applicable]
  5. Styling - use tailwind (in the repo there's instructions in the readme for installing and setting up tailwind)
  notes: Use props still from the first class lol don't hard code anything unless it has to be hard coded.
 */

function App() {
  const [faveNum, setFaveNum] = useState(74);
  const [todos, setTodos] = useState([
    { id: 1, task: "Clean the kitchen", isCompleted: true },
  ]);

  const getWeatherData = async () => {
    try {
      const { data } = await axios.get("Weatherapi.com");
      setTodos(data);
    } catch (err) {
      throw new Error(err);
    }
  };

  return (
    <div>
      <UserProfilePage name={name} />
      <UserSettingsPage name={name} />
      <button onClick={getWeatherData}>Get the data</button>
    </div>
  );
}

export default App;
