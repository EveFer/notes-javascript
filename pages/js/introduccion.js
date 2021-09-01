import Image from 'next/image'
import Layout from '../../components/Layout'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { monokai } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import meme1 from '../../public/memes/meme_1.jpeg'
import meme2 from '../../public/memes/meme_2.jpeg'

export default function introduccion () {
  return (
    <Layout>
      <section className='container'>
        <div className='row'>
          <div className='col-12'>
            {/* Introduccion */}
          </div>
        </div>

        <div className='row'>
          <div className='col-12'>
            {/* Versiones */}
            <hr />
            <h2>ECMAScript</h2>
            <ul>
              <li>ECMAScript es el nombre del estándar internacional que define JavaScript.</li>
              <li>Definido por un comité técnico (<a rel='noopener noreferrer' target='_blank' href='https://tc39.es/'>TC-39</a>) de ecma international</li>
              <li>Identificado como  <a rel='noopener noreferrer' target='_blank' href='https://www.ecma-international.org/publications-and-standards/standards/ecma-262/'>Ecma-262</a>  y ISO/IEC 16262.</li>
              <li>No es parte de la <a rel='noopener noreferrer' target='_blank' href='https://www.w3.org/'>W3C</a>.</li>
            </ul>
            <table className='table table-striped'>
              <thead>
                <tr>
                  <th scope='col'>Edición</th>
                  <th scope='col'>Publicación</th>
                  <th scope='col'>Cambios</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope='row'>1</th>
                  <td>1997</td>
                  <td>Primera edición</td>
                </tr>
                <tr>
                  <th scope='row'>2</th>
                  <td>1998</td>
                  <td>Cambios editorales para mentener la especificación completa alineada con el estándar internacional ISO/IEC 16262.</td>
                </tr>
                <tr>
                  <th scope='row'>3</th>
                  <td>1999</td>
                  <td>Se agregaron expresiones regulares, mejor manejo de strings, nuevo control de declaraciones, manejo de excepciones con try/catch, definición más estricta de errores, formato para la salida numérica y otras mejoras</td>
                </tr>
                <tr>
                  <th scope='row'>4</th>
                  <td>Abandonado</td>
                  <td>La cuarta edición fue abandonada debido a diferencias políticas respecto a la complejidad del lenguaje. Muchas características propuestas para la cuarta edición fueron completamente abandonadas; algunas fueron propuestas para la edición ECMAScript Harmony.</td>
                </tr>
                <tr>
                  <th scope='row'>5</th>
                  <td>2009</td>
                  <td>Agrega el modo estricto strict mode, un subconjunto destinado a proporcionar una mejor comprobación de errores y evitar constructores propensos a errores. Aclara varias ambigüedades de la tercera edición, y afina el comportamiento de las implementaciones del `&quot;`mundo real`&quot;` que difieren consistentemente desde esa especificación. Agrega algunas nuevas características, como getters y setters, librería para el soporte de JSON, y una más completa reflexión sobre las propiedades de los objetos.</td>
                </tr>
                <tr>
                  <th scope='row'>5.1</th>
                  <td>2011</td>
                  <td>Está completamente alineada con la tercera edición del estándar internacional ISO/IEC 16262:2011.</td>
                </tr>
                <tr>
                  <th scope='row'>6</th>
                  <td>2015</td>
                  <td>
                    <ul>
                      <li>Apartir del 2015 las actualizaciones son continuas teniendo una versión anual</li>
                      <li>ES2015 | <a rel='noopener noreferrer' target='_blank' href='https://262.ecma-international.org/6.0/'>ES6</a></li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th scope='row'>7</th>
                  <td>2016</td>
                  <td>ES2016 | <a rel='noopener noreferrer' target='_blank' href='https://262.ecma-international.org/7.0/'>ES7</a></td>
                </tr>
                <tr>
                  <th scope='row'>8</th>
                  <td>2017</td>
                  <td>ES2017 | <a rel='noopener noreferrer' target='_blank' href='https://262.ecma-international.org/8.0/'>ES8</a></td>
                </tr>
                <tr>
                  <th scope='row'>9</th>
                  <td>2018</td>
                  <td>ES2018 | <a rel='noopener noreferrer' target='_blank' href='https://262.ecma-international.org/9.0/'>ES9</a></td>
                </tr>
                <tr>
                  <th scope='row'>10</th>
                  <td>2019</td>
                  <td>ES2019 | <a rel='noopener noreferrer' target='_blank' href='https://262.ecma-international.org/10.0/'>ES10</a></td>
                </tr>
                <tr>
                  <th scope='row'>11</th>
                  <td>2020</td>
                  <td>
                    A partir del 2020 las nuevas actualizaciones al estándar simplemente se bautizarán como <a rel='noopener noreferrer' target='_blank' href='https://www.ecma-international.org/publications-and-standards/standards/ecma-262/'>ESNext</a>.

                  </td>
                </tr>
                <tr>
                  <th scope='row'>12</th>
                  <td>2021</td>
                  <td>ES2021 | <a rel='noopener noreferrer' target='_blank' href='https://262.ecma-international.org/12.0/'>ESNext</a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className='row'>
          <div className='col-12'>
            {/* Caracteristicas */}
            <hr />
            <h2>JavaScript</h2>
            <section className='intro-basic'>
              <h4>Isomorfismo</h4>
              <p>
                Hoy JavaScript, es el único lenguaje capaz de ejecutarse en las 3 capas de una aplicación:
              </p>
              <ol>
                <li>Frontend</li>
                <li>Backend</li>
                <li>Persistencia de Datos (con MongoDB, Firebase, etc).</li>
              </ol>

              <p>Además:</p>
              <ol>
                <li>Hacer Videojuegos.</li>
                <li>Controlar Hardware (drones).</li>
                <li>Aplicaciones Híbridas y Móviles.</li>
                <li>Aplicaciones de Escritorio.</li>
              </ol>
            </section>

            <section className='intro-basic'>
              <h4>JavaScript NO es JAVA</h4>
              <div className='d-flex flex-column align-items-center'>
                <Image src={meme1} alt='Meme - JavaScript no es Java' width={750} height={500} />
                <br />
                <Image src={meme2} alt='Meme - JavaScript no es Java' width={750} height={500} />
              </div>
            </section>

            <section className='intro-basic'>
              <h4>Características</h4>
              <p>🎯 Lenguaje de Alto Nivel.</p>
              <p>🎯 Interpretado.</p>
              <p>🎯 Dinámico</p>
              <p>🎯 Débilmente Tipado.</p>
              <p>🎯 Multi paradigma (Estructurado, POO, Funcional).</p>
            </section>

            <section className='intro-basic'>
              <h4>Escritura de código</h4>

              <p>
                Los <strong>indicadores</strong> (declaraciones de variables) deben comenzar con:
              </p>
              <ul>
                <li>✅ Una letra </li>
                <li>✅ Un signo de dolar <strong>$</strong> </li>
                <li>✅ Un guión bajo <strong>_</strong> </li>
                <li>❌ Nunca con números o caracteres especiales.</li>
              </ul>

              <div>
                <p>Usa <strong>snake_case</strong>  para:</p>
                <ul>
                  <li>Nombre de archivos</li>
                </ul>
                <SyntaxHighlighter
                  customStyle={{
                    borderRadius: '8px',
                    padding: '24px 16px'
                  }} language='shell' style={monokai}
                >
                  mi_archivo_javascript.js
                </SyntaxHighlighter>
              </div>

              <div>
                <p>Usa <strong>UPPER_CASE</strong>  para:</p>
                <ul>
                  <li>Constantes</li>
                </ul>
                <SyntaxHighlighter
                  showLineNumbers wrapLines language='javascript' style={monokai} customStyle={{
                    borderRadius: '8px',
                    padding: '24px 16px'
                  }}
                >
                  {'const PI = 3.1415926553 \nconst URL_BASE = \'http://localhost:8080\''}
                </SyntaxHighlighter>
              </div>

              <div>
                <p>Usa <strong>UpperCamelCase</strong>  para:</p>
                <ul>
                  <li>Clases</li>
                </ul>
                <SyntaxHighlighter
                  showLineNumbers wrapLines language='javascript' style={monokai} customStyle={{
                    borderRadius: '8px',
                    padding: '24px 16px'
                  }}
                >
                  {`class Koder {
 constructor(name, gender) {
   this.name = name;
   this.gender = gender;
 }

 miNombreEs() {
   return \`Mi nombre es \${this.name}\`;
  }
}`}
                </SyntaxHighlighter>
              </div>

              <div>
                <p>Usa <strong>lowerCamelCase</strong> para:</p>

                <ul>
                  <li>Variables</li>
                </ul>

                <SyntaxHighlighter
                  showLineNumbers wrapLines language='javascript' style={monokai} customStyle={{
                    borderRadius: '8px',
                    padding: '24px 16px'
                  }}
                >
                  {'let unaCadena = "Hola Mundo"\nlet unNumero = 19 \nlet unBoolean = true'}
                </SyntaxHighlighter>

                <ul>
                  <li>Objetos</li>
                </ul>

                <SyntaxHighlighter
                  showLineNumbers wrapLines language='javascript' style={monokai} customStyle={{
                    borderRadius: '8px',
                    padding: '24px 16px'
                  }}
                >
                  {'const koderObject = {\n name="Fernanda",\n generation=7,\n email="fernandapalacios.dev@gmail.com"\n} '}
                </SyntaxHighlighter>

                <ul>
                  <li>Arreglos</li>
                </ul>

                <SyntaxHighlighter
                  showLineNumbers wrapLines language='javascript' style={monokai} customStyle={{
                    borderRadius: '8px',
                    padding: '24px 16px'
                  }}
                >
                  const colors = [`&quot;`purple`&quot;`, `&quot;`orange`&quot;`, `&quot;`pink`&quot;`, `&quot;`red`&quot;`]
                </SyntaxHighlighter>

                <ul>
                  <li>Funciones</li>
                </ul>

                <SyntaxHighlighter
                  showLineNumbers wrapLines language='javascript' style={monokai} customStyle={{
                    borderRadius: '8px',
                    padding: '24px 16px'
                  }}
                >
                  {'function suma(num1, num2){\n const result = num1 + num2\n return result\n}'}
                </SyntaxHighlighter>

                <ul>
                  <li>Instancias</li>
                </ul>
                <SyntaxHighlighter
                  showLineNumbers wrapLines language='javascript' style={monokai} customStyle={{
                    borderRadius: '8px',
                    padding: '24px 16px'
                  }}
                >
                  const koder = new Koder(`&quot;`Fernanda`&quot;`, `&quot;`F`&quot;`)
                </SyntaxHighlighter>
              </div>

            </section>
          </div>
        </div>

        <div className='row'>
          <div className='col-12'>
            {/* Caracteristicas */}
            <h2>Tipos de Datos</h2>
            <p><strong>Primitivos</strong>: Accedemos directamente al valor</p>
            <ul>
              <li>string</li>
              <li>number</li>
              <li>boolean</li>
              <li>null</li>
              <li>undefined</li>
              <li>NaN</li>
            </ul>

            <p><strong>Compuestos</strong>: Accedemos a las referencia del valor</p>
            <ul>
              <li>objects = {}</li>
              <li>array = []</li>
              <li>function () {}</li>
              <li>class {}</li>
            </ul>
          </div>
        </div>

        <div className='row pb-5'>
          <div className='col-12'>
            {/* Caracteristicas */}
            <h2>No te olvides ...</h2>
            <div className='d-flex flex-column align-items-center'>
              <img
                className='introduction-more'
                src='/js/what_is_js.jpeg'
                alt='Meme - JavaScript no es Java'
              />
              <br />
              <img
                className='introduction-more'
                src='/js/variables_js.jpeg'
                alt='Meme - JavaScript no es Java'
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
