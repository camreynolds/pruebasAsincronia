import {Router} from 'express' // Importa desde "express" el módulo llamado "Routers". Importa un enrutador de express.
const router = Router() // Se inicializa de esta manera, ejecutándolo.

// Este endpoint será precedido con "/products" configurado en el app.use('/products', productsRoutes) en app.js.
router.get('/', (req, res) => { 
    res.json('Obtener productos.');
});



export default router; // Se exporta de esta manera.