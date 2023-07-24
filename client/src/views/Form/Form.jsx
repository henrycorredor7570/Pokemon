import { useState } from "react";
import validationInputs from "../../utils/validations";
// import axios from "axios"

const Form = () => {
    const [input, setInput] = useState({
        name:"",
        image:"",
        hp: "",
        attack:"",
        defense:"",
        speed:"",
        height:"",
        weight:"",
        types:"",
    });

    const [errors, setErrors] = useState({});

    const handleonChange = (event) => {
        setInput({
            ...input,
            [event.target.name] : event.target.value
        })

        setErrors(validationInputs({
            ...input,
            [event.target.name]:event.target.value
        }));
    };

    const handleOnSubmit = (event) => {
        event.preventDefault();
    }

/*     const createPokemon = async (input) => {
        const { name, image, hp, attack, defense, speed, height, weight } = await axios.post(`http://localhost:3001/pokemon`)
    } */
    return(
        <div>
            <form onSubmit={handleOnSubmit}>
                <h1>CREATE POKEMON</h1>

                <label htmlFor="name">Name: </label>
                <input name="name" type="text" placeholder="pokemon name..." value={input.name} onChange={handleonChange}/>
                {errors.name && <p style={{color:"red"}}>{errors.name}</p>}
                <hr />
                <label htmlFor="image">Image: </label>
                <input name="image" type="text" placeholder="image..." value={input.image} onChange={handleonChange}/>
                {errors.image && <p style={{color:"red"}}>{errors.image}</p>}
                <hr />
                <label htmlFor="hp">Hp: </label>
                <input name="hp" type="number" placeholder="Hp..." value={input.hp} onChange={handleonChange}/>
                {errors.hp && <p style={{color:"red"}}>{errors.hp}</p>}
                <hr />
                <label htmlFor="attack">Attack: </label>
                <input name="attack" type="number" placeholder="attack..." value={input.attack} onChange={handleonChange}/>
                {errors.attack && <p style={{color:"red"}}>{errors.attack}</p>}
                <hr />
                <label htmlFor="defense">Defense: </label>
                <input name="defense" type="number" placeholder="defense..." value={input.defense} onChange={handleonChange}/>
                {errors.defense && <p style={{color:"red"}}>{errors.defense}</p>}
                <hr />
                <label htmlFor="speed">Speed: </label>
                <input name="speed" type="number" placeholder="speed..." value={input.speed} onChange={handleonChange}/>
                {errors.speed && <p style={{color:"red"}}>{errors.speed}</p>}
                <hr />
                <label htmlFor="height">Height: </label>
                <input name="height" type="number" placeholder="height..." value={input.height} onChange={handleonChange}/>
                {errors.height && <p style={{color:"red"}}>{errors.height}</p>}
                <hr />
                <label htmlFor="weight">Weight: </label>
                <input name="weight" type="number" placeholder="weight..." value={input.weight} onChange={handleonChange}/>
                {errors.weight && <p style={{color:"red"}}>{errors.weight}</p>}
                <hr />
                <label htmlFor="types">Types: 
                    <input type="checkbox" value={input.types} /> Fuego
                    <br />
                    <input type="checkbox" value={input.types} /> Agua
                    <br />
                    <input type="checkbox" value={input.types} /> Tierra
                    <br />
                    <input type="checkbox" value={input.types} /> Aire
                    <br />
                    <input type="checkbox" value={input.types} /> Volador
                    <br />
                    <input type="checkbox" value={input.types} /> Insecto
                    <br />
                    <input type="checkbox" value={input.types} /> Psiquico
                    <br />
                    <input type="checkbox" value={input.types} /> Electrico
                    <br />
                </label>
                <button disabled={!input.name || !input.image || !input.hp || !input.attack || !input.defense || !input.speed || !input.height || !input.weight
                               || errors.name || errors.image || errors.hp || errors.attack || errors.defense || errors.speed || errors.height || errors.weight }>Send</button>
            </form>
        </div>
    )
}

export default Form;