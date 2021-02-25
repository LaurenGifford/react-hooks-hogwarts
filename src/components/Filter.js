import React, {useState} from "react"

function Filter({onCheckedChange, onSortSubmit}) {
    const [checked, setChecked] = useState(false)
    const [sort, setSort] = useState("")

    function checkedChange() {
        setChecked((checked) => !checked)
        onCheckedChange(!checked)
    }

    function sortHogs(e) {
        e.preventDefault()
        onSortSubmit(sort)
    }

    return (
        <div>
            <form onSubmit={(e) => sortHogs(e)} className="sorter">
                <select onChange={(e) => setSort(e.target.value)}>
                    <option selected></option>
                    <option value="name">Name</option>
                    <option value="weight">Weight</option>
                </select>
                <input type="submit" value="Sort Pigs!"/>
            </form>
            <div className="filterWrapper">
                <label for="greased">Greased?</label><br />
                <input onChange={() => checkedChange()}
                    type="checkbox" 
                    value="Greased?" 
                    name="greased" 
                    id="greased"/>
            </div>
        </div>
    )
}

export default Filter