import styles from "./Card.module.css";

const Card = ({pokemon}) => {
    return(
        <div className={styles.card}>
            <div className={styles.cardImage}>
                <img src={pokemon.image} alt={pokemon.name}/>
            </div>  
            <div className={styles.cardText}>   
                <h2>{pokemon.name}</h2>
                <p>Types:</p>
            </div>
            <div className={styles.cardTypes}>
                {pokemon.Types?.map((type) => <div className={styles.type}>{type}</div>)}
            </div>
        </div>
    )
};

export default Card; 
