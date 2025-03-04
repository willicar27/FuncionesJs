//esta es la forma original del enunciado del elejercicio 3
/*function pintar(){
    ele.style.backgroundColor = 'yellow'
    }
    const ele = document.getElementById("ele1")
    ele.addEventListener("click", pintar); */

    //respuesta del ejercicio 3

    // const ele = document.getElementById("ele1")
    // ele.addEventListener("click", function(){
    //     ele.style.backgroundColor = yelow
    // });

//esta seria la respuesta de 2.3 del ejercicio

function pintar(color = 'green') {
    ele.style.backgroundColor = color;
    }
    const ele = document.getElementById("ele1")
    ele.addEventListener("click", function() {
        pintar('yellow');
    });