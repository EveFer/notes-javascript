import { useEffect } from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'

export default function Layout ({ children }) {
  useEffect(() => {
    typeof document !== undefined ? require('bootstrap/dist/js/bootstrap') : null
  }, [])

  return (
    <>
      <Head>
        <title>JavaScript</title>
      </Head>
      <Navbar />
      {children}
    </>
  )
}
