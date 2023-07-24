import { Link } from "react-router-dom";
import style from "./Card.module.css";

const Card = ({pokemon}) => {
    // console.log(pokemon);
    return(
        <div>
            <div className={style.card}>
                <Link to={`/detail/${pokemon.id}`}>{/* // revisar si es necesario el pokemon.id */}
                    <img src={pokemon.image} alt=""/>
                    <h3>Name: {pokemon.name}</h3>
                    <p>ID: {pokemon.id}</p>
                    <p>Types: {pokemon.type}</p>
                </Link>
            </div>
            
        </div>
    )
};

export default Card; 