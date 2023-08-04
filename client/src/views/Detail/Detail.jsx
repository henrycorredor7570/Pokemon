import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link} from "react-router-dom";
import styles from "./Detail.module.css";

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
        return setDetails({});//se restablece el estado a un objeto vacio, 
    }, [id]);//el effect se ejecuta cada vez que cambie el valor del id

    return(
        <div className={styles.containerDetails}>
            <div className={styles.elemSuperior}>
                <div className={styles.title}>
                    <h2>Details Pokemon:</h2>
                </div>
                <div className={styles.namePoke}>
                    <h2>Name: {details?.name}</h2>
                </div>
            </div>
            <div className={styles.elemInferior}>
                <div className={styles.details}>
                    <p>ID: {details?.id}</p>
                    <p>HP: {details?.hp}</p>
                    <p>Attack: {details?.attack}</p>
                    <p>Defense: {details?.defense}</p>
                    <p>Speed: {details?.speed}</p>
                    <p>Height: {details?.height}</p>
                    <p>Weight: {details?.weight}</p>
                </div>  
                <div className={styles.imageAndDetails}>
                    <img src={details?.image} alt={details?.name} />
                    <div className={styles.types}>
                        {details.Types?.map((type) => <span>{type}</span>)}
                    </div>
                </div>
                <div className={styles.buttons}>
                    <Link to="/home">
                        <button>
                            <span id={styles.spanTop}></span>
                            <span id={styles.spanRight}></span>
                            <span id={styles.spanBottom}></span>
                            <span id={styles.spanLeft}></span>
                            HOME
                        </button>
                    </Link>
                </div>
            </div>   
        </div>
    )
}

export default Detail;