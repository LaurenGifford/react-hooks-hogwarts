import React, {useState} from "react"
import Filter from "./Filter"
import Hogs from "./Hogs"

function Main({hogs, images}) {
    const [currentHogs, setCurrentHogs] = useState(hogs)

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

    return (
        <main>
            <Filter onSortSubmit={handleSort} onCheckedChange={handleCheckedChange}/>
            <Hogs hogs={currentHogs} images={images} />
        </main>
    )
}


export default Main