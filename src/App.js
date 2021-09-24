import { useState } from "react";
import CakeCard from "./CakeCard";
import cakes from "./data";
import CakeDetail from "./CakeDetail"
import SearchBar from "./SearchBar"
import CakeForm from "./CakeForm"

function App() {
  const [ isVisible, setIsVisible] = useState(true)
  const [ selectedCake, setSelectedCake] = useState(null)
  const [ cakeList, setCakes] = useState(cakes)

  function handleAddCake(cake){
    setCakes([
      cake, ...cakeList
    ])
  }

  return (
    <>
      <h1>Flatiron Bakes</h1>

      <CakeForm handleAddCake={handleAddCake}/>

      {isVisible ? <SearchBar/> : null}

      <button onClick={() => setIsVisible(!isVisible)}>{isVisible ? 'Hide' : 'Show'}</button>

      {selectedCake ? <CakeDetail cake={selectedCake}/> : null}

      {cakeList.map(c => <CakeCard setSelectedCake={setSelectedCake} cake={c}/>)}
    </>
  );
}

export default App;