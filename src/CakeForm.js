import {useState} from 'react'

function CakeForm({handleAddCake}){

    const [formData, setFormData] = useState({
        flavor:'',
        size:'',
        image:'',
        price:0,
    })

    function handleChange(e){
        setFormData({
          ...formData,
          [e.target.name]:e.target.value
        })
    }
    
    function handleSubmit(e){
        e.preventDefault()
        handleAddCake(formData)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
            flavor
            <input
            type="text"
            name="flavor"
            onChange={handleChange}
            value={formData.flavor}
            />
            </label>
            <label>
            Image
            <input
            type="text"
            name="image"
            onChange={handleChange}
            value={formData.image}
            />
            </label>
            <label>
            Size
            <input
            type="text"
            name="size"
            onChange={handleChange}
            value={formData.size}
            />
            </label>
            <label>
            Price
            <input
            type="number"
            name="price"
            onChange={handleChange}
            value={formData.price}
            />
            </label>
            <input type="submit"></input>
        </form>
    )
}

export default CakeForm;