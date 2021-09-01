import Link from 'next/link'
import Image from 'next/image'

export default function Navbar () {
  const arrayPhrases = [
    {
      phrase: 'Primero, resuelve el problema. Luego escribe el código.',
      author: 'John Johnson'
    },
    {
      phrase: 'No documentes el problema; arréglalo',
      author: 'Atli Björgvin Oddsson'
    }

  ]
  return (
    <nav className='navbar'>
      <div className='container'>
        <div className='d-flex justify-content-between w-100'>
          <div className='d-flex justify-content-between align-items-center'>
            <Link href='/' passHref>
              <Image src='/logos/kodemia_white.png' height={56} width={56} alt='Logo Kodemia' />
            </Link>
            <p className='d-none d-md-block ms-5'>Primero, resuelve el problema. Luego escribe el código - <small>John Johnson</small></p>
          </div>
          <div className='d-flex justify-content-between align-items-center'>
            <Link href='/js/ejercicios' passHref>
              <button>Ejercicios</button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
