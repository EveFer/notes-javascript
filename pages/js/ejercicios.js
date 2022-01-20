import Layout from '../../components/Layout'

export default function ejercicips () {
  return (
    <Layout>
      <section className='container'>
        <div className='row'>
          <div className='col'>
            <h1 className='text-center my-5'>Ejercicios JavaScript 🤓</h1>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <div className='accordion' id='accordionExample'>
              <div className='accordion-item'>
                <h2 className='accordion-header' id='headingOne'>
                  <button className='accordion-button' type='button' data-bs-toggle='collapse' data-bs-target='#collapseOne' aria-expanded='true' aria-controls='collapseOne'>
                    Operadores y Estructuras condicionales
                  </button>
                </h2>
                <div id='collapseOne' className='accordion-collapse collapse show' aria-labelledby='headingOne' data-bs-parent='#accordionExample'>
                  <div className='accordion-body'>
                    <ol>
                      <li><code>Pedir 2 números al usuario y mostrar en consola el resultado de aplicar todas las operaciones aritméticas entre esos dos números</code></li>
                      <li><code>Pedir al usuario dos números y escribir en consola si el primer número es mayor que el segundo.</code></li>
                      <li><code>Pedir al usuario dos letras, y determinar si la primera apare antes o después en el alfabeto.</code></li>
                      <li>
                        <code>Pedir 2 variables por prompt: <br />
                          {
                          '- Si a > b dividir a entre b'
                          }<br />
                          {
                            '- Si a < b sumar a más b'
                          }<br />
                          - si a == b multiplicar ambos numeros<br />
                          Imprimir el resultado en consola
                        </code>
                      </li>
                      <li>
                        <code>
                          Pedir al usuario por prompt un numero entre 1 y 100 <br />
                          - Verificar si es un par o impar e imprimir en resultado en consola
                        </code>
                      </li>
                      <li>
                        <code>
                          Pedir al usuario 2 numeros <br />
                          - Imprimir en consola cual es el menor de los 2 <br />
                          - Imprimir en consola cual es el mayor de los 2 <br />
                        </code>
                      </li>
                      <li>
                        <code>
                          Pedir al usuario los siguientes datos a un usuario (<strong>nombre</strong>, <strong>peso actual en kg</strong>): <br />
                          - Calcular el peso que tendria esa persona en la luna en Imprimirlo en consola
                        </code>
                      </li>
                      <li>
                        <code>
                          Pedir al usuario la calificación de un examen ( 0 a 100) por el prompt: <br />
                          -Imprimir en consola las equivalencias en letra su calificación, es decir:<br />
                          🎯 si es mayor o igual a 90, imprimir &quot;A&quot;  <br />
                          🎯 si es mayor o igual a 80 y menor que 90 , imprimir &quot;B&quot; <br />
                          🎯 si es mayor o igual a 70 y menor que 80 , imprimir &quot;C&quot; <br />
                          🎯 si es mayor o igual a 60 y menor que 70 , imprimir &quot;D&quot; <br />
                          🎯 si es mayor o igual a 50 y menor que 60 , imprimir &quot;E&quot; <br />
                          🎯 si es menor 50 , imprimir &quot;F&quot;
                        </code>
                      </li>
                      <li>
                        <code>
                          Pedir al usuario el dia de la semana * p.ej. lunes, martes, ... Imprimir en consola el número del dia de la semana equivalente es decir: <br />
                          domingo -`&gt;` 0, <br />
                          lunes -`&gt;` 1,<br />
                          martes -`&gt;` 2, etc...
                        </code>
                      </li>
                    </ol>

                  </div>
                </div>
              </div>
              <div className='accordion-item'>
                <h2 className='accordion-header' id='headingTwo'>
                  <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseTwo' aria-expanded='false' aria-controls='collapseTwo'>
                    Arrays and Objects
                  </button>
                </h2>
                <div id='collapseTwo' className='accordion-collapse collapse' aria-labelledby='headingTwo' data-bs-parent='#accordionExample'>
                  <div className='accordion-body'>
                    <a href='https://gist.github.com/EveFer/508433e44650d5f14789fcbcbe271a2b' target='_blank' rel='noreferrer'>Link a Ejercicios 🤓</a>
                  </div>
                </div>
              </div>
              {/* <div className='accordion-item'>
                <h2 className='accordion-header' id='headingThree'>
                  <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseThree' aria-expanded='false' aria-controls='collapseThree'>
                    Accordion Item #3
                  </button>
                </h2>
                <div id='collapseThree' className='accordion-collapse collapse' aria-labelledby='headingThree' data-bs-parent='#accordionExample'>
                  <div className='accordion-body'>
                    <strong>This is the third item&apos;s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
