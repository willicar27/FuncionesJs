let a = "pink";
let s = "orange";
let d = "lightblue";

let key = document.getElementById("key");

document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        key.style.backgroundColor = a;/* Cambiar a color 1 */
    } else if (event.key === 's') {
        key.style.backgroundColor = s;/* Cambiar a color 2 */
    } else if (event.key === 'd') {
        key.style.backgroundColor = d;/* Cambiar a color 3 */
    }
    })

    //Segunda parte del ejercicio
    function nuevoCuadrado(color) {
        let nuevoDiv = document.createElement('div');
        nuevoDiv.style.width = '200px';
        nuevoDiv.style.height = '200px';
        nuevoDiv.style.border = '2px solid black';
        nuevoDiv.style.backgroundColor = color;
        document.body.appendChild(nuevoDiv);
    }
    
    document.addEventListener('keydown', function (event) {
        if (event.key === 'q')
             nuevoCuadrado('purple');
        else if (event.key === 'w') 
            nuevoCuadrado('gray');
        else if (event.key === 'e')
             nuevoCuadrado('brown');
    });

