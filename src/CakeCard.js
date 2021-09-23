import { useState } from "react";

function CakeCard({flavor, size, price}) {
    const [selected, setSelected] = useState(null);

    function handleClick(){
        if (selected === null) {
            setSelected({border: '5px solid black'})
        } else {
            setSelected(null)
        }
        console.log(handleClick)
    }

    return (
        <div style = {selected}>

            <h1>Flavor:{flavor}</h1>
            <p>Size:{size}</p>
            <p>Price:{price}</p>
            <button onClick = {handleClick}>Select</button>
        </div>
    );
}

export default CakeCard;