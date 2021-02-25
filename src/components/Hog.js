import React, {useState} from "react"

function Hog({name, img="https://veterinaryevidence.org/public/journals/1/article_245_cover_en_US.jpg", specialty, greased, weight, medal, onHideHog, id}) {
    const [show, setShow] = useState(false)

    return (
        <div onClick={() => setShow(!show)} className="ui eight wide column card">
            <h3>{name}</h3>
            <button onClick={(e) => onHideHog(e.target.value)} value={id}>Hide Piggy</button>
            <br />
            <img src={img} alt={name} height="200px" ></img>
            {show ? <p>Specialty: {specialty} <br />Medal: {medal}
            <br />
            <small>{greased === true ? "Greased" : "Not Greased"}| Weight: {weight}</small> 
            </p> 
            : null}
    
        </div>
    )
}

export default Hog