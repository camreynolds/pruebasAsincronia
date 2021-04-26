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
  .then((response) => response.json())
  .then((json) => console.log(json));

});

boton_get.addEventListener("click", function(){
	fetch("https://jsonplaceholder.typicode.com/posts/1")
		.then(res => res.json())
		.then(res => console.log(res))
});