const express = require('express');     // En este caso se requiere "express" no para utilizalo como Servidor
                                        // si no para utilizar un método llamado "Routes". Este método crea un
                                        // objeto para definir "rutas" de nuestro servidor.
const router = express.Router();        // El método "Routes()" retorna un objeto que se guarda en la variable "router".


module.exports = router;                // Se exporta la variable (constante) llamada "router".
