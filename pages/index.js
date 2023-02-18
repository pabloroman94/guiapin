import Head from 'next/head'
import Image from 'next/image'
//import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '../components/navbar/Navbar.js';
import Discover from './discover.js';
//import Username from './[username].js';
import Search from './search.js';


export default function Home() {
  return (
    <>
      <Navbar />
      <Discover />
      {/* <Search /> */}

      {/* <Username/> */}
    </>
  )
}
