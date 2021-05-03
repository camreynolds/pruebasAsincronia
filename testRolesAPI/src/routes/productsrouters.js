import {Router} from 'express'; // Importa desde "express" el módulo llamado "Routers". Importa un enrutador de express.
const router = Router(); // Se inicializa de esta manera, ejecutándolo.

import * as productsCtrl from '../controllers/productscontroller'; // Importa todos los controladores relacionados con productos.
import {authJwt} from '../middlewares';



// Este endpoint será precedido con "/products" configurado en el app.use('/products', productsRoutes) en app.js.
router.post('/', [authJwt.verifyToken, authJwt.isModerator], productsCtrl.createProduct);
router.get('/', productsCtrl.getProduct);
router.get('/:productId', productsCtrl.getProductById);
router.put('/:productId', [authJwt.verifyToken, authJwt.isAdmin], productsCtrl.updateProductById);
router.delete('/:productId', [authJwt.verifyToken, authJwt.isAdmin], productsCtrl.deleteProductById);



export default router; // Se exporta de esta manera.