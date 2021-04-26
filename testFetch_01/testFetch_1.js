const boton = document.getElementById("boton");

/*
boton.addEventListener("click", function(){
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res)) // Esto es una línea de código que me asegura que la promesa se haya resuelto.
        .then(res => res.json())
        .then(data => console.log(data))
});
*/

// Imprimo los datos que me devuelve la API en forma de lista en el navegador.
/*
boton.addEventListener("click", function(){
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res)) // Esto es una línea de código que me asegura que la promesa se haya resuelto.
        .then(res => res.json())
        .then(data => {
            const lista = document.getElementById("lista");
            for (const userInfo of data) {
                const listItem = document.createElement("li");
                listItem.textContent = `${userInfo.id} - ${userInfo.name}`;
                lista.appendChild(listItem);
            };
        });
});
*/

// Lo mismo pero con "fragment".
boton.addEventListener("click", function(){
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res)) // Esto es una línea de código que me asegura que la promesa se haya resuelto.
        .then(res => res.json())
        .then(data => {
            const lista = document.getElementById("lista");
            const fragment = document.createDocumentFragment();
            for (const userInfo of data) {
                const listItem = document.createElement("li");
                listItem.textContent = `${userInfo.id} - ${userInfo.name}`;
                fragment.appendChild(listItem);
            };
            lista.appendChild(fragment);
        });
});