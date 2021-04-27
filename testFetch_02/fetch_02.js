/*
Fetch API
	Para hacer peticiones POST, fetch admite un segundo parámetro.
	fetch(url, {
		method: 'POST',
		body:	'<aquí van los datos a enviar>'. Si se va a enviar un 
				objeto hay que convertirlo previamente a formato JSON
				mediante el método JSON.stringify(datos),
		headers: {
			cabeceras de información sobre lo que se está enviando.
			https://developer.mozilla.org/docs/Web/Headers
		};
	});
*/

const boton_post = document.getElementById("post");
const boton_get = document.getElementById("get");

boton_post.addEventListener("click", function(){
	let nuevoPost = {
		title: "Mi Primer Post",
		body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		userId: 2
	}
	fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(nuevoPost),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
})
  .then(res => res.json())
  .then(data => console.log(data));

});

boton_get.addEventListener("click", function(){
	fetch("https://jsonplaceholder.typicode.com/posts/1")
		.then(res => res.json())
		.then(res => console.log(res))
});