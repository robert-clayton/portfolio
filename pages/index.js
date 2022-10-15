import Head from 'next/head'
import ExportedImage from 'next-image-export-optimizer'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div style={{width: '100%', height: '100%' }}>
      <div className={styles.stars}/>
      <div className={styles.stars2}/>
      <div className={styles.stars3}/>
      <div className={styles.card}>

      </div>
    </div>
  )
}
