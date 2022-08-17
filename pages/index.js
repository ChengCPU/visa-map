import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Map from '../components/Map'
import Selector from '../components/Selector'

export default function Home() {
  return (
    <>
      <Map />
      <Selector />
    </>
  )
}
