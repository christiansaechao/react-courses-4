import "./App.css";
import { User } from "./components/User";
import { Button } from "../../week1/src/components/User/button";

function App() {
  // sm, md, xl, 2xl,

  return (
    <>
      <div className="flex gap-2 text-red-500 uppercase text-9xl border border-white rounded-full">
        <h2>dylan</h2>
        <Button text="student" />
        <Button text="teacher" />
      </div>
    </>
  );
}

export default App;
