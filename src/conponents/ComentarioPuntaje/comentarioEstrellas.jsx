import React, {useState} from "react";
import "./comentarioEstrellas.css";


function ComentarioEstrellas () {
    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)

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
                        class="fas fa-star comentarioStar"
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

export default ComentarioEstrellas