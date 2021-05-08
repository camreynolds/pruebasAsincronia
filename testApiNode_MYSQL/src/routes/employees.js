const express = require('express');     // En este caso se requiere "express" no para utilizalo como Servidor
                                        // si no para utilizar un método llamado "Routes". Este método crea un
                                        // objeto para definir "rutas" de nuestro servidor.
const router = express.Router();        // El método "Routes()" retorna un objeto que se guarda en la variable "router".

const mysqlConnection = require('../database'); // Lo utilizo para poder realizar consultas a la Base de datos.

router.get('/', async (req, res) => {
  await mysqlConnection.query('SELECT * FROM employees', (err, rows, fields) => {
    if(!err){
      res.json(rows);
    }else{
      console.error(err);
    };
  });
});

router.get('/:id', async (req, res) => {
  const {id} = req.params;
  await mysqlConnection.query('SELECT * FROM employees WHERE id = ?', [id], (err, rows, fields) => {
    if(!err){
      //res.json(rows); // De esta manera obtengo un arreglo de objetos.
      res.json(rows[0]);  // Obtengo el objeto en la posición 0 del arreglo. Este arreglo tiene un solo objeto,
                          // porque estoy filtrando por un "id" único.
    }else {
      console.error(err);
    };
  });
});

//router.post();

module.exports = router;                // Se exporta la variable (constante) llamada "router".
