const formularioLogin = document.getElementById("formulario-login");

formularioLogin.addEventListener("submit", function(event) {

    event.preventDefault();

    let correo = document.getElementById("correo").value;
    let contrasena = document.getElementById("contrasena").value;

    if (correo === "madreemprendedora@gmail.com" && contrasena === "123456") {

        window.location.href = "mi-emprendimiento.html";

    } else {

        alert("❌ El correo o la contraseña son incorrectos.");

    }

});
function respuestaCorrecta() {
    document.getElementById("resultado").innerHTML =
        "¡Correcto! 🎉 Un emprendimiento busca ofrecer una solución o generar valor a partir de una idea.";
}

function respuestaIncorrecta() {
    document.getElementById("resultado").innerHTML =
        "❌ Esa no es la respuesta. Inténtalo nuevamente.";
}
function crearIdea() {

    let habilidad = document.getElementById("habilidad").value;
    let producto = document.getElementById("producto").value;
    let necesidad = document.getElementById("necesidad").value;

    document.getElementById("miIdea").innerHTML =
        "<h3>🌟 Mi idea de emprendimiento</h3>" +
        "<p><strong>Lo que sé hacer:</strong> " + habilidad + "</p>" +
        "<p><strong>Mi producto o servicio:</strong> " + producto + "</p>" +
        "<p><strong>Necesidad que soluciono:</strong> " + necesidad + "</p>";
}
function crearCliente() {

    let edad = document.getElementById("edad").value;
    let ubicacion = document.getElementById("ubicacion").value;
    let necesidad = document.getElementById("necesidadCliente").value;
    let interes = document.getElementById("interes").value;

    document.getElementById("perfilCliente").innerHTML =
        "<h3>👤 Mi cliente ideal</h3>" +
        "<p><strong>Edad:</strong> " + edad + "</p>" +
        "<p><strong>Ubicación:</strong> " + ubicacion + "</p>" +
        "<p><strong>Necesidad:</strong> " + necesidad + "</p>" +
        "<p><strong>Interés:</strong> " + interes + "</p>";
}
function crearPropuesta() {

    let producto = document.getElementById("productoValor").value;
    let problema = document.getElementById("problemaValor").value;
    let diferencia = document.getElementById("diferenciaValor").value;

    document.getElementById("propuestaValor").innerHTML =
        "<h3>🌟 Mi propuesta de valor</h3>" +
        "<p>Ofrezco <strong>" + producto + "</strong> " +
        "para solucionar <strong>" + problema + "</strong>. " +
        "Mi emprendimiento se diferencia porque " +
        "<strong>" + diferencia + "</strong>.</p>";
}
function crearCamposCostos() {

    let cantidad = Number(
        document.getElementById("cantidadCostos").value
    );

    let campos = document.getElementById("camposCostos");

    campos.innerHTML = "";

    for (let i = 1; i <= cantidad; i++) {

        campos.innerHTML +=
            "<p><strong>Material " + i + "</strong></p>" +

            "<label>Nombre:</label><br>" +
            "<input type='text' id='nombre" + i +
            "' placeholder='Ejemplo: Harina'>" +

            "<br>" +

            "<label>Precio:</label><br>" +
            "<input type='number' id='precio" + i +
            "' placeholder='Ejemplo: 8000'>" +

            "<br><br>";
    }
}
function calcularCostoTotal() {

    let cantidad = Number(
        document.getElementById("cantidadCostos").value
    );

    let total = 0;

    for (let i = 1; i <= cantidad; i++) {

        let precio = Number(
            document.getElementById("precio" + i).value
        );

        total = total + precio;
    }

    document.getElementById("resultadoCostos").innerHTML =
        "<h3>💰 Resultado</h3>" +
        "<p>El costo total es: <strong>$" +
        total.toLocaleString() +
        "</strong></p>";
}
function calcularPrecioVenta() {

    let costo = Number(
        document.getElementById("costoProducto").value
    );

    let ganancia = Number(
        document.getElementById("gananciaDeseada").value
    );

    let precioVenta = costo + ganancia;

    document.getElementById("resultadoPrecio").innerHTML =
        "<h3>💵 Resultado</h3>" +
        "<p>Tu precio de venta podría ser: " +
        "<strong>$" + precioVenta.toLocaleString() +
        "</strong></p>";
}
function calcularGanancia() {

    let ingresos = Number(
        document.getElementById("ingresos").value
    );

    let costos = Number(
        document.getElementById("costosGanancia").value
    );

    let ganancia = ingresos - costos;

    document.getElementById("resultadoGanancia").innerHTML =
        "<h3>📈 Resultado</h3>" +
        "<p>Tu ganancia es de: " +
        "<strong>$" + ganancia.toLocaleString() +
        "</strong></p>";
}
function registrarMovimiento() {

    let descripcion =
        document.getElementById("descripcionMovimiento").value;

    let tipo =
        document.getElementById("tipoMovimiento").value;

    let valor =
        Number(document.getElementById("valorMovimiento").value);

    document.getElementById("resultadoMovimiento").innerHTML =
        "<h3>📊 Movimiento registrado</h3>" +
        "<p><strong>Descripción:</strong> " +
        descripcion + "</p>" +
        "<p><strong>Tipo:</strong> " +
        tipo + "</p>" +
        "<p><strong>Valor:</strong> $" +
        valor.toLocaleString() + "</p>";
}
function seleccionarRedes() {

    let redes =
        document.querySelectorAll(
            'input[name="redSocial"]:checked'
        );

    let seleccionadas = "";

    for (let i = 0; i < redes.length; i++) {

        seleccionadas =
            seleccionadas +
            "<li>" + redes[i].value + "</li>";
    }

    if (seleccionadas == "") {

        document.getElementById("resultadoRedes").innerHTML =
            "<p>⚠️ Selecciona al menos una red social.</p>";

    } else {

        document.getElementById("resultadoRedes").innerHTML =
            "<h3>📱 Redes seleccionadas</h3>" +
            "<ul>" + seleccionadas + "</ul>";
    }
}
function crearPublicacion() {

    let producto =
        document.getElementById("nombreProducto").value;

    let caracteristica =
        document.getElementById("caracteristicaProducto").value;

    let contacto =
        document.getElementById("contacto").value;

    document.getElementById("resultadoPublicacion").innerHTML =

        "<h3>📱 Así podría quedar tu publicación</h3>" +

        "<div class='curso'>" +

        "<h3>✨ " + producto + "</h3>" +

        "<p>🎉 ¡Conoce nuestro " + producto + "!</p>" +

        "<p>⭐ " + caracteristica + "</p>" +

        "<p>📲 Contáctanos: " + contacto + "</p>" +

        "</div>";
}
function crearMarca() {

    let nombre =
        document.getElementById("nombreMarca").value;

    let eslogan =
        document.getElementById("esloganMarca").value;

    let personalidad =
        document.getElementById("personalidadMarca").value;

    document.getElementById("resultadoMarca").innerHTML =

        "<h3>✨ Así es tu marca</h3>" +

        "<div class='curso'>" +

        "<h2>🏷️ " + nombre + "</h2>" +

        "<p><strong>Eslogan:</strong> " +
        eslogan + "</p>" +

        "<p><strong>Personalidad:</strong> " +
        personalidad + "</p>" +

        "</div>";
}
function crearPublicidad() {
    let producto =
        document.getElementById("productoPublicidad").value;

    let objetivo =
        document.getElementById("objetivoPublicidad").value;

    let publico =
        document.getElementById("publicoPublicidad").value;

    let presupuesto =
        Number(
            document.getElementById("presupuestoPublicidad").value
        );

    document.getElementById("resultadoPublicidad").innerHTML =
        "<h3>📢 Mi campaña publicitaria</h3>" +
        "<p><strong>Producto o servicio:</strong> " +
        producto + "</p>" +
        "<p><strong>Objetivo:</strong> " +
        objetivo + "</p>" +
        "<p><strong>Público:</strong> " +
        publico + "</p>" +
        "<p><strong>Presupuesto diario:</strong> $" +
        presupuesto.toLocaleString() + "</p>";
}
function crearPerfilClienteVenta() {

    let producto =
        document.getElementById("productoClienteVenta").value;

    let edad =
        document.getElementById("edadClienteVenta").value;

    let necesidad =
        document.getElementById("necesidadClienteVenta").value;

    let interes =
        document.getElementById("interesClienteVenta").value;

    document.getElementById("resultadoClienteVenta").innerHTML =
        "<h3>👤 Mi cliente</h3>" +
        "<p><strong>Producto o servicio:</strong> " +
        producto + "</p>" +
        "<p><strong>Edad:</strong> " +
        edad + "</p>" +
        "<p><strong>Necesidad:</strong> " +
        necesidad + "</p>" +
        "<p><strong>Interés:</strong> " +
        interes + "</p>";
}
function crearMensajeVenta() {

    let producto =
        document.getElementById("productoVenta").value;

    let beneficio =
        document.getElementById("beneficioVenta").value;

    let mensaje =
        document.getElementById("mensajeVenta").value;

    document.getElementById("resultadoVenta").innerHTML =
        "<h3>💬 Mi mensaje de venta</h3>" +
        "<p><strong>Producto:</strong> " +
        producto + "</p>" +
        "<p><strong>Beneficio:</strong> " +
        beneficio + "</p>" +
        "<p><strong>Mensaje para mi cliente:</strong></p>" +
        "<div class='curso'>" +
        "<p>" + mensaje + "</p>" +
        "</div>";
}



