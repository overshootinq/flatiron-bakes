import { useState } from "react";
import CakeCard from "./CakeCard";
import cakes from "./data";
import SearchBar from "./SearchBar"

function App() {
  const [ isVisible, setIsVisible] = useState(true)


  return (
    <>
      <h1>Flatiron Bakes</h1>
      {isVisible ? <SearchBar/> : null}
      <button onClick={() => setIsVisible(!isVisible)}>{isVisible ? 'Hide' : 'Show'}</button>
      {cakes.map(c => <CakeCard flavor={c.flavor} size={c.size} price={c.price}/>)}
    </>
  );
}

export default App;