import Image from 'next/image';
import styles from '../styles/Home.module.css';

import Card from '../components/Card';

export async function getStaticProps() {

  // MÁXIMO DE POKEMONS QUE A API IRÁ FORNECER
  const maxPokemons = 251;

  // URL DA API
  const api = 'https://pokeapi.co/api/v2/pokemon/';

  // CHAMADO DA API COM A LIMITAÇÃO DE 251
  const res = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await res.json();

  // add pokemon index
  data.results.forEach((item, index) => {
    item.id = index + 1
  })

  return {
    props: { pokemons: data.results, }
  }

}

export default function Home({ pokemons }) {
  return (
    <div>
      <div className={styles.titleContainer}>
      <Image src="/images/pokeball.png" width="50" height="50" alt='Imagem da Pokebola' />
        <h1>Pokédex</h1>
        <Image src="/images/pokeball.png" width="50" height="50" alt='Imagem da Pokebola' />
      </div>

      <div className={styles.pokemonContainer}>
        {pokemons.map((pokemonItem) => (
          <Card key={pokemonItem.id} pokemon={pokemonItem} />
        ))}
      </div>
    </div>
    
  )
}
