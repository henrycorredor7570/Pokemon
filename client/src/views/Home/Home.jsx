import Cards from "../../components/Cards/Cards";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPokemons, orderAlphabet } from "../../redux/actions";

const Home = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getPokemons())
     /*    return (()=>{
            clearDetail();// puntos para el pi
        }) */
    }, [dispatch]);

    const handleAlphabet = (event) => {
        dispatch(orderAlphabet(event.target.value));
    }

    return(
        <div>
            <div>
                <h3>Ordenar por: </h3>
                <div>
                    <label>Alphabet: </label>
                    <select onChange={(event) => handleAlphabet(event)}>
                        <option value={"All"}>ALFABET </option>
                        <option value={"nameAsc"}>A-Z</option>
                        <option value={"nameDesc"}>Z-A</option>
                    </select>
                    <label> Attack: </label>
                    <select>
                        <option value="menorAttack">- Attack</option>
                        <option value="mayorAttack">+ Attack</option>
                    </select>
                </div>
                <div>
                    <h1 className="pokemon-title" style={{textAlign:"center"}}>🔥 Pokemons 🔥</h1>
                </div>
            </div>
            <div>
                <Cards></Cards>
            </div>
        </div>
        
    )
}

export default Home;