import Hog from "./Hog"

function Hogs({hogs, images, onHideHog}) {

    const displayHogs = hogs.map(hog => (
        <Hog 
            name={hog.name}
            specialty={hog.specialty} 
            greased={hog.greased} 
            weight={hog.weight}
            medal={hog['highest medal achieved']}
            img={images[hog.name]}
            onHideHog={onHideHog}
            key={hog.name}
            id={hog.name}
        />
    ))

    return ( 
        <div className="ui grid container ">
            {displayHogs}
        </div>
    )
}

export default Hogs