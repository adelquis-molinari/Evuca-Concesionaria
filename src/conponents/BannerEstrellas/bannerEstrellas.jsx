import React, {useState} from "react";
import "./bannerEstrellas.css";


export default function BannerEstrellas(props) {
    return(
        <div>
            {[ ...Array(5)].map((star, i) => {
                const ratingValue = i + 1;
                return (
                    <label key={i}>
                        <i 
                        className="fas fa-star star"
                        style={{color: ratingValue <= (props.rating) ? "#ffc107" : "#8c8d91"}}
                        ></i>
                    </label>
                )
            })}
        </div>
    )
}

