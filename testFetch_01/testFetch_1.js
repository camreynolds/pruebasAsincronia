const boton = document.getElementById("boton");

boton.addEventListener("click", function(){
    fetch("https://my-json-server.typicode.com/typicode/demo/comments")
    //fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => console.log(data))
});