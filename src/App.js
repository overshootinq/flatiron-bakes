import { useState } from "react";
import CakeCard from "./CakeCard";
import cakes from "./data";
import CakeDetail from "./CakeDetail"
import SearchBar from "./SearchBar"

function App() {
  const [ isVisible, setIsVisible] = useState(true)
  const [ selectedCake, setSelectedCake] = useState(null)

  return (
    <>
      <h1>Flatiron Bakes</h1>
      {isVisible ? <SearchBar/> : null}
      <button onClick={() => setIsVisible(!isVisible)}>{isVisible ? 'Hide' : 'Show'}</button>

      {selectedCake ? <CakeDetail cake={selectedCake}/> : null}

      {cakes.map(c => <CakeCard setSelectedCake={setSelectedCake} cake={c}/>)}
    </>
  );
}

export default App;