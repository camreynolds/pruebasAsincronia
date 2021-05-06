import User from '../models/User';
import jwt from 'jsonwebtoken';
import config from '../config';
import Role from '../models/Role';


export const signUp = async (req, res) => {  
    const {username, email, password, roles} = req.body;
    
    const newUser = new User({
        username,
        email, 
        password: await User.encryptPassword(password),
    });

    console.log("Nuevo usuario: " + newUser);
    res.json({"Nuevo usuario:": newUser});
};
/*
export const signUp = async (req, res) => {  
    const {username, email, password, roles} = req.body;

    const newUser = new User({
        username,
        email, 
        password: await User.encryptPassword(password)
    });

    if (roles) {
        const foundRoles = await Role.find({name: {$in: roles}});
        newUser.roles = foundRoles.map(role => role._id);
    } else{
        const role = await Role.findOne({name: "user"});
        newUser.roles = [role._id];
    };

    const savedUser = await newUser.save();
    console.log(newUser);

    const token = jwt.sign({id: savedUser._id}, config.SECRET, {
        expiresIn: 869400 // 24 horas
    });

    res.status(200).json({token}) // Le devuelvo al usuario (FRONTEND) el token generado, para poder utilizar el resto de los endpoints.


};
*/
export const signIn = async (req, res) => {
    const userFound = await User.findOne({email: req.body.email}).populate('roles');

    if(!userFound) return res.status(400).json({mensaje: 'Usuario no encontrado'});

    const matchPassword = await User.comparePassword(req.body.password, userFound.password);

    if(!matchPassword) return res.status(401).json({token: null, mensaje: 'Contraseña inválida.'});

    const token = jwt.sign({id: userFound._id}, config.SECRET, {
        expiresIn: 86400
    });

    res.status(200).json({token: token});
    // res.status(200).json({token}); // Esto hace lo mismo que la línea de arriba.
    // res.json({token}); // Esto hace lo mismo que la línea de arriba.
};
