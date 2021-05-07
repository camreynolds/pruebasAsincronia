const mysql = require('mysql');   // Llamo al módulo "mysql" y lo guardo en una constante llamada "mysql".

// Se configura una cadena de conexión a la base de datos.
const mysqlConnection = mysql.createConnection({   // Llamo al método ".createConnection" y le paso un objeto como parámetro.
                                                    // El objeto que se le puede pasar cuenta con distintas "propiedades".
                                                    // Al ejecutar el método ".createConnection" retorna un objeto que contiene todas
                                                    // los valores de las propiedades de conexión, este objeto lo almaceno en una
                                                    // constante llamada "mysqlConnection".
  host: 'localhost',  // Indica la ruta en donde se encuentra alojado el servidor.
  user: 'root',
  password: '',
  database: 'company'
});

mysqlConnection.connect(function(e){    // El método ".connect" es el que realmente se va a conectar a la Base de datos.
    if(e) {
      console.error(e);
      return;
    }else {
      console.log('La base de datos está conectada.');
    };
});

module.exports = mysqlConnection;
