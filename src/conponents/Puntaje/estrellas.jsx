import React, {useState} from "react";
import "./estrellas.css";


function Estrellas () {
    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)
    console.log(rating)

    return(
        <div>
            {[ ...Array(5)].map((star, i) => {
                const ratingValue = i + 1;
                return (
                    <label>
                        <input
                        className="inputRadio" 
                        type="radio" 
                        name="rating" 
                        value={ratingValue} 
                        onClick={() => setRating(ratingValue)}
                        />
                        <i 
                        class="fas fa-star star"
                        onMouseEnter={() => setHover(ratingValue)}
                        onMouseLeave={() => setHover(null)}
                        style={{color: ratingValue <= (hover || rating) ? "#ffc107" : "#8c8d91"}}
                        ></i>
                    </label>
                )
            })}
        </div>
    )
}

export default Estrellas