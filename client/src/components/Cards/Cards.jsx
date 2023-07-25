import Card from "../Card/Card";
import style from "./Cards.module.css";
import { useSelector } from "react-redux";

const Cards = () => {

	const pokemons = useSelector(state=> state.pokemons);
    
	return(
        <div className={style.containerCards}>
            {pokemons?.map((poke) => (
                <Card pokemon={poke}
                    key={poke.id}
                />
            )) }
        </div>
    )
};

export default Cards;