import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination";
import style from "./Cards.module.css";

const Cards = () => {

	const pokemons = useSelector((state) => state.pokemons);
    
    const [currentPage, setCurrentPage] = useState(1);
    const pokemonsPerPage = 12;
    
    const indexLastPoke = currentPage * pokemonsPerPage; //calcula el indice del ultimo pokemon
    const indexFirstPoke = indexLastPoke - pokemonsPerPage; //calcula el indice del primer pokemon
    const currentPokes = pokemons.slice(indexFirstPoke, indexLastPoke);

    const paginado = (pageNumber) => {// funcion para cambiar la pagina actual
        setCurrentPage(pageNumber);
    }

	return(
        <div>
            <div className={style.pagination}>
                <Pagination
                    currentPage={currentPage}
                    pokemonsPerPage={pokemonsPerPage}
                    allPokemons={pokemons.length}
                    paginado={paginado}
                ></Pagination>
            </div>
            <div className={style.containerCards}>
                {currentPokes?.map((poke) => (
                    <Link  className={style.link} key={poke.id} to={`/detail/${poke.id}`}>
                        <Card pokemon={poke}/>
                    </Link>
                ))}
            </div>
        </div>
    )
};

export default Cards;