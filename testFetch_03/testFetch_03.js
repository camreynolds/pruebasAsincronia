// Ejemplo tomado del siguiente canal de Youtube: https://youtu.be/tpNVMdhW7ow

const botonImg = document.getElementById("botonImg");
const botonPdf = document.getElementById("botonPdf");

/*
// Este ejemplo no se pudo replicar por problemas de CORS.
botonImg.addEventListener("click", function(){
    fetch('perro.jpeg')
        .then(res => res.blob())
        .then(img => {
            document.getElementById("img").src = URL.createObjectURL(img);
        });
});
*/

botonImg.addEventListener("click", function(){
    fetch('https://api.unsplash.com/photos/random?client_id=XMkm73IQhvTG00T_wAMRDXcIBvC56JB1hIlQN6t7IFM')
        .then(res => res.json())
        .then(res => res.urls.small)
        .then(res => {
            console.log(res);
            document.getElementById("img").src = res;
        })
        .catch(e => {
            console.log("No se pudo mostrar la imagen." + e);
        });
});

botonPdf.addEventListener("click", function(){
    
});