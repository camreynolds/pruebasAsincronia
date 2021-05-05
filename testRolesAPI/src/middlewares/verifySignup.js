import {ROLES} from '../models/Role';
import User from '../models/User';


export const checkDuplicateUsernameOrEmail = async (req, res, next) => {
    const user = await User.findOne({Username: req.body.Username});
    if (user) return res.status(400).json({mensaje: 'El usuario ya existe.'});

    const email = await User.findOne({email: req.body.email});
    if (email) return res.status(400).json({mensaje: 'El correo ya existe.'});

    next();
};

export const checkRolesExisted = (req, res, next) => {
    if(req.body.roles) {
        for(let i = 0; i < req.body.roles.length; i++){
            if(!ROLES.includes(req.body.roles[i])) {
                console.log(req.body.roles[i]); // verifica lo que haya en la posición "i" del arreglo. No es necesario, solo para control.
                return res.status(400).json({
                    mensaje: `Rol ${req.body.roles[i]} no existe`,
                    respuesta: `${req.body.roles}`
                });
            };
        };
    };
    next();
};