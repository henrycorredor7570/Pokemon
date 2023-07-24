import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
    const { id } = useParams();

    const [details, setDetails] = useState({});

    useEffect(()=> {
        axios(`http://localhost:3001/pokemon/${id}`)
        .then(response => response.data)
        .then((data) => {
            if(data.name){
                setDetails(data);
            }else{
                window.alert("No hay personajes con ese ID");
            }
        })
        return setDetails({});
    }, [id]);
    // console.log(details);
    return(
        <div>
            <img src={details?.image} alt={details?.name} /> 
            <h2>ID: {details?.id}</h2>
            <h2>Name: {details?.name}</h2>
            <h2>HP: {details?.hp}</h2>
            <h2>Attack: {details?.attack}</h2>
            <h2>Defense: {details?.defense}</h2>
            <h2>Speed: {details?.speed}</h2>
            <h2>Height: {details?.height}</h2>
            <h2>Weight:{details?.weight}</h2>
            <h2>Types: {details?.type}</h2>
                      
        </div>
    )
}
export default Detail;