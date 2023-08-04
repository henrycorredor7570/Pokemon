import { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import validationInputs from "../../utils/validations";
import { createPokemon, getTypesPokemon } from "../../redux/actions";
import styles from "./Form.module.css";

const Form = () => {
    const history = useHistory(); // para acceder al historial de navegacion

    const dispatch = useDispatch();

    const allTypes = useSelector((state) => state.types);

    const [input, setInput] = useState({
        name:"",
        image:"",
        hp: "",
        attack:"",
        defense:"",
        speed:"",
        height:"",
        weight:"",
        type:[],
    });

    useEffect(() => {
        dispatch(getTypesPokemon())
    }, [dispatch]);

    const [errors, setErrors] = useState({});

    const handleonChange = (event) => { // funcion para manejar los cambios en los campos del formulario
        setInput({
            ...input,
            [event.target.name] : event.target.value
        })
        setErrors(validationInputs({
            ...input,
            [event.target.name]:event.target.value
        }));
    };

    const handleOnSubmit = (event) => { // se utiliza para manejar el envio del formulario
        event.preventDefault();
        dispatch(createPokemon(input));
        setInput({ // despues de enviar el formulario se reestablece el estado input a sus valores iniciales
            name:"",
            image:"",
            hp: "",
            attack:"",
            defense:"",
            speed:"",
            height:"",
            weight:"",
            type:[],
        })
        alert("¡POKEMON CREATED!")
        history.push("/home");// se redirige al usuario a la pagina de inicio
    }

    const handleTypes = (event) => { // funcion para el manejo de tipos de pokemons
        if(!input.type.includes(event.target.value)){
            if(input.type.length < 2 || input.type.length === 0){
                setInput({ ...input, type: [...input.type, event.target.value]});   
                setErrors(validationInputs({
                    ...input,
                    type: [input.type, event.target.value]
                }))
                validationInputs({
                    ...input, type: [...input.type, event.target.value]
                })
            }
                
        }else {alert("El tipo ya fue seleccionado");}
    }

    const  handleDeleteType = (tipo) => {// funcion para eliminar los tipos de pokemons
        const newType = input.type.filter((type) => type !== tipo)// se usa el metodo filter para crear una nueva matriz sin el tipo seleccionado
        setInput({...input, type: newType});
    }

    return(
        <div className={styles.containerForm}>
            <form className={styles.form} onSubmit={(event) => handleOnSubmit(event)}>
                <h2 className={styles.form_title}>¡ CREATE YOUR POKEMON !</h2>
                    <div className={styles.form_container}>
                        <div>
                            <div className={styles.form_group}>
                                <input className={styles.form_input} name="name" type="text" placeholder=" " value={input.name} onChange={(event) => handleonChange(event)}/>
                                <label className={styles.form_label} htmlFor="name">Name: </label>
                                {errors.name && <p className={styles.errors}>{errors.name}</p>}
                            </div>
                            <div className={styles.form_group}>
                                <input className={styles.form_input} name="image" type="text" placeholder=" " value={input.image} onChange={(event) => handleonChange(event)}/>
                                <label className={styles.form_label} htmlFor="image">Image: </label>
                                {errors.image && <p className={styles.errors}>{errors.image}</p>}
                            </div>  
                            <div className={styles.form_group}>
                                <input className={styles.form_input} name="hp" type="number" placeholder=" " value={input.hp} onChange={(event) => handleonChange(event)}/>
                                <label className={styles.form_label} htmlFor="hp">Hp: </label>
                                {errors.hp && <p className={styles.errors}>{errors.hp}</p>}
                            </div>
                            <div className={styles.form_group}>
                                <input className={styles.form_input} name="speed" type="number" placeholder=" " value={input.speed} onChange={(event) => handleonChange(event)}/>
                                <label className={styles.form_label} htmlFor="speed">Speed: </label>
                                {errors.speed && <p className={styles.errors}>{errors.speed}</p>}
                            </div>
                        </div>
                        <div>
                            <div className={styles.form_group}>
                                <input className={styles.form_input} name="attack" type="number" placeholder=" " value={input.attack} onChange={(event) => handleonChange(event)}/>
                                <label className={styles.form_label} htmlFor="attack">Attack: </label>
                                {errors.attack && <p className={styles.errors}>{errors.attack}</p>}
                            </div>
                            <div className={styles.form_group}>
                                <input className={styles.form_input} name="defense" type="number" placeholder=" " value={input.defense} onChange={(event) => handleonChange(event)}/>
                                <label className={styles.form_label} htmlFor="defense">Defense: </label>
                                {errors.defense && <p className={styles.errors}>{errors.defense}</p>}
                            </div>
                            <div className={styles.form_group}>
                                <input className={styles.form_input} name="height" type="number" placeholder=" " value={input.height} onChange={(event) => handleonChange(event)}/>
                                <label className={styles.form_label} htmlFor="height">Height: </label>
                                {errors.height && <p className={styles.errors}>{errors.height}</p>}
                            </div>
                            <div className={styles.form_group}>
                                <input className={styles.form_input} name="weight" type="number" placeholder=" " value={input.weight} onChange={(event) => handleonChange(event)}/>
                                <label className={styles.form_label} htmlFor="weight">Weight: </label>
                                {errors.weight && <p className={styles.errors}>{errors.weight}</p>}
                            </div>  
                        </div>
                    </div>
                    <div className={styles.types}>
                        <div className={styles.typesOptions}>
                            <label>Type: </label>
                            <select onChange={(event) => handleTypes(event)}>
                                { allTypes?.map((type) => <option name={type} value={type}>{type}</option>) }
                            </select>
                        </div>
                        {input.type?.map((type) => {
                            return (
                                <div className={styles.optionsSelected} key={type}>
                                    <p>{type}✅</p>
                                    {<button onClick={() => handleDeleteType(type)}> x </button>}
                                </div>
                        )})}
                        {errors.type && <p className={styles.errors}>{errors.type}</p>}
                    </div>
                    <div className={styles.buttonSend}>
                        <button className={styles.button} disabled={!input.name || !input.image || !input.hp || !input.attack || !input.defense || !input.speed || !input.height || !input.weight || !input.type
                                                                 || errors.name || errors.image || errors.hp || errors.attack || errors.defense || errors.speed || errors.height || errors.weight || errors.type}>Send</button>
                    </div>
            </form>
            <div className={styles.divButtonHome}>
                <Link to="/home">
                    <button className={styles.buttonHome}>
                        <span id={styles.spanTop}></span>
                        <span id={styles.spanRight}></span>
                        <span id={styles.spanBottom}></span>
                        <span id={styles.spanLeft}></span>
                        HOME
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Form;