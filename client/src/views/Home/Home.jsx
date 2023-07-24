import Cards from "../../components/Cards/Cards";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPokemons } from "../../redux/actions";

const Home = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getPokemons())
     /*    return (()=>{
            clearDetail();// puntos para el pi
        }) */
    }, [dispatch]);

    return(
        <>
        <h1>Esta es la vista de Home</h1>
        <Cards></Cards>
        </>
    )
}

export default Home;