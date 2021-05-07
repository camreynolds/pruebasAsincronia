const express = require('express');
const app = express() // "express()" es un función que retorna un objeto,
                      // y ese objeto se almacena en una constante llamada "app".
                      // por medio de la constante "app" inicializo el servidor.


// Configuraciones.
app.set('port', process.env.PORT || 3000);  // Con "app.set()" setea una variable llamada "port"
                                            // "process.env.PORT" devuelve el puerto
                                            // que entrega el SO del sevidor en donde se realice deploy
                                            // del proyecto o en caso contrario asigna el valor "3000".

// Middlewares.
app.use(express.json());                    // Método que permite transformar los objetos en formato "json"
                                            // en objetos "javaScript".

// Routes
app.use(require('./routes/employees'));

// Iniciando el servidor.
app.listen(app.get('port'), () => {         // Con "app.get()" recupero el valor de la variable "port".
  console.log('Servidor en el puerto', app.get('port'));
});
