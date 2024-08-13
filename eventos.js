document.getElementById("miDiv").addEventListener("click", function() {
    alert("Hola! Soy el div");
});
document.getElementById("miBoton").addEventListener("click", function(event) {
    alert('Hola!');
    event.stopPropagation(); 
});
