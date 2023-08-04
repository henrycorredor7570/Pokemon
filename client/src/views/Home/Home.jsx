import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavBar } from "../imports";
import Cards from "../../components/Cards/Cards";
import { getPokemons, orderAlphabet, orderAttack, filterType, getTypesPokemon, filterPokeCreated } from "../../redux/actions";
import styles from "./Home.module.css";

const Home = () => {
    const dispatch = useDispatch();// se utiliza para despachar acciones al reducer
    
    useEffect(() => {
        dispatch(getPokemons())
    }, [dispatch]);

    useEffect(() => {
        dispatch(getTypesPokemon())
    }, [dispatch]);// el useEffect se ejecuta cada vez que cambie el valor del dispatch

    const allTypes = useSelector((state) => state.types);
    

    const handleAlphabet = (event) => {
        dispatch(orderAlphabet(event.target.value));
    }

    const handleOrderAttack = (event) => {
        dispatch(orderAttack(event.target.value));
    }

    const handleFilterType = (event) => {
        event.preventDefault();
        dispatch(filterType(event.target.value));
    }

    const handleCreatedDb = (event) => {
        dispatch(filterPokeCreated(event.target.value));
    }

    return(
        <div className={styles.home}>
            <NavBar></NavBar>
            <div className={styles.containerFilters}>
                <div className={styles.orderCont}>
                    <h3>Order By: </h3>
                    <div className={styles.containers}>
                        <label>Alphabet: </label>
                        <select className={styles.select} onChange={(event) => handleAlphabet(event)}>
                            <option value={"All"}>All Pokes</option>
                            <option value={"nameAsc"}>A-Z</option>
                            <option value={"nameDesc"}>Z-A</option>
                        </select>
                        <label>Attack: </label>
                        <select className={styles.select} onChange={(event) => handleOrderAttack(event)}>
                            <option value={"All"}>All Pokes</option>
                            <option value={"menorAttack"}>- +</option>
                            <option value={"mayorAttack"}>+ -</option>
                        </select>
                    </div>
                </div>
                <div className={styles.orderCont}>
                    <h3>Filter By: </h3>
                    <div className={styles.containers}>
                        <label>Type: </label>
                        <select className={styles.select} onChange={(event) => handleFilterType(event)}>
                            <option value={"All"}>All Pokes</option>
                            {allTypes?.map((type) => <option value={type}>{type}</option>)};
                        </select>
                        <label>Origin: </label>
                        <select className={styles.select} onChange={(event) => handleCreatedDb(event)}>
                            <option value={"allPoke"}>All Pokes</option>
                            <option value={"DB"}>Created DB</option>
                            <option value={"API"}>API</option>
                        </select>
                    </div>
                </div>
            </div>
            <br />
            <div>
                <Cards></Cards>
            </div>
        </div>
    )
}

export default Home;
