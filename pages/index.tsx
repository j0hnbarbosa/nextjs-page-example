import type { NextPage } from 'next'
import Fotter from '../components/footer';
import HeadMeta from '../components/head-meta';
import styles from '../styles/Home.module.css'
import Main from './main';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <HeadMeta
        title='NextJs Example Page'
        description='Example page using NextJs'
      />

      <main className={styles.main}>
       <Main />
      </main>

      <Fotter />

    </div>
  )
}

export default Home
