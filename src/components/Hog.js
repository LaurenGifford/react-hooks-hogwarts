import React, {useState} from "react"

function Hog({name, img, specialty, greased, weight, medal}) {
    const [show, setShow] = useState(false)

    return (
        <div onClick={() => setShow(!show)}>
            <h3>{name}</h3>
            <img src={img} alt={name}></img>
            {show ? <p>Specialty: {specialty} <br />Medal: {medal}
            <br />
            <small>{greased === true ? "Greased" : "Not Greased"}| Weight: {weight}</small> 
            </p> 
            : null}
            <hr />
        </div>
    )
}

export default Hog