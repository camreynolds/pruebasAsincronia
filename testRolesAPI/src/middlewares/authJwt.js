import jwt, { decode } from 'jsonwebtoken';
import config from '../config';
import User from '../models/User';
import Roles from '../models/Role';
import Role from '../models/Role';

export const verifyToken = async (req, res, next) => {
    try {
        const token = req.headers["x-access-token"];

        if(!token) return res.status(403).json({mensaje: 'No se ha proveído el token.'});

        const decoded = jwt.verify(token, config.SECRET);
        req.userId = decoded.id; // Dentro del objeto "req" se crea una propiedad llamada "userId" y le guardo el "id" decodificado.
        
        const user = await User.findById(req.userId, {password: 0}); // Minuto 1:45:34 del vídeo.
        console.log(user);
        if (!user) return res.status(404).json({mensaje: 'usuario no encontrado'});
        
        next();
    } catch (error) {
        res.status(401).json({mensaje: 'sin autorización.'});
    };
};

export const isModerator = async (req, res, next) => {
    const user = await User.findById(req.userId); // minuto 1:53:51 del vídeo.
    const roles = await Role.find({_id: {$in: user.roles}});

    for (let i = 0; i < roles.length; i++){
        if(roles[i].name === "moderator"){
            next();
            return;
        };
    };

    return res.status(403).json({mensaje: "requiere ser moderador."});    
};

export const isAdmin = async (req, res, next) => {
    const user = await User.findById(req.userId); // minuto 1:58:56 del vídeo.
    const roles = await Role.find({_id: {$in: user.roles}});

    for (let i = 0; i < roles.length; i++){
        if(roles[i].name === "admin"){
            next();
            return;
        };
    };

    return res.status(403).json({mensaje: "requiere ser administrador."});    
};