import './App.css';
import { User } from "./components/User/User";

function App() {
  const name = "Chris";
  const age = 21;

  const data = {
    title: "Final Fantasy",
    price: 20,
    releaseDate: "Nov 3, 2014", 
  }

  return (
    <>
      <User data={data} title="finalFantasy" />

      <User>
      </User>
    </>
  )
}

export default App;