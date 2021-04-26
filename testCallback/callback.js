/*
const getUser = function(id, cb){
	const user = {
  	nombre: "Carlos",
    id,
  };
  
  if(id===2) cb("Usuario no existe")
  else cb(null, user);
};

getUser(3, function(err, data){
	if(err) return console.log(err);
  console.log("Nombre de usuario es: " + data.nombre);
  console.log("Id de usuario es: " + data.id);
});
*/

users = [
	{
  	id: 1,
  	nombre: "Carlos"
  },
  {
  	id: 2,
  	nombre: "Andrés"
  },
  {
  	id: 3,
  	nombre: "Mauricio"
  },
  {
  	id: 4,
  	nombre: "Alberto"
  },
];

emails = [
	{
  	id: 1,
  	email: "carlos@gmail.com"
  },
  {
  	id: 2,
  	email: "andres@gmail.com"
  },
  {
  	id: 3,
  	email: "mauricio@gmail.com"
  },
];

function getUser(id,cb){
	const user = users.find(user => user.id === id);
  if(!user)  return cb(`El usuario con el id: ${id} no existe.`);
  cb(null, user);
};

function getEmail(user, cb){
	const email = emails.find(email => email.id === user.id);
  if(!email) return cb(`${user.nombre} no tiene un correo asignado.`)
  else  cb(null, {
  	id: user.id,
    nombre: user.nombre,
    email: email.email
  });
};

// SE COMIENZA A FORMAR EL CALLBACK HELL.
getUser(5, function(err, data){
	if(err) return console.log(err);
  getEmail(data, function(err, res){
  	if(err) return console.log(err);
    console.log(res);
  });
});