import {Router} from 'express' // Importa desde "express" el módulo llamado "Routers". Importa un enrutador de express.
const router = Router() // Se inicializa de esta manera, ejecutándolo.

import * as userCtrl from '../controllers/usercontroller';
import {authJwt, verifySignup} from '../middlewares';

router.post('/', [
    authJwt.verifyToken, 
    authJwt.isAdmin, 
    verifySignup.checkRolesExisted
],userCtrl.createUser);

export default router; // Se exporta de esta manera.