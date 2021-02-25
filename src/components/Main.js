import React, {useState} from "react"
import Filter from "./Filter"
import Hogs from "./Hogs"
import Form from "./Form"


function Main({hogs, images}) {
    const [currentHogs, setCurrentHogs] = useState(hogs)
    const [form, setForm] = useState(false)

    function handleCheckedChange(checked) {
        console.log("checked!", checked)
        let newHogs = hogs.filter(hog => {
            if (checked === true) {
                return hog.greased === true
            } else {return hogs}
        })
        setCurrentHogs((currentHogs) => currentHogs = newHogs)
    }

    function handleSort(sortTerm) {
        console.log(sortTerm)
        let sortedHogs
        if (sortTerm === "name") {
        sortedHogs = currentHogs.sort((hog1, hog2) => {
            return hog1.name.localeCompare(hog2.name)
        })
        }
        else if (sortTerm === "weight"){
        sortedHogs = currentHogs.sort((hog1, hog2) => {
            return hog2.weight - hog1.weight})
        }
        console.log(sortedHogs)
        setCurrentHogs([...sortedHogs])
        // setCurrentHogs((currentHogs) => currentHogs = sortedHogs)
        console.log(currentHogs)
    }

    function handleHiding(hogName) {
        console.log(hogName); 
        let shownHogs = currentHogs.filter( hog => {
            return hog.name !== hogName
        })
        setCurrentHogs([...shownHogs])
    }

    function createNewPig(newPig) {
        setCurrentHogs([...currentHogs, newPig])
        setForm(!form)
    }

    return (
        <main>
            <Filter onSortSubmit={handleSort} onCheckedChange={handleCheckedChange}/>
            <button onClick={() => setForm(!form)}>Add a Piggy</button>
            { form === true ? <Form createNewPig={createNewPig} /> : null }
            <br />
            <br />
            <div>
                <Hogs hogs={currentHogs} images={images} onHideHog={handleHiding}/>
            </div>
        </main>
    )
}


export default Main