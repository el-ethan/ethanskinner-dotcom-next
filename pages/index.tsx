import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import image from '../public/confetti.jpg'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ethan Skinner</title>
        <meta name="description" content="Ethan Skinner's profile" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image className={styles.round} src={image} alt="Ethan Skinner profile pic" height={500} width={500} layout="intrinsic" objectFit='cover' objectPosition='center' placeholder='blur'/>
    </div>
  )
}

export default Home
