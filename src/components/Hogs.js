import Hog from "./Hog"

function Hogs({hogs, images}) {

    const displayHogs = hogs.map(hog => (
        <Hog 
            name={hog.name}
            specialty={hog.specialty} 
            greased={hog.greased} 
            weight={hog.weight}
            medal={hog['highest medal achieved']}
            img={images[hog.name]}
        />
    ))

    return ( 
        <div>
            {displayHogs}
        </div>
    )
}

export default Hogs