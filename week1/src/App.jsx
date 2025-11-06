import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import { User } from "./components/User/User";
import { Button } from "./components/user/button";
import { EmployeeCard } from "./components/EmployeeCard";

// https://pokeapi.co/api/v2/pokemon?limit=10
// use = hook
// custom hooks

function App() {
  // third rerender
  const [filter, setFilter] = useState("all");

  const [pokemon, setPokemon] = useState([
    "charmander",
    "bulbasaur",
    "squirtle",
    "pikachu",
    "pikachu",
  ]);

  pokemon.reduce((acc, curr) => {
    if (curr >= 1) {
      acc += 1;
    }
  }, 0);

  // function useState(initialValue) {
  //   let val;

  //   if (initialValue)
  //     val = initialValue

  //   const setterFunc(newValue) {
  //     val = newValue
  //   }

  //   return [val, setterFunc]
  // }

  const [person, setPerson] = useState({
    id: 2,
    name: "bob",
    age: 26,
    title: "Mc Donalds Cashier",
  });

  // initial render pokemon = null
  const names = ["charlie", "tony", "billy", ["lee", "joe"]];
  const people = [
    {
      id: 1,
      name: "charlie",
      age: 12,
      titles: {
        job: "car washer",
        job2: "cook",
      },
    },
    { id: 2, name: "bob", age: 26, title: "Mc Donalds Cashier" },
    { id: 3, name: "lenny", age: 12, title: "Librarian" },
    { id: 4, name: "karl", age: 40, title: "Plumber" },
  ];
  async function getPokemon() {
    try {
      const { data } = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=10"
      );
      setPokemon(["pikachu", ...pokemon]);
      setPokemon(data.results);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="border-2 solid rounded-xl text-red-500 p-20 flex gap-2 justify-center items-center hover:text-blue-400">
        <div>person</div>
        <div>person</div>
        <div>person</div>
        <div>person</div>
      </div>
    </>
  );
}

export default App;