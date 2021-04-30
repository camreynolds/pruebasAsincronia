// app.js sirve para configurar la aplicación de express.

import express from 'express'
import morgan from 'morgan' // Morgan es un middleware de express.
import pkg from '../package.json'
import productsRoutes from './routes/productsrouters'
import authroutes from './routes/authroutes'

const app = express()

app.set('pkg', pkg) //Crea una variable de express y le asigna un valor.
app.use(morgan('dev'));
app.use(express.json()); // Traduce los objetos "json" a objetos de javascript.

app.get('/', (req, res) => {
    res.json({
        // app.get() se sirve para traer los valores de los atributos del package-json guardados en la variable "pkg".
        name: app.get('pkg').name,
        author: app.get('pkg').author, 
        description: app.get('pkg').description,
        version: app.get('pkg').version,
    });
});

app.use('/api/products', productsRoutes); // Todas estas rutas van a empezar con "'/products".
app.use('/api/auth', authroutes); // Todas estas rutas van a empezar con "'/auth".

 export default app;