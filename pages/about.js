import styles from '../styles/About.module.css';
import Image from 'next/image';
import Head from 'next/head';

export default function About() {
    return (
        <div className={styles.about}>
            <Head>
                <title>Pokédex - Sobre</title>
            </Head>
            <h1>Sobre o Projeto</h1>
            <p>Projeto desenvolvido em Next JS para fins de estudos, todas as aulas para criação do projeto foram do canal do "Matheus Battisti - Hora de Codar"</p>
            <Image src="/images/charizard.png" width="300" height="300" alt='Imagem do Charizard' />
        </div>
    )
}