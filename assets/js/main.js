console.log("Hola consola")


function skinet() {
    return ["piedra", "papel", "tijera"][Math.floor(Math.random() * 3)]
}

function cachipum() {
    let games = parseInt(prompt("¿Cuántas veces quieres jugar?"))
    let victoriasUsuario = 0
    let victoriasSkinet = 0

    for (let i = 0; i < games; i++) {
        let eleccionUsuario = prompt("Elige piedra ✊🏼, papel 🖐🏼 o tijera ✌🏼. Escribe tu opción:").toLocaleLowerCase()
        let eleccionSkinet = skinet()

        if (eleccionUsuario === eleccionSkinet) {
            alert("Es un empate")
            console.log("Empate")
        } else if (
            (eleccionUsuario === "piedra" && eleccionSkinet === "tijera") ||
            (eleccionUsuario === "papel" && eleccionSkinet === "piedra") ||
            (eleccionUsuario === "tijera" && eleccionSkinet === "papel")
        ) {
            console.log("¡GANASTE")
            victoriasUsuario++
        } else {
            console.log("PERDISTE")
            victoriasSkinet++
        }

        console.log(`Has ganado ${victoriasUsuario} de ${games}.`)
        console.log(`Skinet ha ganado 🤖 ${victoriasSkinet} de ${games}.`)
        console.log(i, games)

        if (i === games - 1 && victoriasUsuario > victoriasSkinet) {
            alert("GANASTE!!!")
        } else if (i === games - 1 && victoriasUsuario === victoriasSkinet) {
            alert("HAN EMPATADO")
        } else if (i === games - 1) {
            alert("PERDISTE LA HUMANIDAD SE PERDERÁ POR TU CULPA")
        }
    }
}

cachipum()