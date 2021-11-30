import React from 'react'   
import "./index.css"

export default function ComentarioEstrellas(props) {
    return(
        <div className="allStars">
            {[ ...Array(5)].map((star, i) => {
                const ratingValue = i + 1;
                return (
                    <label key={i}>
                        <i 
                        className="fas fa-star comentarioStar"
                        style={{color: ratingValue <= (props.rating) ? "#ffc107" : "#8c8d91"}}
                        ></i>
                    </label>
                )   
            })}
        </div>
    )
}