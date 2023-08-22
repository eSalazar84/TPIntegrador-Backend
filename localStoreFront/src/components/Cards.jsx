import { React } from "react";


function Cards({ invtry }) {
    return (

        <div id={invtry.id}>
            <h1>{invtry.title}</h1>
            <h2>{invtry.price}</h2>
            <p>{invtry.category}</p>
        </div>
    )

}

export default Cards;