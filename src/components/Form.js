import React, {useState} from "react"

function Form({ createNewPig }) {
    const [name, setName] = useState("")
    const [specialty, setSpecialty] = useState("")
    const [weight, setWeight] = useState(0)
    const [greased, setGreased] = useState(false)
    const [medal, setMedal] = useState("bronze")


    function handleSubmit(e) {
        e.preventDefault();
        const newPig = {
            name, specialty, weight, greased, "highest medal achieved": medal
        }
        createNewPig(newPig)
    }

    return(
        <form onSubmit={(e) => handleSubmit(e)}>
            <label for="name">Name: </label>
            <input onChange={(e) => setName(e.target.value)} type="text" name="name" value={name}></input>
            <br />
            <label for="specialty">Specialty: </label>
            <input onChange={(e) => setSpecialty(e.target.value)} type="text" name="specialty" value={specialty}></input>
            <br />
            <label for="weight">Weight: </label>
            <input onChange={(e) => setWeight(e.target.value)} type="number" name="weight" value={weight}></input>
            <br />
            <label for="greased">Greased: </label>
            <input onChange={(e) => setGreased(e.target.checked)} type="checkbox" name="greased" value={greased}></input>
            <br />
            <label for="highest medal achieved">Highest Medal Achieved: </label>
            <select onChange={(e) => setMedal(e.target.value)} name="highest medal achieved">
                <option selected></option>
                <option value="bronze">Bronze</option>
                <option value="silver">Silver</option>
                <option value="gold">Gold</option>
                <option value="platinum">Platinum</option>
            </select>
            <br />
            <input type="submit" value="Create Pig!"></input>
        </form>
    )
}

export default Form