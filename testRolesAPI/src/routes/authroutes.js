import {Router} from 'express' // Importa desde "express" el módulo llamado "Routers". Importa un enrutador de express.
const router = Router() // Se inicializa de esta manera, ejecutándolo.

import * as authCtrl from '../controllers/authcontroller';

router.post('/signup', authCtrl.signUp);
router.post('/signin', authCtrl.signIn);

export default router; // Se exporta de esta manera.