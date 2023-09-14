# node-promises

¿Qué sucedio al usar async y await?

En el ejemplo con async, await el codigo se ecribe de forma secuencial
y se siente que es mas facil de comprender. 

El manejo de errores fue realizado mediante try y catch. se me hace mas facil 
manejar las excepciones de esta forma

fue mas facil comprender el concepto de asincronismo ya que las funciones async
tienen casi la misma estructura de las funciones sincronicas.

¿Qué sucedió al usar el método then()?

se encadenaron varion callbacks en formato .then() para manejar las promesas.
lo que concluyo con un codigo mas denso

el manejo de errores fue realizado simplemente por un catch. me resulto menos intuitivo 
manejar las excepciones en comparacion de hacerlo con try y catch

    - principalmente la sintaxis: el metodo then() requiere encadenar multiples llamados, aumentando la densidad y tamano del codigo
    mientras que async&await tiene una secuencia mas plana y legible.

    - la forma para manejar errores y excepciones

    - el metodo then() se siente mas rustico, asociado a sintaxis de lenguajes antiguos, mientras que async&await va un poco mas de lado con la modernidad de javascript

