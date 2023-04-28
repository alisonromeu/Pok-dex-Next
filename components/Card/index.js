import Link from "next/link";
import Image from "next/image";

import styles from '../../styles/Card.module.css';

// CASO O NEXT DER ERRO, PASSE O DOMINIO DO SITE EM "NEXT.CONFIG", DENTRO DA PROPRIEDADE IMAGES
const apiImages = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon';

export default function Card({ pokemon }) {
    return (
        <div className={styles.card}>
            <Image 
                src={`${apiImages}/${pokemon.id}.png`} 
                width="120" 
                height="120" 
                alt={pokemon.name} 
            />
            <p className={styles.cardId}>#{pokemon.id}</p>
            <h3 className={styles.cardTitle}>
                {pokemon.name}
            </h3>
            <Link className={styles.cardDetails} href={`/pokemon/${pokemon.id}`}>Detalhes</Link>
        </div>
    )
}