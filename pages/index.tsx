import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import imageLoader from '../imageLoader'
import styles from '../styles/Home.module.css'
import { Character, GetCharacterResults } from '../types'

const Home: NextPage<{ characters: Character[] }> = ({ characters }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
{/* USE ENVIRONMENT VARIABLE NEXT_PUBLIC FOR PUBLIC OTHERWISE PRIVATE BY DEFAULT 
DB_CONNECT: {process.env.DB_CONNECTION}
      DB_CONNECT: {process.env.NEXT_PUBLIC_DB_CONNECTION}
      <hr />*/}
      {characters.map((character) => {
        return <div key={character.id}>
          <Link href={`/characters/${character.id}`}>
            <a>
              <h3>{character.name}</h3>
            </a>
          </Link>
          <Image
            loader={imageLoader}
            unoptimized
            src={character.image}
            alt={character.name}
            width="200px"
            height="200px"
          />
        </div>
      })}
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch("https://rickandmortyapi.com/api/character")
  const { results }: GetCharacterResults = await res.json();

  return {
    props: {
      characters: results,
    },
  }
}

export default Home
