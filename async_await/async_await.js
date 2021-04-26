/*
const getName = async () => {
	return promise = new Promise( (resolve, reject) => {
		setTimeout(() =>{
			resolve("Carlos");	
		},3000)
	});
};

const sayHello = async () => {
	const name = await getName();
	return `Hello ${name}`;
};

sayHello().then(res => console.log(res));
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

const getUser = async (id) => {
	const user = users.find(user => user.id === id);
	if(!user) throw new Error(`El usuario con el id: ${id} no existe.`)
  else return user;	
};

async function getEmail (user) {
	const email = emails.find(email => email.id === user.id);
	if(!email) throw new Error(`${user.nombre} no tiene un correo asignado.`)
	else  return ({
							id: user.id,
							nombre: user.nombre,
							email: email.email
						});	
};

const getInfo = async (id) => {
	try {
		const user = await getUser(id);
		const res = await getEmail(user);
		return `${user.nombre} email es ${res.email}`	
	}
	catch (error) {
		console.log(error);
	};
};

getInfo(5).then(res => console.log(res))