import Image from "next/image";

import styles from '../../styles/Pokemon.module.css';

const apiImages = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon';

import { useRouter } from "next/router";

// MAPEAMENTO GERAL DOS DADOS
export const getStaticPaths = async() => {
    const maxPokemons = 251;
    const api = 'https://pokeapi.co/api/v2/pokemon/';
  
    
    const res = await fetch(`${api}/?limit=${maxPokemons}`);
    const data = await res.json();

    // PARAMS
    const paths = data.results.map((pokemonItem, index) => {
        return {
            params: {pokemonId: (index + 1).toString()},
        }
    })

    return {
        paths,
        fallback: true,
    }
}

// MAPEAMENTO UM A UM
export const getStaticProps = async(context) => {
    const id = context.params.pokemonId;
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

    const data = await res.json();

    return {
        props: { pokemon: data },
    }
}

export default function Pokemon({ pokemon }) {

    const router = useRouter();

    // FETCH NA API PARA BUSCAR OS POKEMONS DE NÚMERO ACIMA DE 251, MENOS QUE 251 SERÃO CARREGADOS AUTOMATICAMENTE
    if(router.isFallback) {
        return <div>Carregando ...</div>
    }

    return (
        <div className={styles.pokemonContainer}>
            <h1 className={styles.pokemonTitle}>{pokemon.name}</h1>
            <Image 
                src={`${apiImages}/${pokemon.id}.png`} 
                width="200" 
                height="200" 
                alt={pokemon.name} 
            />
            <div>
                <h3>Número:</h3>
                <p>#{pokemon.id}</p>
            </div>
            <div className={styles.typesContainer}> 
                <h3>Tipo:</h3>
                <div>
                    {pokemon.types.map((item, index) => (
                        <span key={index} className={`${styles.type} ${styles['type_' + item.type.name]}`}>
                            {item.type.name}
                        </span>
                    ))}
                </div>
            </div>
            <div className={styles.dataContainer}>
                <div>
                    <div className={styles.dataHeight}>
                        <h4>Altura:</h4>
                        <p>{pokemon.height * 10} cm</p>
                    </div>
                
                    <div className={styles.dataWeight}>
                        <h4>Peso:</h4>
                        <p>{pokemon.weight / 10} kg</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}