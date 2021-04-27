/*
FETCH API
    Proporciona una interfaz JavaScript para acceder, y manipular partes del canal HTTP, como peticiones, y respuestas.
    También provee un método global llamado fetch() que proporciona una forma fácil. y lógica de obtener recursos de forma asincrona por la red.

    Está basado en promesas, por lo cuel tiene un "response", y un "reject" internos. 

    Response tiene varios métodos:
    - arrayBuffer():    Archivos binarios en bruto (mp3, pdf, jpg, etc). Se utiliza cuando se necesita manipular el contenido del archivo.
    - blob():   Archivos binarios en bruto (mp3, pdf, jpg, etc). Se utiliza cuando no se necesita manipular el contenido del archivo, y se va a 
                trabajar con el archivo directamente.
    - clone():  Crea un clon del objeto respuesta, identico en todos los sentidos pero almacenado en una variable diferente.
    - formData():   Se utiliza para leer los objetos formData.
    - json(): Convierte los archivos json en un objeto de javaScript.
    - text(): Se utliza cuando se quiere leer un archivo de texto. Siempre se codifica en UTF-8.
*/

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