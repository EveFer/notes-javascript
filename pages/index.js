import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function Home () {
  return (
    <Layout>
      <section className='container welcome'>
        <div className='row'>
          <div className='col-12 d-flex flex-column align-items-center'>
            <h1> 🎯 Bienvenidos al Módulo de JavaScript 🎯 </h1>
            <p>
              Hola Koders!!!
              La siguiente recopilación de topicos de JS esta realizada con mucho cariño 💛. Todos tendremos acceso a las notas y recursos necesarios además de muchos ejercicios
              para retroalimentarnos y aprender más de nuestro lenguaje <strong>JavaScript</strong>
            </p>
            <Image src='/logos/javaScript.png' alt='JavaScript Logo' height={300} width={300} />
            <Link href='/js/introduccion'>
              <a>Yei!! Comencemos!!!</a>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}
