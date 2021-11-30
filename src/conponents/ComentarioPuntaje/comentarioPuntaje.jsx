import React, {useState} from "react";
import "./comentarioPuntaje.css";
import {connect} from "react-redux";
import {getRating} from "../../actions/index"

function ComentarioEstrellas (props) {
    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)

    return(
        <div>
            {[ ...Array(5)].map((star, i) => {
                const ratingValue = i + 1;
                console.log(props.rating[0])
                return (
                    <label key={i}>
                        <input
                        className="inputRadio" 
                        type="radio" 
                        name="rating" 
                        value={ratingValue} 
                        onClick={() => {
                            setRating(ratingValue);
                            props.getRating(ratingValue)
                        }}
                        />
                        <i 
                        class="fas fa-star comentarioStar"
                        onMouseEnter={() => setHover(ratingValue)}
                        onMouseLeave={() => setHover(null)}
                        style={{color: props.rating === 0 ? "#8c8d91" : ratingValue <= (hover || rating) ? "#ffc107" : "#8c8d91"}}
                        ></i>
                    </label>
                )
            })}
        </div>
    )
}
function mapStateToProps(state) {
    return {
    rating: state?.rating ? state.rating : 0,
    }
}

function mapDispatchToProps(dispatch) {
    return{
        getRating: rating => dispatch(getRating(rating))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ComentarioEstrellas)