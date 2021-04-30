// Ejemplo tomado de la siguiente dirección: https://youtu.be/lV7mxivGX_I

// index.js sirve solo para que arranque la aplicación.

import app from './app';
import './database' // Importo "./database" para que se inicie "mongoose".
app.listen('3000');
console.log('Server Listen on port', 3000);