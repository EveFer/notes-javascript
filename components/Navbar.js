import Link from 'next/link'
import Image from 'next/image'

export default function Navbar () {
  const arrayPhrases = [
    {
      phrase: 'Primero, resuelve el problema. Luego escribe el código.',
      author: 'John Johnson'
    }

  ]
  return (
    <nav className='navbar'>
      <div className='container'>

        <Link href='/' passHref>
          <Image src='/logos/kodemia_white.png' height={56} width={56} alt='Logo Kodemia' />
        </Link>
        <div className='d-flex justify-content-between align-items-center w-90'>
          <p>Frase</p>
          <Link href='/js/ejercicios' passHref>
            <button>Ejercicios</button>
          </Link>
        </div>
      </div>
    </nav>
  )
}
